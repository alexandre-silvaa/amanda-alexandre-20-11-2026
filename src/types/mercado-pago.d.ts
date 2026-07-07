interface MercadoPagoInstance {
  getIdentificationTypes?: () => Promise<unknown>;
}

interface MercadoPagoConstructor {
  new (publicKey: string): MercadoPagoInstance;
}

interface Window {
  MercadoPago: MercadoPagoConstructor;
}
