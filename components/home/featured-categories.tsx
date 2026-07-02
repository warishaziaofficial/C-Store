import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { SectionHeader } from "@/components/layout/page-header";
import { SafeImage } from "@/components/ui/safe-image";
export function FeaturedCategories() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader
        title="Shop by Category"
        description="Browse our wide selection of convenience store essentials"
        href="/categories"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <SafeImage
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 20vw"
            />            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <h3 className="text-white font-semibold text-sm md:text-base">
                {category.name}
              </h3>
              <p className="text-white/70 text-xs mt-0.5">
                {category.productCount} items
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
