import { loadMercadoPago } from "@mercadopago/sdk-js";

let mercadoPagoPromise: Promise<MercadoPagoInstance | null> | null = null;

export function initializeMercadoPago() {
  if (mercadoPagoPromise) {
    return mercadoPagoPromise;
  }

  mercadoPagoPromise = loadMercadoPago().then(() => {
    const publicKey = import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY as
      | string
      | undefined;

    if (!publicKey) {
      return null;
    }

    return new window.MercadoPago(publicKey);
  });

  return mercadoPagoPromise;
}
