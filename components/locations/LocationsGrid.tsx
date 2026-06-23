import type { Locale } from "@/content/types";
import { locations } from "@/content/locations";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { FadeIn } from "@/components/ui/FadeIn";

export function LocationsGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {locations.map((location, index) => (
        <FadeIn key={location.id} delay={(index % 2) * 80} className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <CinematicImage src={location.image} alt={location.imageAlt[locale]} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <h2 className="mt-5 font-heading text-xl text-charcoal sm:text-2xl">{location.name[locale]}</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold-strong">{location.mood[locale]}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{location.description[locale]}</p>
        </FadeIn>
      ))}
    </div>
  );
}
