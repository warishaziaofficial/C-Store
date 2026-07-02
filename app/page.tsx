import { HeroBanner } from "@/components/home/hero-banner";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { BestSellers } from "@/components/home/best-sellers";
import { WeeklyPromotions } from "@/components/home/weekly-promotions";
import { NewArrivals } from "@/components/home/new-arrivals";
import { LoyaltyBanner } from "@/components/home/loyalty-banner";
import { AppDownload } from "@/components/home/app-download";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <BestSellers />
      <WeeklyPromotions />
      <NewArrivals />
      <LoyaltyBanner />
      <AppDownload />
      <Testimonials />
      <Newsletter />
    </>
  );
}
