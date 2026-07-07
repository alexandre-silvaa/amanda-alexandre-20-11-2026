import type { Gift, GiftPixPayment } from "../types/gifts.types";
import { v4 as uuidv4 } from "uuid";

const PIX_ORDER_ENDPOINT = "/api/create-pix-order";

interface PixOrderErrorResponse {
  error?: string;
}

export async function createGiftPixPayment(
  gift: Gift,
  payerEmail: string,
): Promise<GiftPixPayment> {
  const accessToken = import.meta.env.VITE_MERCADO_PAGO_ACCESS_TOKEN;

  const response = await fetch(PIX_ORDER_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
      "X-Idempotency-Key": uuidv4(),
    },
    body: JSON.stringify({
      giftId: gift.id,
      name: gift.name,
      amount: gift.price,
      externalReference: `gift-${gift.id}`,
      payerEmail,
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
