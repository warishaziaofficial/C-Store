import Image from "next/image";
import Link from "next/link";
import { Gift, Star, Zap } from "lucide-react";
import { siteImages } from "@/lib/data/images";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Star, text: "Earn points on every purchase" },
  { icon: Gift, text: "Free birthday reward" },
  { icon: Zap, text: "Exclusive member-only deals" },
];

export function LoyaltyBanner() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[320px]">
        <Image
          src={siteImages.loyaltyBg}
          alt="C-Store rewards shopping"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        <div className="relative p-8 md:p-12 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground">
            Join C-Store Rewards
          </h2>
          <p className="mt-3 text-secondary-foreground/90 text-base md:text-lg">
            Sign up free and start earning points today. Redeem for discounts,
            free items, and exclusive perks.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk.text} className="flex items-center gap-3 text-secondary-foreground/90">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/25">
                  <perk.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">{perk.text}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            asChild
          >
            <Link href="/about">Join Free — It Takes 30 Seconds</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
