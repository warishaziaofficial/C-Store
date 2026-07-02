import type { Metadata } from "next";
import { faqs } from "@/lib/data/faqs";
import { PageHeader } from "@/components/layout/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about C-Store stores, rewards, orders, returns, and more.",
};

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about shopping at C-Store."
      />
      <section className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <Badge key={cat} variant="outline" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-base">
                <span className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-[10px] shrink-0 hidden sm:inline-flex">
                    {faq.category}
                  </Badge>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-primary font-medium hover:underline">
            Contact our support team
          </a>
        </p>
      </section>
    </>
  );
}
