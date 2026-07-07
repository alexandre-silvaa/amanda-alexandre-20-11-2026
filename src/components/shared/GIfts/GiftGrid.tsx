import type { Gift } from "../../../types/gifts.types";
import { GiftCard } from "./GiftCard";

interface Props {
  gifts: Gift[];
  onSelect: (gift: Gift) => void;
}

export function GiftGrid({ gifts, onSelect }: Props) {
  if (!gifts.length) {
    return (
      <div className="rounded-xl border border-dashed py-20 text-center text-zinc-500">
        Nenhum presente encontrado.
      </div>
    );
  }

  return (
    <div
      className="
      grid
      gap-6

      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
    >
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onSelect={onSelect} />
      ))}
    </div>
  );
}
