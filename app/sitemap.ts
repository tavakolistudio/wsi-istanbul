import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/content/types";
import { siteUrl } from "@/content/site";

const routes = ["", "/about", "/services", "/gallery", "/locations", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${siteUrl}/${locale}${route}`;
    }
    languages["x-default"] = `${siteUrl}/${defaultLocale}${route}`;

    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
