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

export interface GiftPixPayment {
  orderId?: string;
  paymentId?: string;
  status?: string;
  statusDetail?: string;
  ticketUrl?: string;
  qrCode: string;
  qrCodeBase64?: string;
}
