import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { PageHeader } from "@/components/layout/page-header";
import { ProductsPageContent } from "@/components/products/products-page-content";
import { ProductCardSkeleton } from "@/components/products/product-card-skeleton";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our full selection of snacks, beverages, dairy, bakery, grocery, and more at C-Store.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="All Products"
        description={`Explore ${products.length}+ products across ${categories.length} categories. Fresh, affordable, and ready when you are.`}
      />
      <Suspense fallback={<ProductCardSkeleton count={8} />}>
        <ProductsPageContent />
      </Suspense>
    </>
  );
}
