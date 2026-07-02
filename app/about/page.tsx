import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Store,
  Heart,
  Users,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteImages } from "@/lib/data/images";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about C-Store — your trusted neighborhood convenience store serving communities since 1985.",
};

const stats = [
  { value: "500+", label: "Store Locations" },
  { value: "2M+", label: "Happy Customers" },
  { value: "35+", label: "Years of Service" },
  { value: "24/7", label: "Always Open Somewhere" },
];

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We're more than a store — we're your neighbors. Every location is rooted in the community it serves.",
  },
  {
    icon: Users,
    title: "People Powered",
    description:
      "Our team members are the heart of C-Store. We invest in our people so they can deliver exceptional service.",
  },
  {
    icon: Award,
    title: "Quality & Value",
    description:
      "From fresh food to everyday essentials, we source quality products at prices that respect your budget.",
  },
  {
    icon: Clock,
    title: "Always Convenient",
    description:
      "Early mornings, late nights, and everything in between — we're open when you need us most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About C-Store"
        description="Serving communities with convenience, quality, and care since 1985."
      />

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={siteImages.aboutStore}
              alt="C-Store store exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              C-Store started as a single corner store in Philadelphia in 1985.
              What began as a family-run shop with a simple mission — to make
              everyday life a little easier — has grown into one of the region&apos;s
              most trusted convenience store brands.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, with over 500 locations, we continue to honor our roots by
              offering fresh food, fair prices, and the kind of friendly service
              you can only get from a store that truly knows its community.
            </p>
            <Button asChild>
              <Link href="/store-locator">
                Find a Store Near You
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary-foreground/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">What We Stand For</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Our values guide everything we do — from how we stock our shelves to
            how we greet you at the door.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card
              key={value.title}
              className="border-0 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="relative overflow-hidden rounded-2xl min-h-[280px] flex items-center justify-center text-center">
          <Image
            src={siteImages.careers}
            alt="C-Store team at work"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary/75" />
          <div className="relative p-8 md:p-12 max-w-xl">
            <Store className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Join the C-Store Team</h2>
            <p className="mt-2 text-white/80 max-w-lg mx-auto">
              We&apos;re always looking for friendly, motivated people to join our
              growing family. Competitive pay, flexible hours, and room to grow.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/contact">View Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
