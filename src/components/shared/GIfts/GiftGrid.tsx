import type { Gift } from "../../../types/gifts.types";
import { GiftCard } from "./GiftCard";

interface Props {
  gifts: Gift[];
  onSelect: (gift: Gift) => void;
}

export function GiftGrid({ gifts, onSelect }: Props) {
  if (!gifts.length) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-white/70 px-6 py-16 text-center text-base text-zinc-500 sm:py-20">
        Nenhum presente encontrado.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-3 2xl:grid-cols-4">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onSelect={onSelect} />
      ))}
    </div>
  );
}
