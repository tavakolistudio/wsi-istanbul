import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppLink } from "@/lib/whatsapp";

function AccentLine({ text, accent }: { text: string; accent: string }): ReactNode {
  const index = text.indexOf(accent);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className="font-heading text-charcoal">{accent}</span>
      {text.slice(index + accent.length)}
    </>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const hero = pages.home.hero;

  return (
    <section className="bg-ivory pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto flex max-w-[520px] flex-col items-center px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-strong">{hero.eyebrow[locale]}</p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="mt-5 text-balance font-body text-4xl font-medium leading-[1.15] text-charcoal sm:text-5xl">
            <span className="block">
              <AccentLine text={hero.headline.line1[locale]} accent={hero.headline.accent1[locale]} />
            </span>
            <span className="block">
              <AccentLine text={hero.headline.line2[locale]} accent={hero.headline.accent2[locale]} />
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
            {hero.description[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-4 text-balance text-sm leading-relaxed text-muted/80 sm:text-base">
            {hero.secondParagraph[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={400} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={getWhatsAppLink()} external variant="primary">
            {hero.ctaPrimary[locale]}
          </Button>
          <Button href={`/${locale}/gallery`} variant="secondary">
            {hero.ctaSecondary[locale]}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
