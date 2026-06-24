import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/content/types";
import { siteUrl, brand } from "@/content/site";

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  fa: "fa_IR",
  tr: "tr_TR",
};

interface BuildMetadataParams {
  locale: Locale;
  /** Path after the locale segment, e.g. "/about". Use "" for the home page. */
  path: string;
  title: string;
  description: string;
  /** Path under /public for the social preview image. */
  imagePath?: string;
  keywords?: string[];
}

/**
 * Builds canonical + hreflang + Open Graph + Twitter metadata for a page.
 * Every page's generateMetadata should funnel through this so SEO tags
 * stay consistent across all three locales.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  imagePath = "/images/hero/hero-istanbul-wedding-couple.jpg",
  keywords,
}: BuildMetadataParams): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteUrl}/${l}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${defaultLocale}${path}`;

  const url = `${siteUrl}/${locale}${path}`;
  const imageUrl = `${siteUrl}${imagePath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: ogLocaleMap[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
