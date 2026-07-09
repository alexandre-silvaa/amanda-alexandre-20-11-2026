import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";

interface GiftPixOrderRequest {
  giftId?: number;
  name?: string;
  amount?: number;
  externalReference?: string;
  payerEmail?: string;
  documentType?: string;
  documentNumber?: string;
}

interface MercadoPagoPaymentResponse {
  id?: number | string;
  status?: string;
  status_detail?: string;
  point_of_interaction?: {
    transaction_data?: {
      ticket_url?: string;
      qr_code?: string;
      qr_code_base64?: string;
    };
  };
}

interface MercadoPagoErrorResponse {
  status?: number;
  message?: string;
  code?: string;
  error?: string;
  blocked_by?: string;
}

function sendJson(
  response: ServerResponse,
  statusCode: number,
  payload: Record<string, unknown>,
) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

function readBody(request: IncomingMessage) {
  return new Promise<GiftPixOrderRequest>((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      try {
        resolve(body ? (JSON.parse(body) as GiftPixOrderRequest) : {});
      } catch {
        reject(new Error("JSON inválido."));
      }
    });

    request.on("error", reject);
  });
}

function readQueryValue(url: string | undefined, key: string) {
  if (!url) return null;

  const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
  const params = new URLSearchParams(search);
  return params.get(key);
}

function formatAmount(amount: number) {
  return amount.toFixed(2);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePayment(payment: MercadoPagoPaymentResponse) {
  const transactionData = payment.point_of_interaction?.transaction_data;

  if (!transactionData?.qr_code) {
    throw new Error("O Mercado Pago não retornou o QR Code do Pix.");
  }

  return {
    paymentId: payment.id?.toString(),
    status: payment.status,
    statusDetail: payment.status_detail,
    ticketUrl: transactionData.ticket_url,
    qrCode: transactionData.qr_code,
    qrCodeBase64: transactionData.qr_code_base64,
  };
}

function getMercadoPagoErrorMessage(status: number) {
  if (status === 401 || status === 403) {
    return [
      "Mercado Pago recusou a autorização para criar o Pix.",
      "Confira se MERCADO_PAGO_ACCESS_TOKEN é o Access Token privado da conta vendedora,",
      "se ele pertence ao ambiente correto e se essa conta tem Pix habilitado.",
    ].join(" ");
  }

  return "Erro ao criar Pix no Mercado Pago.";
}

export default async function handler(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const accessToken =
    process.env.MERCADO_PAGO_ACCESS_TOKEN ??
    process.env.VITE_MERCADO_PAGO_ACCESS_TOKEN;

  if (!accessToken) {
    sendJson(response, 500, {
      error: "Configure MERCADO_PAGO_ACCESS_TOKEN no servidor e reinicie Vite.",
    });
    return;
  }

  if (request.method === "GET") {
    try {
      const paymentId = readQueryValue(request.url, "paymentId");

      if (!paymentId) {
        sendJson(response, 400, { error: "Informe paymentId." });
        return;
      }

      const mercadoPagoResponse = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const data = (await mercadoPagoResponse.json()) as
        | MercadoPagoPaymentResponse
        | MercadoPagoErrorResponse;

      if (!mercadoPagoResponse.ok) {
        sendJson(response, mercadoPagoResponse.status, {
          error: getMercadoPagoErrorMessage(mercadoPagoResponse.status),
          details: data,
        });
        return;
      }

      sendJson(
        response,
        200,
        normalizePayment(data as MercadoPagoPaymentResponse),
      );
    } catch (error) {
      sendJson(response, 500, {
        error:
          error instanceof Error
            ? error.message
            : "Erro inesperado ao consultar Pix.",
      });
    }

    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Método não permitido." });
    return;
  }

  try {
    const body = await readBody(request);
    const amount = Number(body.amount);
    const payerEmail = body.payerEmail?.trim().toLowerCase();
    const documentType = body.documentType?.trim().toUpperCase();
    const documentNumber = body.documentNumber?.trim();

    if (!Number.isFinite(amount) || amount <= 0) {
      sendJson(response, 400, { error: "Valor do presente inválido." });
      return;
    }

    if (!payerEmail || !isValidEmail(payerEmail)) {
      sendJson(response, 400, { error: "Informe um e-mail válido." });
      return;
    }

    if (!documentType || !documentNumber) {
      sendJson(response, 400, {
        error: "Informe tipo e número do documento.",
      });
      return;
    }

    const totalAmount = formatAmount(amount);
    const externalReference =
      body.externalReference ?? `gift-${body.giftId ?? randomUUID()}`;

    const mercadoPagoResponse = await fetch(
      "https://api.mercadopago.com/v1/payments",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Idempotency-Key": randomUUID(),
        },
        body: JSON.stringify({
          transaction_amount: Number(totalAmount),
          description: `${body.name ?? "Presente"} - ${externalReference}`,
          payment_method_id: "pix",
          external_reference: externalReference,
          payer: {
            email: payerEmail,
            identification: {
              type: documentType,
              number: documentNumber,
            },
          },
        }),
      },
    );

    const data = (await mercadoPagoResponse.json()) as
      | MercadoPagoPaymentResponse
      | MercadoPagoErrorResponse;

    if (!mercadoPagoResponse.ok) {
      sendJson(response, mercadoPagoResponse.status, {
        error: getMercadoPagoErrorMessage(mercadoPagoResponse.status),
        details: data,
      });
      return;
    }

    sendJson(
      response,
      200,
      normalizePayment(data as MercadoPagoPaymentResponse),
    );
  } catch (error) {
    sendJson(response, 500, {
      error:
        error instanceof Error
          ? error.message
          : "Erro inesperado ao gerar Pix.",
    });
  }
}
