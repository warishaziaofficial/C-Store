import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardSkeletonProps {
  count?: number;
}

export function ProductCardSkeleton({ count = 4 }: ProductCardSkeletonProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border bg-card overflow-hidden shadow-sm">
          <Skeleton className="aspect-square w-full rounded-none" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex justify-between items-center pt-1">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-8 w-20 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
