import type { Gift, GiftPixPayment } from "../types/gifts.types";
import { v4 as uuidv4 } from "uuid";

const PIX_ORDER_ENDPOINT = "/api/create-pix-order";

interface PixOrderErrorResponse {
  error?: string;
}

interface GiftPixPaymentInput {
  payerEmail: string;
  documentType: string;
  documentNumber: string;
}

export async function createGiftPixPayment(
  gift: Gift,
  input: GiftPixPaymentInput,
): Promise<GiftPixPayment> {
  const response = await fetch(PIX_ORDER_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-Idempotency-Key": uuidv4(),
    },
    body: JSON.stringify({
      giftId: gift.id,
      name: gift.name,
      amount: gift.price,
      externalReference: `gift-${gift.id}`,
      payerEmail: input.payerEmail,
      documentType: input.documentType,
      documentNumber: input.documentNumber,
    }),
  });

  const data = (await response.json()) as
    | GiftPixPayment
    | PixOrderErrorResponse;

  if (!response.ok) {
    throw new Error(
      "error" in data && data.error
        ? data.error
        : "Não foi possível gerar o Pix agora.",
    );
  }

  if (!("qrCode" in data) || !data.qrCode) {
    throw new Error("A resposta do Pix não trouxe QR Code.");
  }

  return data;
}

export async function getGiftPixPaymentStatus(
  paymentId: string,
): Promise<GiftPixPayment> {
  const response = await fetch(
    `${PIX_ORDER_ENDPOINT}?paymentId=${encodeURIComponent(paymentId)}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    },
  );

  const data = (await response.json()) as
    | GiftPixPayment
    | PixOrderErrorResponse;

  if (!response.ok) {
    throw new Error(
      "error" in data && data.error
        ? data.error
        : "Não foi possível consultar o status do Pix agora.",
    );
  }

  if (!("qrCode" in data) || !data.qrCode) {
    throw new Error("A resposta do Pix não trouxe QR Code.");
  }

  return data;
}
