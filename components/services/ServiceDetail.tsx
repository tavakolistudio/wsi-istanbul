import type { Locale, Service } from "@/content/types";
import { ui } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceDetail({
  service,
  locale,
  reverse = false,
}: {
  service: Service;
  locale: Locale;
  reverse?: boolean;
}) {
  return (
    <section id={service.slug} className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:w-2/5">
            <CinematicImage src={service.image} alt={service.imageAlt[locale]} sizes="(min-width: 1024px) 40vw, 100vw" />
          </FadeIn>
          <FadeIn delay={100} className="lg:w-3/5">
            <h2 className="font-heading text-2xl text-charcoal sm:text-3xl">{service.title[locale]}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{service.intro[locale]}</p>
            <ul className="mt-6 space-y-3">
              {service.features[locale].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-charcoal sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-strong" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={getWhatsAppLink(service.whatsappMessage[locale])} external variant="outline">
                {ui.bookOnWhatsapp[locale]}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
