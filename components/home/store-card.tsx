import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Store } from "@/lib/types";
import { siteImages } from "@/lib/data/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  const is24Hours = store.hours.some((h) => h.open === "24 Hours");

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {is24Hours && (
          <Badge className="absolute top-3 right-3" variant="success">
            24 Hours
          </Badge>
        )}
      </div>
      <CardContent className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{store.name}</h3>
          <div className="flex items-start gap-2 mt-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>
              {store.address}, {store.city}, {store.state} {store.zip}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          <span>{store.phone}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            Store Hours
          </div>
          {store.hours.map((hour) => (
            <div
              key={hour.day}
              className="flex justify-between text-sm text-muted-foreground pl-6"
            >
              <span>{hour.day}</span>
              <span>
                {hour.open === "24 Hours"
                  ? "Open 24 Hours"
                  : `${hour.open} – ${hour.close}`}
              </span>
            </div>
          ))}
        </div>

        <div className="relative h-32 rounded-lg overflow-hidden border">
          <Image
            src={siteImages.mapCard}
            alt={`Map near ${store.name}`}
            fill
            className="object-cover"
            sizes="400px"
          />
          <div className="absolute inset-0 bg-secondary/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-primary text-primary-foreground p-2 shadow-lg">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
          <p className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-medium text-white drop-shadow">
            {store.lat.toFixed(4)}, {store.lng.toFixed(4)}
          </p>
        </div>

        <Button className="w-full" variant="outline">
          <Navigation className="h-4 w-4" />
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}
