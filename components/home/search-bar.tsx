import { ProductSearch } from "@/components/products/product-search";

export function SearchBar() {
  return (
    <section className="container mx-auto px-4 -mt-8 relative z-10">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl border p-4 md:p-6">
        <ProductSearch variant="hero" />
      </div>
    </section>
  );
}
