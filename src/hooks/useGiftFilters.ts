import { useMemo, useState } from "react";
import { normalize } from "../utils/normalize";
import type { Gift } from "../types/gifts.types";

export type PriceRange =
  | "all"
  | "0-100"
  | "100-300"
  | "300-700"
  | "700-1500"
  | "1500+";

export type SortOption = "name" | "price-asc" | "price-desc";

interface Props {
  gifts: Gift[];
}

export function useGiftFilters({ gifts }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const filteredGifts = useMemo(() => {
    let result = [...gifts];

    // busca
    if (search.trim()) {
      const value = normalize(search);

      result = result.filter((gift) => {
        return (
          normalize(gift.name).includes(value) ||
          normalize(gift.description).includes(value)
        );
      });
    }

    // categoria
    if (category !== "Todos") {
      result = result.filter((gift) => gift.category === category);
    }

    // preço
    switch (priceRange) {
      case "0-100":
        result = result.filter((g) => g.price <= 100);
        break;

      case "100-300":
        result = result.filter((g) => g.price > 100 && g.price <= 300);
        break;

      case "300-700":
        result = result.filter((g) => g.price > 300 && g.price <= 700);
        break;

      case "700-1500":
        result = result.filter((g) => g.price > 700 && g.price <= 1500);
        break;

      case "1500+":
        result = result.filter((g) => g.price > 1500);
        break;
    }

    // ordenação
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        break;

      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [gifts, search, category, priceRange, sortBy]);

  const categories = useMemo(() => {
    return ["Todos", ...new Set(gifts.map((g) => g.category))];
  }, [gifts]);

  return {
    filteredGifts,

    categories,

    search,
    setSearch,

    category,
    setCategory,

    priceRange,
    setPriceRange,

    sortBy,
    setSortBy,
  };
}
