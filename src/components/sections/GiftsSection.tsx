import { useState } from "react";
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

  const filters = useGiftFilters({
    gifts,
  });

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
          <GiftGrid gifts={filters.filteredGifts} onSelect={setSelectedGift} />
          <GiftModal
            gift={selectedGift}
            onClose={() => setSelectedGift(null)}
          />{" "}
        </section>
      </MetaBar>
    </SectionShell>
  );
}
