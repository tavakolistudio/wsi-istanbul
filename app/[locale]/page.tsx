import type { Metadata } from "next";
import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { Hero } from "@/components/sections/Hero";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LocationsPreview } from "@/components/sections/LocationsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);

  return (
    <>
      <Hero locale={locale} />
      <GalleryPreview locale={locale} />
      <AboutPreview locale={locale} />
      <ServicesSection locale={locale} />
      <WhyChooseUs locale={locale} />
      <LocationsPreview locale={locale} />
      <Testimonials locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
