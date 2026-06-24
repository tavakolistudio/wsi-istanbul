import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function PartnerCTA({ locale }: { locale: Locale }) {
  const content = pages.home.partnerCta;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <FadeIn className="rounded-[32px] bg-ivory-soft px-8 py-16 text-center shadow-sm sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl text-charcoal sm:text-4xl">
            {content.heading[locale]}
          </h2>
          <Button href={getWhatsAppLink()} external variant="primary" className="mt-8">
            {content.cta[locale]}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
