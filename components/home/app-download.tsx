import Image from "next/image";
import { Smartphone, Apple, Play } from "lucide-react";
import { siteImages } from "@/lib/data/images";
import { Button } from "@/components/ui/button";

export function AppDownload() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Smartphone className="h-4 w-4" />
              Mobile App
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground">
              Order Ahead, Skip the Line
            </h2>
            <p className="mt-3 text-secondary-foreground/80 text-base md:text-lg max-w-lg">
              Download the C-Store app for mobile ordering, exclusive deals,
              digital coupons, and rewards tracking — all in your pocket.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <Apple className="h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/40 text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary gap-2"
              >
                <Play className="h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-56 h-[28rem] md:w-64 md:h-[32rem] rounded-[2.5rem] border-4 border-primary/30 shadow-2xl overflow-hidden">
              <Image
                src={siteImages.appMockup}
                alt="C-Store mobile app on phone"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-secondary-foreground font-bold text-lg drop-shadow">C-Store</p>
                <p className="text-secondary-foreground/80 text-sm mt-1 drop-shadow">
                  Convenience in your pocket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
