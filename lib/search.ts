import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { Product } from "@/lib/types";

const searchAliases: Record<string, string[]> = {
  coffee: ["starbucks", "frappuccino", "beverage"],
  chips: ["lay", "dorito", "snack", "potato"],
  "energy drinks": ["red bull", "monster", "energy"],
  "ice cream": ["ben", "jerry", "frozen"],
  milk: ["dairy", "horizon", "organic"],
};

function productMatches(product: Product, term: string): boolean {
  const fields = [product.name, product.category, product.categorySlug]
    .join(" ")
    .toLowerCase();

  if (fields.includes(term)) return true;

  const aliases = searchAliases[term] ?? [];
  return aliases.some((alias) => fields.includes(alias));
}

export function searchProducts(query: string, limit = 8): Product[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return products.filter((product) => productMatches(product, term)).slice(0, limit);
}

export function filterProducts(query: string): Product[] {
  const term = query.trim().toLowerCase();
  if (!term) return products;

  return products.filter((product) => productMatches(product, term));
}

export function getPopularSearchTerms(): string[] {
  return ["Coffee", "Chips", "Energy Drinks", "Ice Cream", "Milk"];
}

export function matchCategorySlug(term: string): string | null {
  const normalized = term.trim().toLowerCase();
  const category = categories.find(
    (cat) =>
      cat.name.toLowerCase() === normalized ||
      cat.slug === normalized.replace(/\s+/g, "-")
  );
  return category?.slug ?? null;
}
