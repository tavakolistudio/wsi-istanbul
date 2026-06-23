import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

/**
 * Shared banner for every inner page (About/Services/Gallery/Locations/
 * Contact/Blog). The generous top padding keeps content clear of the fixed
 * transparent header; the soft background gives that header something
 * intentional to sit over instead of colliding with body text.
 */
export function PageHero({
  eyebrow,
  heading,
  subtitle,
}: {
  eyebrow: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ivory-soft pb-16 pt-36 sm:pt-40">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            subtitle={subtitle}
            as="h1"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
