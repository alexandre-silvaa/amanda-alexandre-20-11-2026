export interface PixConfig {
  pixKey: string;
  merchantName: string;
  merchantCity: string;
}

interface PixPayload {
  amount: number;
  txid?: string;
  description?: string;
}

const GUI = "BR.GOV.BCB.PIX";
const COUNTRY = "BR";
const CURRENCY = "986";
const MCC = "0000";

function emv(id: string, value: string) {
  return `${id}${value.length.toString().padStart(2, "0")}${value}`;
}

function sanitize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function crc16(payload: string) {
  let crc = 0xffff;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;

    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }

      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export class Pix {
  private config: PixConfig;

  constructor(config: PixConfig) {
    this.config = config;
  }

  payload({ amount, txid = "***", description }: PixPayload) {
    const merchantInfo = [emv("00", GUI), emv("01", this.config.pixKey)];

    if (description) {
      merchantInfo.push(emv("02", description.substring(0, 72)));
    }

    const merchantAccount = emv("26", merchantInfo.join(""));

    const additional = emv("62", emv("05", txid.substring(0, 25)));

    const payload =
      emv("00", "01") +
      merchantAccount +
      emv("52", MCC) +
      emv("53", CURRENCY) +
      emv("54", amount.toFixed(2)) +
      emv("58", COUNTRY) +
      emv("59", sanitize(this.config.merchantName).substring(0, 25)) +
      emv("60", sanitize(this.config.merchantCity).substring(0, 15)) +
      additional +
      "6304";

    return payload + crc16(payload);
  }
}
