"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, User, Menu, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductSearch } from "@/components/products/product-search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLogo } from "@/components/layout/brand-logo";
import { navLinks } from "@/components/layout/page-header";

export function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md group-hover:shadow-lg transition-shadow">
              <Store className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <BrandLogo />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-muted-foreground"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              Search
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Store className="h-4 w-4" />
                    </div>
                    <BrandLogo size="sm" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6">
                  <ProductSearch
                    variant="compact"
                    onClose={() => setMobileOpen(false)}
                    showPopular={false}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-xl mx-auto">
              <ProductSearch
                variant="navbar"
                autoFocus
                onClose={() => setSearchOpen(false)}
                showPopular={false}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
