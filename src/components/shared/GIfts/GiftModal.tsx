import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import QRCode from "react-qr-code";
import { toast } from "sonner";
import type { Gift } from "../../../types/gifts.types";

const PIX_KEY = "psiamandafgomes@gmail.com";
const PIX_CODE =
  "00020126470014br.gov.bcb.pix0125psiamandafgomes@gmail.com5204000053039865802BR5912Amanda Gomes6009Sao Paulo62230519daqr8083194599793196304712C";

interface Props {
  gift: Gift | null;
  onClose(): void;
}

export function GiftModal({ gift, onClose }: Props) {
  if (!gift) return null;
  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      toast.success("Código Pix copiado.");
    } catch {
      toast.error("Não foi possível copiar o código Pix.");
    }
  };
  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-2 sm:p-4">
          <Dialog.Content className="max-h-[calc(100dvh-1rem)] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="text-xl font-bold text-zinc-900 sm:text-3xl">
                  {gift.name}
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-zinc-500">
                  {gift.category}
                </Dialog.Description>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="rounded-full p-2 hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6 text-center text-2xl font-bold text-stone-800">
              {gift.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <div className="space-y-4 rounded-xl border p-4">
              <p className="break-all text-sm text-stone-700">
                Chave Pix: {PIX_KEY}
              </p>
              <p className="text-sm text-stone-700">
                Informe o valor do presente no aplicativo do seu banco.
              </p>
              <QRCode
                value={PIX_CODE}
                size={192}
                className="mx-auto h-auto w-full max-w-52 sm:max-w-60"
              />
              <p className="break-all rounded-xl bg-stone-50 p-4 text-sm text-stone-700">
                {PIX_CODE}
              </p>
              <button
                type="button"
                onClick={copyPixCode}
                className="min-h-12 w-full rounded-xl bg-stone-800 px-4 py-3 font-semibold text-white hover:bg-stone-700"
              >
                Copiar código Pix
              </button>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 min-h-12 w-full rounded-xl border px-4 py-3 hover:bg-zinc-50"
            >
              Fechar
            </button>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
