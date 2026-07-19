export type GiftCategory =
  | "Cozinha"
  | "Sala"
  | "Quarto"
  | "Banheiro"
  | "Lavanderia"
  | "Decoração"
  | "Eletrodomésticos"
  | "Eletrônicos"
  | "Área Gourmet"
  | "Lua de Mel";

export interface Gift {
  id: number;
  name: string;
  description: string;
  category: GiftCategory;
  price: number;
  image: string;
}

export interface CatalogItems {
  category: GiftCategory;
  items: { item: string; image?: string }[];
}

export const GiftPixPaymentStatus = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Cancelled: "cancelled",
  InProcess: "in_process",
  PendingWaitingTransfer: "pending_waiting_transfer",
  Refunded: "refunded",
  ChargedBack: "charged_back",
  Expired: "expired",
} as const;

export type GiftPixPaymentStatus =
  (typeof GiftPixPaymentStatus)[keyof typeof GiftPixPaymentStatus];

export interface GiftPixPayment {
  paymentId?: string;
  status?: GiftPixPaymentStatus;
  statusDetail?: string;
  ticketUrl?: string;
  qrCode: string;
  qrCodeBase64?: string;
}
