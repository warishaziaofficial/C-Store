import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import {
  contentArticles,
  getArticleBySlug,
} from "@/lib/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentCard } from "@/components/content/content-card";
import { Separator } from "@/components/ui/separator";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return contentArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = contentArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <article>
        <div className="relative h-56 md:h-72 lg:h-96 bg-secondary">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-8">
            <Button variant="ghost" size="sm" className="w-fit mb-4 -ml-2" asChild>
              <Link href="/content">
                <ArrowLeft className="h-4 w-4" />
                Back to Content
              </Link>
            </Button>
            <Badge variant="outline" className="w-fit mb-3 bg-card">
              {article.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span>By {article.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {article.excerpt}
            </p>
            <Separator className="my-8" />
            <div className="space-y-5">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
              <Tag className="h-4 w-4 text-muted-foreground mt-0.5" />
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <ContentCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-10 md:py-14">
        <Card className="border-0 shadow-md bg-gradient-to-r from-primary/10 to-accent">
          <CardContent className="p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold">
              Ready to shop what you just read about?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Find these products and deals at your nearest C-Store location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/store-locator">Find a Store</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
