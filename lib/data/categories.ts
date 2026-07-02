import { Category } from "@/lib/types";
import { categoryImages } from "@/lib/data/images";

export const categories: Category[] = [
  {
    id: "1",
    name: "Snacks",
    slug: "snacks",
    description: "Chips, candy, nuts, and all your favorite munchies",
    image: categoryImages.snacks,
    productCount: 48,
  },
  {
    id: "2",
    name: "Beverages",
    slug: "beverages",
    description: "Sodas, juices, water, and refreshing drinks",
    image: categoryImages.beverages,
    productCount: 62,
  },
  {
    id: "3",
    name: "Dairy",
    slug: "dairy",
    description: "Milk, cheese, yogurt, and dairy essentials",
    image: categoryImages.dairy,
    productCount: 34,
  },
  {
    id: "4",
    name: "Bakery",
    slug: "bakery",
    description: "Fresh bread, pastries, donuts, and baked goods",
    image: categoryImages.bakery,
    productCount: 28,
  },
  {
    id: "5",
    name: "Grocery",
    slug: "grocery",
    description: "Pantry staples, canned goods, and everyday essentials",
    image: categoryImages.grocery,
    productCount: 56,
  },
  {
    id: "6",
    name: "Frozen Food",
    slug: "frozen-food",
    description: "Ice cream, frozen meals, and cool treats",
    image: categoryImages["frozen-food"],
    productCount: 41,
  },
  {
    id: "7",
    name: "Household",
    slug: "household",
    description: "Cleaning supplies, paper goods, and home essentials",
    image: categoryImages.household,
    productCount: 39,
  },
  {
    id: "8",
    name: "Personal Care",
    slug: "personal-care",
    description: "Health, beauty, and personal hygiene products",
    image: categoryImages["personal-care"],
    productCount: 45,
  },
  {
    id: "9",
    name: "Tobacco",
    slug: "tobacco",
    description: "Cigarettes, cigars, and smoking accessories",
    image: categoryImages.tobacco,
    productCount: 22,
  },
  {
    id: "10",
    name: "Energy Drinks",
    slug: "energy-drinks",
    description: "Power up with top energy drink brands",
    image: categoryImages["energy-drinks"],
    productCount: 18,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
