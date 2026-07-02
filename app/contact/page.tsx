import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/home/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with C-Store customer support. We're here to help 7 days a week.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: siteConfig.phone,
    sub: "Mon–Sun, 8 AM – 8 PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    sub: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    detail: "123 Main Street",
    sub: "Philadelphia, PA 19103",
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "8 AM – 8 PM EST",
    sub: "7 days a week",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a question, comment, or concern? We'd love to hear from you."
      />
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="border-0 shadow-md">
              <CardContent className="p-5 text-center space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <info.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm">{info.title}</h3>
                <p className="text-sm font-medium">{info.detail}</p>
                <p className="text-xs text-muted-foreground">{info.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-1">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
