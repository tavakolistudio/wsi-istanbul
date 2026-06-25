import type { Metadata } from "next";
import { pages } from "@/content/site";
import { plannerCopy } from "@/content/planner";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { PageHero } from "@/components/sections/PageHero";
import { PlannerStepper } from "@/components/planner/PlannerStepper";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.planner.seo;
  return buildMetadata({
    locale,
    path: "/planner",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export default async function PlannerPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);

  return (
    <>
      <PageHero
        eyebrow={plannerCopy.heroEyebrow[locale]}
        heading={plannerCopy.heroTitle[locale]}
        subtitle={plannerCopy.heroSubtitle[locale]}
      />
      <section className="py-12 sm:py-16">
        <Container className="max-w-5xl">
          <PlannerStepper locale={locale} />
        </Container>
      </section>
    </>
  );
}
