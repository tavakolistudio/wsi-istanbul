import type { Metadata } from "next";
import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { PageHero } from "@/components/sections/PageHero";
import { LocationsGrid } from "@/components/locations/LocationsGrid";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.locations.seo;
  return buildMetadata({
    locale,
    path: "/locations",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pages.locations;

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow[locale]}
        heading={content.hero.heading[locale]}
        subtitle={content.hero.subtitle[locale]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <LocationsGrid locale={locale} />
        </Container>
      </section>
    </>
  );
}
