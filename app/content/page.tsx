import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContentPageContent } from "@/components/content/content-page-content";

export const metadata: Metadata = {
  title: "Content & Stories",
  description:
    "Tips, guides, community stories, and seasonal content from C-Store — your neighborhood convenience store.",
};

export default function ContentPage() {
  return (
    <>
      <PageHeader
        title="Content & Stories"
        description="Guides, product tips, community news, and seasonal ideas to help you get the most out of every C-Store visit."
      />
      <ContentPageContent />
    </>
  );
}
