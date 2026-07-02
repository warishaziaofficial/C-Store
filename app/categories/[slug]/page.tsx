import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { PageHeader } from "@/components/layout/page-header";
import { ProductGrid } from "@/components/products/product-grid";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <PageHeader title={category.name} description={category.description}>
        <div className="relative mt-6 h-40 md:h-52 w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageHeader>
      <section className="container mx-auto px-4 py-10 md:py-14">
        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Products coming soon in this category.
          </p>
        )}
      </section>
    </>
  );
}
