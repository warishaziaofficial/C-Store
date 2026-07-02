"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle } from "lucide-react";
import { siteImages } from "@/lib/data/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-2xl border shadow-sm min-h-[320px]">
        <Image
          src={siteImages.newsletterBg}
          alt="C-Store store shelves"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        <div className="relative text-center p-8 md:p-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Stay in the Loop</h2>
          <p className="mt-2 text-muted-foreground">
            Get weekly deals, new product alerts, and exclusive offers delivered
            to your inbox.
          </p>
          {subscribed ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-primary font-medium">
              <CheckCircle className="h-5 w-5" />
              Thanks for subscribing!
            </div>
          ) : (
            <form
              className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="h-11 bg-background/80"
              />
              <Button type="submit" className="h-11 px-6 shrink-0">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            No spam, unsubscribe anytime. By subscribing you agree to our Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
