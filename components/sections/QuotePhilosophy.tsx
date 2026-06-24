import Image from "next/image";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const imageAlt: Record<Locale, string> = {
  en: "Wedding couple in Istanbul",
  fa: "زوج عروسی در استانبول",
  tr: "İstanbul'da düğün çifti",
};

export function QuotePhilosophy({ locale }: { locale: Locale }) {
  const quote = pages.home.quote;

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <span aria-hidden="true" className="font-heading text-5xl leading-none text-gold">
            &rdquo;
          </span>
          <p className="mt-2 text-balance font-heading text-2xl leading-snug text-charcoal sm:text-3xl">
            {quote.text[locale]}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">{quote.author}</p>
        </FadeIn>

        <FadeIn
          delay={150}
          className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-md"
        >
          <Image src={quote.image} alt={imageAlt[locale]} fill sizes="(min-width: 640px) 448px, 100vw" className="object-cover" />
        </FadeIn>
      </Container>
    </section>
  );
}
