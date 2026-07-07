import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";

interface GiftPixOrderRequest {
  giftId?: number;
  name?: string;
  amount?: number;
  externalReference?: string;
  payerEmail?: string;
}

interface MercadoPagoOrderResponse {
  id?: string;
  status?: string;
  status_detail?: string;
  transactions?: {
    payments?: Array<{
      id?: string;
      status?: string;
      status_detail?: string;
      payment_method?: {
        ticket_url?: string;
        qr_code?: string;
        qr_code_base64?: string;
      };
    }>;
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

function formatAmount(amount: number) {
  return amount.toFixed(2);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeOrder(order: MercadoPagoOrderResponse) {
  const payment = order.transactions?.payments?.[0];
  const method = payment?.payment_method;

  if (!method?.qr_code) {
    throw new Error("O Mercado Pago não retornou o QR Code do Pix.");
  }

  return {
    orderId: order.id,
    paymentId: payment?.id,
    status: payment?.status ?? order.status,
    statusDetail: payment?.status_detail ?? order.status_detail,
    qrCode: method.qr_code,
    qrCodeBase64: method.qr_code_base64,
  };
}

function getMercadoPagoErrorMessage(status: number) {
  if (status === 401 || status === 403) {
    return [
      "Mercado Pago recusou a autorização para criar o Pix.",
      "Confira se MERCADO_PAGO_ACCESS_TOKEN é o Access Token privado da conta vendedora,",
      "se ele pertence ao ambiente correto e se essa conta tem Pix/Orders API habilitados.",
    ].join(" ");
  }

  return "Erro ao criar Pix no Mercado Pago.";
}

export default async function handler(
  request: IncomingMessage,
  response: ServerResponse,
) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Método não permitido." });
    return;
  }

  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

  console.log(
    `[${new Date().toISOString()}] [${request.method}] ${request.url} - Access Token: ${accessToken}`,
  );

  if (!accessToken) {
    sendJson(response, 500, {
      error: "Configure MERCADO_PAGO_ACCESS_TOKEN no servidor.",
    });
    return;
  }

  try {
    const body = await readBody(request);
    const amount = Number(body.amount);
    const payerEmail = body.payerEmail?.trim().toLowerCase();

    if (!Number.isFinite(amount) || amount <= 0) {
      sendJson(response, 400, { error: "Valor do presente inválido." });
      return;
    }

    if (!payerEmail || !isValidEmail(payerEmail)) {
      sendJson(response, 400, { error: "Informe um e-mail válido." });
      return;
    }

    const totalAmount = formatAmount(amount);
    const externalReference =
      body.externalReference ?? `gift-${body.giftId ?? randomUUID()}`;

    const mercadoPagoResponse = await fetch(
      "https://api.mercadopago.com/v1/orders",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Idempotency-Key": randomUUID(),
        },
        body: JSON.stringify({
          type: "online",
          total_amount: totalAmount,
          external_reference: externalReference,
          processing_mode: "automatic",
          transactions: {
            payments: [
              {
                amount: totalAmount,
                payment_method: {
                  id: "pix",
                  type: "bank_transfer",
                },
                expiration_time:
                  process.env.MERCADO_PAGO_PIX_EXPIRATION_TIME ?? "PT24H",
              },
            ],
          },
          payer: {
            email: payerEmail,
          },
        }),
      },
    );

    const data = (await mercadoPagoResponse.json()) as
      | MercadoPagoOrderResponse
      | MercadoPagoErrorResponse;

    if (!mercadoPagoResponse.ok) {
      sendJson(response, mercadoPagoResponse.status, {
        error: getMercadoPagoErrorMessage(mercadoPagoResponse.status),
        details: data,
      });
      return;
    }

    sendJson(response, 200, normalizeOrder(data as MercadoPagoOrderResponse));
  } catch (error) {
    sendJson(response, 500, {
      error:
        error instanceof Error
          ? error.message
          : "Erro inesperado ao gerar Pix.",
    });
  }
}
