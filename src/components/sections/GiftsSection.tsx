import { useEffect, useMemo, useState } from "react";
import { gifts } from "../../data/gifts-data";
import { useGiftFilters } from "../../hooks/useGiftFilters";
import type { Gift } from "../../types/gifts.types";
import { GiftFilters } from "../shared/GIfts/GiftFIlters";
import { GiftGrid } from "../shared/GIfts/GiftGrid";
import { GiftModal } from "../shared/GIfts/GiftModal";
import { MetaBar } from "../shared/MetaBar";
import { SectionShell } from "../shared/SectionShell";

export function GiftsSection() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [visibleGiftsCount, setVisibleGiftsCount] = useState(16);

  const pageSize = 16;

  const filters = useGiftFilters({
    gifts,
  });

  useEffect(() => {
    setVisibleGiftsCount(pageSize);
  }, [filters.filteredGifts]);

  const visibleGifts = useMemo(() => {
    return filters.filteredGifts.slice(0, visibleGiftsCount);
  }, [filters.filteredGifts, visibleGiftsCount]);

  const hasMoreGifts = visibleGiftsCount < filters.filteredGifts.length;

  return (
    <SectionShell id="presentes">
      <MetaBar shouldNotShowEndBorder>
        <section className="mx-auto max-w-7xl py-4 text-fluid-copy">
          <header className="mb-10">
            <h1 className="text-4xl font-bold">LISTAS DE PRESENTES</h1>

            <p className="mt-2 text-zinc-500">
              Escolha um presente e faça parte da construção da nossa nova
              história.
            </p>
          </header>
          <GiftFilters {...filters} />
          <div className="mb-6 flex flex-col gap-4">
            <GiftGrid gifts={visibleGifts} onSelect={setSelectedGift} />

            {hasMoreGifts ? (
              <button
                type="button"
                onClick={() =>
                  setVisibleGiftsCount((current) => current + pageSize)
                }
                className="mx-auto rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                Carregar mais
              </button>
            ) : null}
          </div>
          <GiftModal
            gift={selectedGift}
            onClose={() => setSelectedGift(null)}
          />
        </section>
      </MetaBar>
    </SectionShell>
  );
}
