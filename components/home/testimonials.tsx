import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/layout/page-header";
import { StarRating } from "@/components/products/star-rating";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader
        title="What Our Customers Say"
        description="Trusted by thousands of happy shoppers every day"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6 space-y-4">
              <StarRating rating={testimonial.rating} size="md" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
