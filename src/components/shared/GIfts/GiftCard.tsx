import type { Gift } from "../../../types/gifts.types";
import { useState } from "react";

interface Props {
  gift: Gift;
  onSelect: (gift: Gift) => void;
}

export function GiftCard({ gift, onSelect }: Props) {
  const [imageSrc, setImageSrc] = useState(gift.image);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-4/3 overflow-hidden bg-zinc-100">
        <img
          src={imageSrc}
          alt={gift.name}
          loading="lazy"
          onError={() => setImageSrc(`https://picsum.photos/seed/gift-${gift.id}/1200/900`)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3">
        <h3 className="line-clamp-2 font-semibold text-zinc-900 text-fluid">
          {gift.name}
        </h3>

        <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row sm:items-end sm:justify-between">
          <span className="text-xl font-bold leading-none text-stone-700 sm:text-[1.45rem]">
            {gift.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <button
            onClick={() => onSelect(gift)}
            className="inline-flex items-center justify-center rounded-xl bg-stone-800 px-3 py-2 font-['Garet'] text-center text-xs  text-[#f2f1ef] no-underline"
          >
            Presentear
          </button>
        </div>
      </div>
    </article>
  );
}
