import type { Metadata } from "next";
import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { Hero } from "@/components/sections/Hero";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { QuotePhilosophy } from "@/components/sections/QuotePhilosophy";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FeaturedStories } from "@/components/sections/FeaturedStories";
import { PartnerCTA } from "@/components/sections/PartnerCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.home.seo;
  return buildMetadata({
    locale,
    path: "",
    title: seo.title[locale],
    description: seo.description[locale],
    keywords: seo.keywords,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);

  return (
    <>
      <Hero locale={locale} />
      <ImageMarquee locale={locale} />
      <QuotePhilosophy locale={locale} />
      <PricingPackages locale={locale} />
      <TestimonialCarousel locale={locale} />
      <FeaturedStories locale={locale} />
      <PartnerCTA locale={locale} />
    </>
  );
}
