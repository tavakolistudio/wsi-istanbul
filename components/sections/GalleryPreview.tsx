import type { Locale } from "@/content/types";
import { galleryItems } from "@/content/gallery";
import { pages } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function GalleryPreview({ locale }: { locale: Locale }) {
  const content = pages.home.galleryPreview;
  const items = galleryItems.slice(0, 6);

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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 80}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <CinematicImage src={item.image} alt={item.alt[locale]} sizes="(min-width: 768px) 33vw, 50vw" />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={`/${locale}/gallery`} variant="outline">
            {content.cta[locale]}
          </Button>
        </div>
      </Container>
    </section>
  );
}
