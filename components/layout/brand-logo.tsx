import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <span className={cn("font-bold tracking-tight text-foreground", sizes[size], className)}>
      C-<span className="text-primary">Store</span>
    </span>
  );
}

export function BrandName() {
  return siteConfig.name;
}
