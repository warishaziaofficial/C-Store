import Link from "next/link";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/deals", label: "Promotions" },
  { href: "/content", label: "Content" },
  { href: "/store-locator", label: "Store Locator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-12 md:py-16",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}

export function SectionHeader({
  title,
  description,
  href,
  linkText = "View All",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
        >
          {linkText} →
        </Link>
      )}
    </div>
  );
}
