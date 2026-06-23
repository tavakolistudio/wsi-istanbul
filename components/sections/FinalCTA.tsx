import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTA({ locale }: { locale: Locale }) {
  const content = pages.home.finalCta;

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl text-ivory sm:text-4xl">{content.heading[locale]}</h2>
          <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">{content.subtitle[locale]}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={getWhatsAppLink()} external variant="inverse">
              {content.ctaPrimary[locale]}
            </Button>
            <Button href={`/${locale}/contact`} variant="outline-light">
              {content.ctaSecondary[locale]}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
