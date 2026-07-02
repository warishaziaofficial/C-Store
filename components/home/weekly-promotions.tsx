import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { promotions } from "@/lib/data/promotions";
import { SectionHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function WeeklyPromotions() {
  const weeklyDeals = promotions.slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader
        title="Weekly Promotions"
        description="Don't miss this week's hottest deals"
        href="/deals"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {weeklyDeals.map((promo) => (
          <Card
            key={promo.id}
            className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <Badge className="absolute top-3 left-3 shadow-md">
                <Tag className="h-3 w-3 mr-1" />
                {promo.badge}
              </Badge>
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-bold text-lg px-3 py-1 rounded-lg shadow-md">
                {promo.discount}
              </div>
            </div>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                {promo.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {promo.description}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                <Calendar className="h-3 w-3" />
                Ends {new Date(promo.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" size="lg" asChild>
          <Link href="/deals">View All Promotions</Link>
        </Button>
      </div>
    </section>
  );
}
