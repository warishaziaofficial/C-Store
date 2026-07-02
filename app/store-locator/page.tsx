import type { Metadata } from "next";
import { StoreLocatorContent } from "@/components/home/store-locator-content";

export const metadata: Metadata = {
  title: "Store Locator",
  description:
    "Find your nearest C-Store convenience store. View hours, addresses, and get directions.",
};

export default function StoreLocatorPage() {
  return <StoreLocatorContent />;
}
