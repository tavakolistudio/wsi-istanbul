import type { Metadata } from "next";
import Image from "next/image";
import { contact, pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.contact.seo;
  return buildMetadata({
    locale,
    path: "/contact",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pages.contact;

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
            src="/images/contact-hero.png"
            alt="ISO Wedding — Tavakoli Studio"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-16 lg:grid-cols-[3fr_2fr]">
          <FadeIn>
            <ContactForm locale={locale} />
          </FadeIn>

          <FadeIn delay={100} className="flex flex-col gap-4 lg:pt-2">
            <Button
              href={getWhatsAppLink(content.defaultWhatsappMessage[locale])}
              external
              variant="primary"
              className="w-full sm:w-auto"
            >
              {content.whatsappCta[locale]}
            </Button>
            <Button href={contact.instagramUrl} external variant="outline" className="w-full sm:w-auto">
              {content.instagramCta[locale]}
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
