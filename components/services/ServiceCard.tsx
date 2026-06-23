import Link from "next/link";
import type { Locale, Service } from "@/content/types";
import { CinematicImage } from "@/components/ui/CinematicImage";

export function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  return (
    <Link href={`/${locale}/services#${service.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <CinematicImage src={service.image} alt={service.imageAlt[locale]} sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <h3 className="mt-5 font-heading text-xl text-charcoal">{service.title[locale]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.intro[locale]}</p>
    </Link>
  );
}
