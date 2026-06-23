"use client";

import { useMemo, useState } from "react";
import type { GalleryCategory, Locale } from "@/content/types";
import { galleryCategories, galleryItems } from "@/content/gallery";
import { pages, ui } from "@/content/site";
import { CinematicImage } from "@/components/ui/CinematicImage";

type FilterValue = GalleryCategory | "all";

export function GalleryGrid({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<FilterValue>("all");
  const filters = pages.gallery.filters;
  const tabs: FilterValue[] = ["all", ...galleryCategories];

  const items = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => {
          const label = tab === "all" ? ui.allLabel[locale] : filters[tab][locale];
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2 text-sm tracking-wide transition-colors ${
                isActive ? "bg-charcoal text-ivory" : "border border-border text-muted hover:text-charcoal"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-sm">
            <CinematicImage src={item.image} alt={item.alt[locale]} sizes="(min-width: 768px) 33vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 start-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-heading text-base text-ivory">{item.title[locale]}</p>
              {item.location ? <p className="text-xs text-ivory/80">{item.location[locale]}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
