import Image from "next/image";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedStories({ locale }: { locale: Locale }) {
  const content = pages.home.featuredStories;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow[locale]}
            heading={content.heading[locale]}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {content.items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <div className="mx-auto max-w-xl text-center">
                <h3 className="font-heading text-2xl text-charcoal sm:text-3xl">{item.title[locale]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.description[locale]}</p>
              </div>
              <div className="relative mx-auto mt-8 aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover object-[center_55%]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
