import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppLink } from "@/lib/whatsapp";

const requestDetails: Record<Locale, string> = {
  en: "Request package details",
  fa: "استعلام جزئیات پکیج",
  tr: "Paket detaylarını isteyin",
};

export function PricingPackages({ locale }: { locale: Locale }) {
  const packages = pages.home.packages;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={packages.eyebrow[locale]}
            heading={packages.heading[locale]}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {packages.items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 100}
              className="flex flex-col rounded-2xl bg-ivory p-8 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]"
            >
              <h3 className="font-heading text-xl text-charcoal">{item.title[locale]}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description[locale]}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-gold-strong">{requestDetails[locale]}</p>
              <Button href={getWhatsAppLink()} external variant="primary" className="mt-4 w-full">
                {packages.cta[locale]}
              </Button>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
