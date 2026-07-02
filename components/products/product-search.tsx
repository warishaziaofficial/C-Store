"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fallbackImage } from "@/lib/data/images";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts, getPopularSearchTerms } from "@/lib/search";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProductSearchProps {
  variant?: "hero" | "navbar" | "compact";
  defaultQuery?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  showPopular?: boolean;
}

export function ProductSearch({
  variant = "hero",
  defaultQuery = "",
  autoFocus = false,
  onClose,
  showPopular = variant === "hero",
}: ProductSearchProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState(defaultQuery);
  const [open, setOpen] = useState(false);
  const results = searchProducts(query, 6);
  const popularSearches = getPopularSearchTerms();

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navigateToResults(term: string) {
    const trimmed = term.trim();
    if (!trimmed) return;
    setOpen(false);
    onClose?.();
    router.push(`/products?q=${encodeURIComponent(trimmed)}`);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigateToResults(query);
  }

  function handleSelect(term: string) {
    setQuery(term);
    navigateToResults(term);
  }

  const isHero = variant === "hero";
  const isNavbar = variant === "navbar";
  const isCompact = variant === "compact";

  return (
    <div ref={containerRef} className={cn("relative w-full", isHero && "max-w-3xl mx-auto")}>
      <form onSubmit={handleSubmit} className={cn("flex gap-2", isCompact && "flex-col sm:flex-row")}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search for snacks, beverages, groceries..."
            className={cn(
              "pl-9 pr-9",
              isHero && "h-12 text-base border-0 bg-muted/50 focus-visible:ring-primary",
              isNavbar && "pl-9 pr-10",
              isCompact && "pl-9"
            )}
            autoFocus={autoFocus}
            aria-label="Search products"
            aria-expanded={open}
            aria-controls="search-results"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {!isCompact && (
          <Button type="submit" size={isHero ? "lg" : "default"} className={isHero ? "h-12 px-6" : ""}>
            Search
          </Button>
        )}
      </form>

      {showPopular && (
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-xs text-muted-foreground">Popular:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => handleSelect(term)}
              className="text-xs font-medium px-3 py-1 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      )}

      {open && query.trim() && (
        <div
          id="search-results"
          className={cn(
            "absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border bg-card shadow-xl"
          )}
        >
          {results.length > 0 ? (
            <ul className="divide-y">
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(product.name)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-muted/60 transition-colors"
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== fallbackImage) target.src = fallbackImage;
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary shrink-0">
                      {formatPrice(product.price)}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => navigateToResults(query)}
                  className="w-full px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-colors text-left"
                >
                  View all results for &ldquo;{query.trim()}&rdquo;
                </button>
              </li>
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No products found for &ldquo;{query.trim()}&rdquo;. Try another search.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
