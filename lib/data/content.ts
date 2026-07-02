import { ContentArticle } from "@/lib/types";
import { unsplash, photos } from "@/lib/data/images";

export const contentCategories = [
  "All",
  "Store Guides",
  "Product Tips",
  "Community",
  "Seasonal",
] as const;

export const contentArticles: ContentArticle[] = [
  {
    id: "c1",
    slug: "ultimate-road-trip-snack-guide",
    title: "The Ultimate Road Trip Snack Guide",
    excerpt:
      "Hitting the highway? Pack smart with our top picks for energy, convenience, and taste — all available at your nearest C-Store.",
    body: [
      "Long drives demand the right fuel. Whether you're crossing state lines or commuting across town, the right snacks keep you alert and satisfied without slowing you down.",
      "Start with protein-rich options like mixed nuts, beef jerky, or Greek yogurt from our dairy section. Pair them with whole-grain crackers or fresh fruit from our grocery aisle for balanced energy that lasts.",
      "For quick energy boosts, energy drinks and granola bars are road-trip classics. Look for our weekly 2-for deals on energy drinks to stock up before you go.",
      "Don't forget hydration — bottled water, sports drinks, and iced coffee are always stocked and ready. Stop by any C-Store location and our team can help you build the perfect road trip snack bundle.",
    ],
    category: "Store Guides",
    author: "C-Store Editorial",
    publishedAt: "2026-06-15",
    readTime: "4 min read",
    image: unsplash(photos.chips, 800, 500),
    featured: true,
    tags: ["snacks", "travel", "tips"],
  },
  {
    id: "c2",
    slug: "fresh-coffee-every-morning",
    title: "Why Our Fresh-Brewed Coffee Keeps Customers Coming Back",
    excerpt:
      "From early commuters to night-shift workers, discover what makes C-Store coffee a daily ritual for thousands of customers.",
    body: [
      "Every morning before sunrise, our stores brew a fresh batch of premium coffee. We source quality beans and maintain our equipment daily to deliver a consistent, rich cup every time.",
      "Our Coffee Club rewards program makes it even better — buy 6 cups and your 7th is free. It's one of the most popular loyalty perks across all our locations.",
      "Whether you prefer hot drip, iced coffee, or a flavored latte from our express machine, we've got you covered 24/7 at select locations.",
      "Pair your morning coffee with a fresh bakery item — donuts, croissants, and muffins are baked and delivered daily to every C-Store.",
    ],
    category: "Product Tips",
    author: "Maria Santos",
    publishedAt: "2026-06-10",
    readTime: "3 min read",
    image: unsplash(photos.coffeePromo, 800, 500),
    featured: true,
    tags: ["coffee", "bakery", "morning"],
  },
  {
    id: "c3",
    slug: "supporting-local-communities",
    title: "How C-Store Supports Local Communities",
    excerpt:
      "We're more than a convenience store — learn how we give back through food drives, youth sports sponsorships, and local hiring.",
    body: [
      "Since 1985, C-Store has been rooted in the neighborhoods we serve. Every location hires locally, sources regional products when possible, and participates in community events year-round.",
      "Our annual food drive collects thousands of non-perishable items for local food banks. Customers can drop donations at any register throughout November.",
      "We sponsor youth sports leagues, school supply drives, and neighborhood clean-up days. If your organization needs a community partner, reach out through our Contact page.",
      "When you shop at C-Store, you're supporting local jobs and community programs — not just grabbing a quick snack.",
    ],
    category: "Community",
    author: "C-Store Editorial",
    publishedAt: "2026-05-28",
    readTime: "5 min read",
    image: unsplash(photos.aboutStore, 800, 500),
    tags: ["community", "local", "giving back"],
  },
  {
    id: "c4",
    slug: "summer-hydration-essentials",
    title: "Summer Hydration Essentials You Need Right Now",
    excerpt:
      "Beat the heat with the best drinks and frozen treats to stay cool all summer long — plus current in-store deals.",
    body: [
      "Summer heat means staying hydrated is non-negotiable. Stock up on bottled water multipacks, electrolyte sports drinks, and coconut water for effective hydration.",
      "Our frozen food section is packed with ice cream, popsicles, and frozen fruit bars — perfect for cooling down after outdoor activities.",
      "Look for our Summer Savings Event with fountain drink refills at just $0.99 for rewards members. It's the best deal in town for unlimited refreshment.",
      "Pro tip: keep a cooler bag in your car and grab ice from our freezer section for picnics, beach days, and backyard barbecues.",
    ],
    category: "Seasonal",
    author: "James Wright",
    publishedAt: "2026-06-20",
    readTime: "3 min read",
    image: unsplash(photos.sportsDrink, 800, 500),
    tags: ["summer", "beverages", "deals"],
  },
  {
    id: "c5",
    slug: "late-night-meals-made-easy",
    title: "Late-Night Meals Made Easy at C-Store",
    excerpt:
      "Hungry after hours? Our hot food, frozen meals, and quick grocery picks have you covered when everything else is closed.",
    body: [
      "When the kitchen is closed and delivery apps are slow, C-Store is your late-night lifeline. Many locations offer hot pizza, wings, and breakfast sandwiches around the clock.",
      "Frozen meals like pizza pockets, burritos, and ramen are microwave-ready in minutes. Pair with a cold drink and you're set.",
      "Our 24-hour locations in University District and North Philly are especially popular with students and night-shift workers who need reliable food at any hour.",
      "Check our Store Locator to find a 24-hour C-Store near you and see what hot food options are available.",
    ],
    category: "Store Guides",
    author: "C-Store Editorial",
    publishedAt: "2026-05-15",
    readTime: "4 min read",
    image: unsplash(photos.frozenMeal, 800, 500),
    tags: ["late night", "food", "24 hours"],
  },
  {
    id: "c6",
    slug: "rewards-program-guide",
    title: "Your Complete Guide to C-Store Rewards",
    excerpt:
      "Maximize your savings with points, birthday rewards, member-only deals, and digital coupons — all explained in one place.",
    body: [
      "C-Store Rewards is free to join and takes less than 30 seconds. Sign up at any register or through our mobile app to start earning immediately.",
      "Earn 1 point for every dollar spent. Redeem 100 points for $1 off your purchase. Points never expire as long as your account stays active.",
      "Members get exclusive perks: early access to weekly deals, a free item on your birthday, and $0.99 fountain drink refills.",
      "Download the C-Store app to track your points, clip digital coupons, and order ahead for faster pickup. It's the easiest way to save on every visit.",
    ],
    category: "Product Tips",
    author: "Maria Santos",
    publishedAt: "2026-06-01",
    readTime: "3 min read",
    image: unsplash(photos.loyaltyBg, 800, 500),
    tags: ["rewards", "savings", "app"],
  },
];

export function getArticleBySlug(slug: string): ContentArticle | undefined {
  return contentArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): ContentArticle[] {
  return contentArticles.filter((a) => a.featured);
}

export function getArticlesByCategory(category: string): ContentArticle[] {
  if (category === "All") return contentArticles;
  return contentArticles.filter((a) => a.category === category);
}
