"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { filterProducts } from "@/lib/search";
import { ProductGrid } from "@/components/products/product-grid";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ProductsPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const categorySlug = searchParams.get("category") ?? "";

  const filteredProducts = useMemo(() => {
    let result = filterProducts(query);
    if (categorySlug) {
      result = result.filter((p) => p.categorySlug === categorySlug);
    }
    return result;
  }, [query, categorySlug]);

  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/products">
          <Badge
            variant={!categorySlug ? "default" : "outline"}
            className={cn(
              "cursor-pointer transition-colors",
              !categorySlug && "shadow-sm"
            )}
          >
            All
          </Badge>
        </Link>
        {categories.map((cat) => {
          const href = query
            ? `/products?category=${cat.slug}&q=${encodeURIComponent(query)}`
            : `/products?category=${cat.slug}`;
          const isActive = categorySlug === cat.slug;

          return (
            <Link key={cat.id} href={href}>
              <Badge
                variant={isActive ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
              >
                {cat.name}
              </Badge>
            </Link>
          );
        })}
      </div>

      {(query || categorySlug) && (
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredProducts.length} of {products.length} products
          {query && (
            <>
              {" "}
              for &ldquo;<span className="font-medium text-foreground">{query}</span>&rdquo;
            </>
          )}
          {categorySlug && (
            <>
              {" "}
              in{" "}
              <span className="font-medium text-foreground">
                {categories.find((c) => c.slug === categorySlug)?.name}
              </span>
            </>
          )}
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="rounded-2xl border bg-muted/30 py-16 text-center">
          <p className="text-lg font-semibold">No products found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search term or browse all categories.
          </p>
          <Link
            href="/products"
            className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
          >
            Clear filters
          </Link>
        </div>
      )}
    </section>
  );
}
