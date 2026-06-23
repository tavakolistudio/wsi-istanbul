import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const content = pages.home.whyChooseUs;

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow[locale]}
            heading={content.heading[locale]}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <FadeIn key={item.title.en} delay={index * 70} className="border-t border-border pt-6">
              <h3 className="font-heading text-lg text-charcoal">{item.title[locale]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body[locale]}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
