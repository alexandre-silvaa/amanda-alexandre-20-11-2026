import { useState } from "react";
import { gifts } from "../../data/gifts-data";
import { useGiftFilters } from "../../hooks/useGiftFilters";
import type { Gift } from "../../types/gifts.types";
import { GiftFilters } from "../shared/GIfts/GiftFIlters";
import { GiftGrid } from "../shared/GIfts/GiftGrid";
import { GiftModal } from "../shared/GIfts/GiftModal";
import { MetaBar } from "../shared/MetaBar";
import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";
import { PaginationControls } from "../shared/PaginationControls";
import { usePagination } from "../../hooks/usePagination";

export function GiftsSection() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  const filters = useGiftFilters({
    gifts,
  });

  return (
    <SectionShell id="presentes">
      <MetaBar shouldNotShowEndBorder>
        <section className="mx-auto max-w-7xl py-4 text-fluid">
          <SectionTitle>Lista de presentes</SectionTitle>

          <div className="space-y-6 sm:space-y-8">
            <GiftFilters {...filters} />

            <GiftListing
              gifts={filters.filteredGifts}
              onSelect={setSelectedGift}
            />
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

type GiftListingProps = {
  gifts: Gift[];
  onSelect: (gift: Gift) => void;
};

function GiftListing({ gifts, onSelect }: GiftListingProps) {
  const {
    paginatedItems,
    currentPage,
    totalPages,
    pageSize,
    pageSizeOptions,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    setPageSize,
  } = usePagination({
    items: gifts,
    initialPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  });

  return (
    <div className="flex flex-col gap-4">
      <GiftGrid gifts={paginatedItems} onSelect={onSelect} />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={gifts.length}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        onPageChange={goToPage}
        onNextPage={goToNextPage}
        onPreviousPage={goToPreviousPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
