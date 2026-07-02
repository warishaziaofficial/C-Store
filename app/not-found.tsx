import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
        been moved or no longer exists.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
