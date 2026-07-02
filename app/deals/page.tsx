import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { promotions } from "@/lib/data/promotions";
import { getPromotionalProducts } from "@/lib/data/products";
import { PageHeader } from "@/components/layout/page-header";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Deals & Promotions",
  description:
    "Save big with weekly deals, bundle offers, and exclusive promotions at C-Store convenience stores.",
};

export default function DealsPage() {
  const promoProducts = getPromotionalProducts();

  return (
    <>
      <PageHeader
        title="Deals & Promotions"
        description="Hot deals updated weekly. Mix, match, and save on your favorite convenience store items."
      />
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="200px"
                  />
                </div>
                <CardContent className="p-5 flex flex-col justify-center space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge>
                      <Tag className="h-3 w-3 mr-1" />
                      {promo.badge}
                    </Badge>
                    <span className="text-lg font-bold text-primary">
                      {promo.discount}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold">{promo.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                    <Calendar className="h-3 w-3" />
                    Valid until{" "}
                    {new Date(promo.endDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader
          title="Products on Sale"
          description="Grab these discounted items before they're gone"
        />
        <ProductGrid products={promoProducts} columns={3} />
      </section>
    </>
  );
}
