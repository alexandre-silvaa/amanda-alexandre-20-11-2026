import { LoaderCircle, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  GiftPixPaymentStatus,
  type Gift,
  type GiftPixPayment,
} from "../../../types/gifts.types";
import {
  createGiftPixPayment,
  getGiftPixPaymentStatus,
} from "../../../utils/giftPixPayment";

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
  const [documentType, setDocumentType] = useState("CPF");
  const [documentNumber, setDocumentNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const giftId = gift?.id;

  const activePaymentState =
    paymentState && paymentState.giftId === giftId ? paymentState : null;
  const payment = activePaymentState?.payment ?? null;
  const error = activePaymentState?.error ?? null;

  useEffect(() => {
    if (!giftId || !payment?.paymentId) return;
    if (payment.status === GiftPixPaymentStatus.Approved) return;

    let active = true;

    const syncStatus = async () => {
      try {
        const nextPayment = await getGiftPixPaymentStatus(payment.paymentId!);

        if (!active) return;

        if (giftId == null) return;

        setPaymentState({
          giftId,
          payment: nextPayment,
          error: null,
        });
      } catch {
        if (!active) return;
      }
    };

    void syncStatus();
    const interval = window.setInterval(syncStatus, 5000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [giftId, payment?.paymentId, payment?.status]);

  const generatePix = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!gift) return;

    setIsLoading(true);
    setPaymentState(null);

    try {
      const nextPayment = await createGiftPixPayment(gift, {
        payerEmail,
        documentType,
        documentNumber,
      });

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

  const copyPixCode = async () => {
    if (!payment?.qrCode) return;

    setIsCopying(true);

    try {
      await navigator.clipboard.writeText(payment.qrCode);
    } finally {
      setIsCopying(false);
    }
  };

  const statusLabel =
    payment?.status === GiftPixPaymentStatus.Approved
      ? "Pago"
      : payment?.status === GiftPixPaymentStatus.Pending
        ? "Pendente"
        : (payment?.status ?? "Aguardando");

  useEffect(() => {
    if (!gift) return;

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    const previousPaddingRight = bodyStyle.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    bodyStyle.overflow = "hidden";

    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      bodyStyle.overflow = previousOverflow;
      bodyStyle.paddingRight = previousPaddingRight;
    };
  }, [gift]);

  if (!gift) return null;

  if (payment?.status === GiftPixPaymentStatus.Approved) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/60 p-2 pt-8 sm:items-center sm:p-4">
        <div className="max-h-[calc(100svh-0.5rem)] w-full max-w-md overflow-y-auto overscroll-contain rounded-3xl bg-white p-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] text-center shadow-2xl supports-[height:100dvh]:max-h-[calc(100dvh-0.5rem)] sm:max-h-[calc(100vh-2rem)] sm:rounded-2xl sm:p-8 sm:pb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            Pagamento aprovado
          </h2>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            Seu Pix foi confirmado. Obrigado por fazer parte desse momento.
          </p>

          <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-left text-sm text-emerald-900">
            <p className="font-semibold wrap-break-word">{gift.name}</p>
            <p className="mt-1">
              {gift.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-5 min-h-12 w-full rounded-xl bg-stone-800 px-4 py-3 font-semibold text-white transition hover:bg-stone-700"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/60 p-2 pt-8 sm:items-center sm:p-4">
      <div className="max-h-[calc(100svh-0.5rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-3xl bg-white p-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] shadow-2xl supports-[height:100dvh]:max-h-[calc(100dvh-0.5rem)] sm:max-h-[calc(100vh-2rem)] sm:rounded-2xl sm:p-8 sm:pb-8">
        <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
          <div className="min-w-0 flex-1">
            <h2 className="wrap-break-word text-xl font-bold text-zinc-900 sm:text-3xl">
              {gift.name}
            </h2>
            <p className="mt-1 wrap-break-word text-xs font-medium uppercase tracking-widest text-zinc-500 sm:text-base sm:tracking-[0.08em]">
              {gift.category}
            </p>
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
          <span className="text-2xl font-bold text-stone-800 sm:text-4xl">
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
                className="mt-2 min-h-12 w-full rounded-xl border px-4 py-3 font-normal outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-base font-semibold text-stone-800">
                Tipo do documento
                <select
                  value={documentType}
                  onChange={(event) => setDocumentType(event.target.value)}
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border px-4 py-3.5 font-normal outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
                >
                  <option value="CPF">CPF</option>
                  <option value="CNPJ">CNPJ</option>
                </select>
              </label>

              <label className="block text-base font-semibold text-stone-800">
                Número do documento
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(event) => setDocumentNumber(event.target.value)}
                  placeholder="Apenas números"
                  required
                  inputMode="numeric"
                  className="mt-2 min-h-12 w-full rounded-xl border px-4 py-3 font-normal outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
                />
              </label>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-base text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-stone-800 px-4 py-3 font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
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
          <div className="space-y-4 rounded-xl border bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-stone-700">
                Status: {statusLabel}
              </p>

              {payment.paymentId ? (
                <span className="break-all text-right text-xs text-zinc-500">
                  ID {payment.paymentId}
                </span>
              ) : null}
            </div>

            {payment.statusDetail ? (
              <p className="text-sm text-zinc-500">{payment.statusDetail}</p>
            ) : null}

            {payment.qrCodeBase64 ? (
              <img
                src={`data:image/png;base64,${payment.qrCodeBase64}`}
                alt="QR Code Pix"
                className="mx-auto h-auto w-full max-w-52 sm:max-w-60"
              />
            ) : (
              <QRCode
                value={payment.qrCode}
                size={192}
                className="mx-auto h-auto w-full max-w-52 sm:max-w-60"
              />
            )}

            <div className="space-y-3 rounded-xl bg-stone-50 p-4">
              <p className="break-all text-sm text-stone-700">
                {payment.qrCode}
              </p>

              <button
                type="button"
                onClick={copyPixCode}
                disabled={isCopying}
                className="min-h-12 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isCopying ? "Copiando..." : "Copiar código Pix"}
              </button>

              {payment.ticketUrl ? (
                <a
                  href={payment.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block min-h-12 w-full rounded-xl bg-stone-800 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                  Abrir ticket
                </a>
              ) : null}
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 min-h-12 w-full rounded-xl border px-4 py-3 transition hover:bg-zinc-50"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
