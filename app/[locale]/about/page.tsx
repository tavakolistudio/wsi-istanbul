import type { Metadata } from "next";
import Image from "next/image";
import { founders, pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { FounderBio } from "@/components/about/FounderBio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.about.seo;
  return buildMetadata({
    locale,
    path: "/about",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pages.about;

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow[locale]}
        heading={content.hero.heading[locale]}
        subtitle={content.hero.subtitle[locale]}
      />

      <FadeIn>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Mohammad Tavakoli filming a wedding in Istanbul"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl text-charcoal sm:text-3xl">{content.philosophy.heading[locale]}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{content.philosophy.body[locale]}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory-soft py-20 sm:py-28">
        <Container className="space-y-20">
          <FounderBio founder={founders[0]} locale={locale} />
          <FounderBio founder={founders[1]} locale={locale} reverse />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl text-charcoal sm:text-3xl">{content.brandStory.heading[locale]}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{content.brandStory.body[locale]}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-charcoal py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl text-ivory sm:text-3xl">{content.closing.heading[locale]}</h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/80 sm:text-lg">{content.closing.body[locale]}</p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
