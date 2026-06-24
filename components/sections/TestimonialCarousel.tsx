"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel({ locale }: { locale: Locale }) {
  const content = pages.home.testimonialsCarousel;
  const items = content.items;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

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

        <FadeIn delay={100} className="mx-auto mt-12 max-w-2xl text-center">
          <Stars />
          <p
            aria-live="polite"
            className="mt-6 min-h-[4.5em] text-balance font-heading text-xl leading-relaxed text-charcoal sm:text-2xl"
          >
            &ldquo;{items[active].quote[locale]}&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActive((current) => (current - 1 + items.length) % items.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active ? "w-6 bg-gold-strong" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActive((current) => (current + 1) % items.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              ›
            </button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
