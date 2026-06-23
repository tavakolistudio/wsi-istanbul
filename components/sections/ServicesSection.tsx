import type { Locale } from "@/content/types";
import { services } from "@/content/services";
import { pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesSection({ locale }: { locale: Locale }) {
  const content = pages.home.servicesSection;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow[locale]}
            heading={content.heading[locale]}
            subtitle={content.subtitle[locale]}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 80}>
              <ServiceCard service={service} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
