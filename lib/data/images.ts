/** Build a reliable Unsplash image URL with consistent params */
export function unsplash(
  photoId: string,
  width: number,
  height?: number
): string {
  const h = height ?? width;
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${h}&q=80`;
}

/** Verified Unsplash photo IDs */
export const photos = {
  // Categories
  snacks: "1599599810769-bcde5a160d32",
  beverages: "1625772299848-391b6a87d7b3",
  dairy: "1628088062854-d1870b4553da",
  bakery: "1509440159596-0249088772ff",
  grocery: "1542838132-92c53300491e",
  frozenFood: "1571875257727-256c39da42af",
  household: "1585421514738-01798e348b17",
  personalCare: "1556228720-195a672e8a03",
  tobacco: "1607082348824-0a96f2a4b9da",
  energyDrinks: "1558618666-fcd25c85cd64",

  // Products
  chips: "1566478989037-eec170784d0b",
  soda: "1629203851122-3726ecdf080e",
  milk: "1563636619-e9143da7973b",
  donut: "1551024601-bec78aea704b",
  iceCream: "1563805042-7684c019e1cb",
  energyDrink: "1558618666-fcd25c85cd64",
  nachos: "1613919113640-25732cd5a556",
  sportsDrink: "1625772299848-391b6a87d7b3",
  cheese: "1486297678162-eb2a19b0a32d",
  bread: "1509440159596-0249088772ff",
  soup: "1547592166-23ac45744acd",
  detergent: "1585421514738-01798e348b17",
  toothpaste: "1556228720-195a672e8a03",
  monsterEnergy: "1558618666-fcd25c85cd64",
  chocolateBar: "1481391319762-47dff72942da",
  water: "1548839140-29a7493991d9",
  yogurt: "1488477181946-6428a0291777",
  croissant: "1555507036-ab1f4038808a",
  frozenMeal: "1571875257727-256c39da42af",
  tissues: "1585421514738-01798e348b17",
  bodyWash: "1556228720-195a672e8a03",
  mixedNuts: "1599599810769-bcde5a160d32",
  coffee: "1461023058943-07fcbe16d735",
  waffles: "1565299624946-b28f40a0ae38",

  // Stores & site
  storeFront: "1604719312566-8912e9227c6a",
  storeInterior: "1578916171728-46686eac8d58",
  storeRetail: "1441986300917-64674bd600d8",
  storeAisle: "1607082348824-0a96f2a4b9da",
  storeCheckout: "1555529907-1f9a83a1d1c4",
  storeNight: "1600880292203-757bb62b4baf",
  mapOverview: "1524661135-423995f22d0b",
  mapCard: "1569336410601-0ee427e7f0b0",
  phoneApp: "1512941937669-90a1b58e7e9c",
  loyaltyBg: "1607083206968-13611e3d76db",
  newsletterBg: "1607082348824-0a96f2a4b9da",
  aboutStore: "1578916171728-46686eac8d58",
  careers: "1441986300917-64674bd600d8",
  coffeePromo: "1495474472287-4d71bcdd2085",

  // Avatars
  avatar1: "1507003211169-0a1dd7228f2d",
  avatar2: "1494790108377-be9c29b29330",
  avatar3: "1472099645785-5658abf4ff4e",
  avatar4: "1438761681033-6461ffad8d80",
} as const;

export const fallbackImage = unsplash(photos.storeAisle, 400, 400);

export const siteImages = {
  hero: unsplash(photos.storeFront, 1600, 800),
  mapOverview: unsplash(photos.mapOverview, 1200, 500),
  mapCard: unsplash(photos.mapCard, 400, 200),
  appMockup: unsplash(photos.phoneApp, 400, 800),
  loyaltyBg: unsplash(photos.loyaltyBg, 1200, 600),
  newsletterBg: unsplash(photos.newsletterBg, 1200, 600),
  aboutStore: unsplash(photos.aboutStore, 800, 600),
  careers: unsplash(photos.careers, 1200, 600),
} as const;

export const categoryImages = {
  snacks: unsplash(photos.snacks, 600, 400),
  beverages: unsplash(photos.beverages, 600, 400),
  dairy: unsplash(photos.dairy, 600, 400),
  bakery: unsplash(photos.bakery, 600, 400),
  grocery: unsplash(photos.grocery, 600, 400),
  "frozen-food": unsplash(photos.frozenFood, 600, 400),
  household: unsplash(photos.household, 600, 400),
  "personal-care": unsplash(photos.personalCare, 600, 400),
  tobacco: unsplash(photos.tobacco, 600, 400),
  "energy-drinks": unsplash(photos.energyDrinks, 600, 400),
} as const;
