import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteImages } from "@/lib/data/images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <Image
          src={siteImages.hero}
          alt="C-Store convenience store"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-promo/90 text-promo-foreground border-0 hover:bg-promo/90">
            <Sparkles className="h-3 w-3 mr-1" />
            Summer Savings Event
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight tracking-tight">
            Your Go-To Stop for{" "}
            <span className="text-primary">Everything</span> You Need
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary-foreground/85 leading-relaxed max-w-xl">
            Fresh food, ice-cold drinks, everyday essentials, and unbeatable
            deals — all in one convenient location near you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link href="/deals">
                Shop Deals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <Link href="/store-locator">Find a Store</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
