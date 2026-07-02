import { Promotion } from "@/lib/types";
import { unsplash, photos } from "@/lib/data/images";

export const promotions: Promotion[] = [
  {
    id: "promo1",
    title: "2 for $5 Energy Drinks",
    description: "Mix and match any 12oz energy drinks. Power through your day!",
    discount: "2/$5",
    image: unsplash(photos.energyDrinks, 800, 500),
    endDate: "2026-07-15",
    badge: "Hot Deal",
  },
  {
    id: "promo2",
    title: "Buy 2 Get 1 Free Snacks",
    description: "Stock up on chips, candy, and more. Third item free of equal or lesser value.",
    discount: "B2G1",
    image: unsplash(photos.chips, 800, 500),
    endDate: "2026-07-10",
    badge: "Limited Time",
  },
  {
    id: "promo3",
    title: "Fresh Bakery – 50% Off After 8PM",
    description: "All bakery items half price after 8PM. Fresh deals every evening!",
    discount: "50% OFF",
    image: unsplash(photos.bakery, 800, 500),
    endDate: "2026-07-31",
    badge: "Daily Deal",
  },
  {
    id: "promo4",
    title: "Fountain Drink Refills – $0.99",
    description: "Any size fountain drink refill for just 99 cents with C-Store rewards.",
    discount: "$0.99",
    image: unsplash(photos.soda, 800, 500),
    endDate: "2026-08-01",
    badge: "Member Exclusive",
  },
  {
    id: "promo5",
    title: "Frozen Food Bundle – Save 25%",
    description: "Buy any 3 frozen items and save 25% on your entire frozen purchase.",
    discount: "25% OFF",
    image: unsplash(photos.frozenFood, 800, 500),
    endDate: "2026-07-20",
    badge: "Bundle Deal",
  },
  {
    id: "promo6",
    title: "Coffee Club – Free 7th Cup",
    description: "Buy 6 cups of coffee, get your 7th free. Available at all locations.",
    discount: "FREE",
    image: unsplash(photos.coffeePromo, 800, 500),
    endDate: "2026-12-31",
    badge: "Loyalty Reward",
  },
];
