"use client";

import { useState } from "react";
import {
  contentArticles,
  contentCategories,
  getArticlesByCategory,
  getFeaturedArticles,
} from "@/lib/data/content";
import { ContentCard } from "@/components/content/content-card";
import { SectionHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ContentPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = getFeaturedArticles();
  const filtered = getArticlesByCategory(activeCategory);
  const regularArticles =
    activeCategory === "All"
      ? contentArticles.filter((a) => !a.featured)
      : filtered;

  return (
    <>
      {activeCategory === "All" && featured.length > 0 && (
        <section className="container mx-auto px-4 pb-10">
          <SectionHeader
            title="Featured Stories"
            description="Top reads from the C-Store team"
          />
          <div className="grid grid-cols-1 gap-6">
            {featured.map((article) => (
              <ContentCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 pb-14">
        <div className="flex flex-wrap gap-2 mb-8">
          {contentCategories.map((cat) => (
            <button key={cat} type="button" onClick={() => setActiveCategory(cat)}>
              <Badge
                variant={activeCategory === cat ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-colors",
                  activeCategory !== cat &&
                    "hover:bg-primary/10 hover:text-primary hover:border-primary"
                )}
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>

        {regularArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <ContentCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            No articles in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
