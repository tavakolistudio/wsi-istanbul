import type { Metadata } from "next";
import { services } from "@/content/services";
import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.services.seo;
  return buildMetadata({
    locale,
    path: "/services",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pages.services;

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow[locale]}
        heading={content.hero.heading[locale]}
        subtitle={content.hero.subtitle[locale]}
      />
      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} locale={locale} reverse={index % 2 === 1} />
      ))}
    </>
  );
}
