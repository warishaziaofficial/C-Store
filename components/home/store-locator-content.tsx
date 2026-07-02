"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { stores } from "@/lib/data/stores";
import { siteImages } from "@/lib/data/images";
import { PageHeader } from "@/components/layout/page-header";
import { StoreCard } from "@/components/home/store-card";
import { Input } from "@/components/ui/input";

export function StoreLocatorContent() {
  const [search, setSearch] = useState("");

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.city.toLowerCase().includes(search.toLowerCase()) ||
      store.zip.includes(search) ||
      store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Store Locator"
        description="Find a C-Store near you. Most locations open early and close late — some open 24 hours."
      >
        <div className="relative max-w-lg mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by city, zip code, or address..."
            className="pl-10 h-12 bg-background"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border shadow-md mb-10">
          <Image
            src={siteImages.mapOverview}
            alt="Map showing C-Store store locations"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-secondary/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-background/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
              <p className="text-lg font-semibold text-foreground">
                {filteredStores.length} Store
                {filteredStores.length !== 1 ? "s" : ""} Found
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {search ? `Results for "${search}"` : "All C-Store locations"}
              </p>
            </div>
          </div>
          {filteredStores.map((store, i) => (
            <div
              key={store.id}
              className="absolute h-7 w-7 rounded-full bg-primary border-2 border-white shadow-lg flex items-center justify-center text-[10px] font-bold text-white"
              style={{
                top: `${18 + (i % 3) * 22}%`,
                left: `${12 + i * 13}%`,
              }}
              title={store.name}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            No stores found matching your search. Try a different location.
          </p>
        )}
      </section>
    </>
  );
}
