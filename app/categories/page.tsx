import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { PageHeader } from "@/components/layout/page-header";
import { SafeImage } from "@/components/ui/safe-image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Shop by category at C-Store — snacks, beverages, dairy, bakery, grocery, frozen food, and more.",
};

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        title="Shop by Category"
        description="Find exactly what you need across our full range of convenience store categories."
      />
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <SafeImage
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {category.description}
                      </p>
                      <p className="text-xs text-primary font-medium mt-2">
                        {category.productCount} products
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
