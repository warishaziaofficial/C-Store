"use client";

import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { StarRating } from "@/components/products/star-rating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.discount && (
          <Badge
            variant="destructive"
            className="absolute top-3 left-3 shadow-md"
          >
            -{product.discount}%
          </Badge>
        )}
        {product.isNew && !product.discount && (
          <Badge variant="success" className="absolute top-3 left-3 shadow-md">
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-xs font-medium text-primary uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-semibold text-sm leading-tight mt-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="shrink-0"
            onClick={() => {}}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
