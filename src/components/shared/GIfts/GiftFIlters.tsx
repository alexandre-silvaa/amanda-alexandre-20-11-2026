import type { PriceRange, SortOption } from "../../../hooks/useGiftFilters";

interface Props {
  search: string;
  setSearch: (v: string) => void;

  category: string;
  setCategory: (v: string) => void;

  priceRange: PriceRange;
  setPriceRange: (v: PriceRange) => void;

  sortBy: SortOption;
  setSortBy: (v: SortOption) => void;

  categories: string[];
}

export function GiftFilters({
  search,
  setSearch,

  category,
  setCategory,

  priceRange,
  setPriceRange,

  sortBy,
  setSortBy,

  categories,
}: Props) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar presente..."
        className="rounded-xl border px-4 py-3 outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border px-4 py-3 outline-none"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value as PriceRange)}
        className="rounded-xl border px-4 py-3 outline-none"
      >
        <option value="all">Todos os valores</option>

        <option value="0-100">Até R$100</option>

        <option value="100-300">R$100 a R$300</option>

        <option value="300-700">R$300 a R$700</option>

        <option value="700-1500">R$700 a R$1.500</option>

        <option value="1500+">Acima de R$1.500</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
        className="rounded-xl border px-4 py-3 outline-none"
      >
        <option value="name">Nome (A-Z)</option>

        <option value="price-asc">Menor preço</option>

        <option value="price-desc">Maior preço</option>
      </select>
    </div>
  );
}
