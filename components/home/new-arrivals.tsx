import { getNewArrivals } from "@/lib/data/products";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeader } from "@/components/layout/page-header";

export function NewArrivals() {
  const products = getNewArrivals();

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="New Arrivals"
          description="Fresh products just landed on our shelves"
          href="/products"
          linkText="See All New Items"
        />
        <ProductGrid products={products} columns={3} />
      </div>
    </section>
  );
}
