import type { Gift } from "../../../types/gifts.types";

interface Props {
  gift: Gift;
  onSelect: (gift: Gift) => void;
}

export function GiftCard({ gift, onSelect }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square overflow-hidden bg-zinc-100">
        <img
          src="https://picsum.photos/200/300"
          alt={gift.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-5">
        <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
          {gift.category}
        </span>

        <h3 className="line-clamp-2 text-lg font-semibold">{gift.name}</h3>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-stone-800">
            {gift.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <button
            onClick={() => onSelect(gift)}
            className="rounded-xl bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
          >
            Presentear
          </button>
        </div>
      </div>
    </article>
  );
}
