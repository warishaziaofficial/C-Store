import { getBestSellers } from "@/lib/data/products";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeader } from "@/components/layout/page-header";

export function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Best Sellers"
          description="Customer favorites flying off our shelves"
          href="/products"
        />
        <ProductGrid products={products.slice(0, 8)} />
      </div>
    </section>
  );
}
