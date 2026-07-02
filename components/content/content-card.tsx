import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ContentArticle } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ContentCardProps {
  article: ContentArticle;
  featured?: boolean;
}

export function ContentCard({ article, featured = false }: ContentCardProps) {
  return (
    <Link href={`/content/${article.slug}`}>
      <Card
        className={`group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full ${
          featured ? "md:grid md:grid-cols-2" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/10] md:aspect-auto md:min-h-[280px]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          {featured && (
            <Badge className="absolute top-3 left-3 shadow-md">Featured</Badge>
          )}
        </div>
        <CardContent className={`p-5 flex flex-col ${featured ? "justify-center" : ""}`}>
          <Badge variant="outline" className="w-fit text-xs mb-2">
            {article.category}
          </Badge>
          <h3
            className={`font-semibold group-hover:text-primary transition-colors line-clamp-2 ${
              featured ? "text-xl md:text-2xl" : "text-base"
            }`}
          >
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
