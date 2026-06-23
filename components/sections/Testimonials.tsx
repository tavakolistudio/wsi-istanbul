import type { Locale } from "@/content/types";
import { testimonials } from "@/content/testimonials";
import { pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials({ locale }: { locale: Locale }) {
  const content = pages.home.testimonials;
  const items = testimonials.slice(0, 4);

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

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {items.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 80} className="rounded-sm border border-border bg-ivory p-8">
              <p className="text-balance text-base leading-relaxed text-charcoal">&ldquo;{testimonial.quote[locale]}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-sm font-medium text-gold-strong">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-charcoal">{testimonial.names}</p>
                  <p className="text-xs text-muted">{testimonial.origin[locale]}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
