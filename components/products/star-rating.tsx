import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md";
  className?: string;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = "sm",
  className,
}: StarRatingProps) {
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            iconSize,
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : i < rating
                ? "fill-amber-200 text-amber-400"
                : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}
