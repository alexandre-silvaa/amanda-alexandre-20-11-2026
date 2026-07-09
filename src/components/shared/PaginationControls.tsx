import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onPageSizeChange: (size: number) => void;
};

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, -1, totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
}

export function PaginationControls({
  currentPage,
  totalPages,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onNextPage,
  onPreviousPage,
  onPageSizeChange,
}: Props) {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex w-full flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
      <label className="flex w-full items-center justify-between gap-2 text-sm font-semibold text-zinc-700 sm:w-auto sm:justify-start">
        Itens por página
        <select
          value={pageSize}
          onChange={(event) => onPageSizeChange(Number(event.target.value))}
          className="min-h-10 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 sm:w-auto sm:justify-end sm:overflow-visible sm:pb-0">
        <button
          type="button"
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          title="Página anterior"
          className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 px-3 text-zinc-700 transition enabled:hover:border-zinc-400 enabled:hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {visiblePages.map((page, index) => {
            if (page === -1) {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="shrink-0 px-1 text-zinc-400"
                >
                  ...
                </span>
              );
            }

            const isCurrentPage = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={isCurrentPage ? "page" : undefined}
                className={`inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border px-3 text-sm font-semibold transition sm:h-10 sm:min-w-10 ${
                  isCurrentPage
                    ? "border-stone-800 bg-stone-800 text-white"
                    : "border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          title="Próxima página"
          className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 px-3 text-zinc-700 transition enabled:hover:border-zinc-400 enabled:hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
