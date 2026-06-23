import type { Locale } from "@/content/types";
import { founders } from "@/content/site";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { FadeIn } from "@/components/ui/FadeIn";

type Founder = (typeof founders)[number];

export function FounderBio({
  founder,
  locale,
  reverse = false,
}: {
  founder: Founder;
  locale: Locale;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:w-2/5">
        <CinematicImage src={founder.image} alt={founder.name} sizes="(min-width: 1024px) 40vw, 100vw" />
      </FadeIn>
      <FadeIn delay={100} className="lg:w-3/5">
        <h3 className="font-heading text-2xl text-charcoal sm:text-3xl">{founder.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.15em] text-gold-strong">{founder.role[locale]}</p>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{founder.bio[locale]}</p>
      </FadeIn>
    </div>
  );
}
