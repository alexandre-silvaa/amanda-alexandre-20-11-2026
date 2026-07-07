import { LoaderCircle, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import QRCode from "react-qr-code";
import type { Gift, GiftPixPayment } from "../../../types/gifts.types";
import { createGiftPixPayment } from "../../../utils/giftPixPayment";

interface Props {
  gift: Gift | null;
  onClose(): void;
}

interface PaymentState {
  giftId: number;
  payment: GiftPixPayment | null;
  error: string | null;
}

export function GiftModal({ gift, onClose }: Props) {
  const [paymentState, setPaymentState] = useState<PaymentState | null>(null);
  const [payerEmail, setPayerEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!gift) return null;

  const payment = paymentState?.giftId === gift.id ? paymentState.payment : null;
  const error = paymentState?.giftId === gift.id ? paymentState.error : null;

  const generatePix = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setPaymentState(null);

    try {
      const nextPayment = await createGiftPixPayment(gift, payerEmail);

      setPaymentState({
        giftId: gift.id,
        payment: nextPayment,
        error: null,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Não foi possível gerar o Pix.";

      setPaymentState({
        giftId: gift.id,
        payment: null,
        error: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{gift.name}</h2>
            <p className="mt-1 text-base text-zinc-500">{gift.category}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-stone-700 transition hover:bg-stone-100"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6 text-center">
          <span className="text-4xl font-bold text-stone-800">
            {gift.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        {!payment ? (
          <form onSubmit={generatePix} className="space-y-4">
            <label className="block text-base font-semibold text-stone-800">
              E-mail para o pagamento
              <input
                type="email"
                value={payerEmail}
                onChange={(event) => setPayerEmail(event.target.value)}
                placeholder="seuemail@exemplo.com"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 font-normal outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
              />
            </label>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-base text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-800 py-3 font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin" size={20} />
                  Gerando Pix...
                </>
              ) : (
                "Gerar QR Code Pix"
              )}
            </button>
          </form>
        ) : isLoading ? (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 text-zinc-500">
            <LoaderCircle className="mb-3 animate-spin" size={30} />
            <span>Gerando Pix...</span>
          </div>
        ) : (
          <div className="rounded-xl border bg-white p-4">
            {payment.qrCodeBase64 ? (
              <img
                src={`data:image/jpeg;base64,${payment.qrCodeBase64}`}
                alt="QR Code Pix"
                className="mx-auto h-56 w-56"
              />
            ) : (
              <QRCode value={payment.qrCode} size={224} className="mx-auto" />
            )}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl border py-3 transition hover:bg-zinc-50"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
