import type { Locale } from "@/content/types";
import { founders, pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutPreview({ locale }: { locale: Locale }) {
  const content = pages.home.aboutPreview;

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn className="grid grid-cols-2 gap-4">
          {founders.map((founder) => (
            <div key={founder.id} className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <CinematicImage src={founder.image} alt={founder.name} sizes="25vw" />
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={120}>
          <SectionHeading eyebrow={content.eyebrow[locale]} heading={content.heading[locale]} />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{content.body[locale]}</p>
          <div className="mt-8">
            <Button href={`/${locale}/about`} variant="outline">
              {content.cta[locale]}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
