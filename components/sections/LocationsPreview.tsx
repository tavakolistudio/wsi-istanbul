import type { Locale } from "@/content/types";
import { locations } from "@/content/locations";
import { pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function LocationsPreview({ locale }: { locale: Locale }) {
  const content = pages.home.locationsPreview;
  const items = locations.slice(0, 4);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow[locale]}
            heading={content.heading[locale]}
            subtitle={content.subtitle[locale]}
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((location, index) => (
            <FadeIn
              key={location.id}
              delay={index * 80}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <CinematicImage src={location.image} alt={location.imageAlt[locale]} sizes="(min-width: 1024px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 start-4 font-heading text-lg text-ivory">{location.name[locale]}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={`/${locale}/locations`} variant="outline">
            {content.cta[locale]}
          </Button>
        </div>
      </Container>
    </section>
  );
}
