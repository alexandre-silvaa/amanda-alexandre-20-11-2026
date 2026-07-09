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
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 text-fluid">
      <label className="block space-y-2 text-base font-semibold text-zinc-700">
        <span>Buscar</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nome ou descrição"
          className="min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-2 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        />
      </label>

      <label className="block space-y-2 text-base font-semibold text-zinc-700">
        <span>Categoria</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2 text-base font-semibold text-zinc-700">
        <span>Faixa de preço</span>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value as PriceRange)}
          className="min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        >
          <option value="all">Todos os valores</option>

          <option value="0-100">Até R$ 100</option>

          <option value="100-300">R$ 100 a R$ 300</option>

          <option value="300-700">R$ 300 a R$ 700</option>

          <option value="700-1500">R$ 700 a R$ 1.500</option>

          <option value="1500+">Acima de R$ 1.500</option>
        </select>
      </label>

      <label className="block space-y-2 text-base font-semibold text-zinc-700">
        <span>Ordenar</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        >
          <option value="name">Nome (A-Z)</option>

          <option value="price-asc">Menor preço</option>

          <option value="price-desc">Maior preço</option>
        </select>
      </label>
    </div>
  );
}
