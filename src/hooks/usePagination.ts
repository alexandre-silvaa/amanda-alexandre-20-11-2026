import { useMemo, useState } from "react";

type Params<T> = {
  items: T[];
  initialPageSize?: number;
  pageSizeOptions?: number[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function usePagination<T>({
  items,
  initialPageSize = 20,
  pageSizeOptions = [10, 20, 50, 100],
}: Params<T>) {
  const [pageSize, setPageSizeState] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = clamp(currentPage, 1, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, safeCurrentPage]);

  const setPageSize = (value: number) => {
    setPageSizeState(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(clamp(page, 1, totalPages));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => clamp(prev + 1, 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => clamp(prev - 1, 1, totalPages));
  };

  return {
    paginatedItems,
    pageSize,
    pageSizeOptions,
    currentPage: safeCurrentPage,
    totalItems,
    totalPages,
    setPageSize,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  };
}
