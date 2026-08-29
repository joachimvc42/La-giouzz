import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  const routes = [
    "",
    "/qui-suis-je",
    "/soins",
    "/formations",
    "/temoignages",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
