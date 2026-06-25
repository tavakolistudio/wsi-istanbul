import { CinematicImage } from "@/components/ui/CinematicImage";
import type { CrowdLevel, Locale } from "@/content/types";
import { locations } from "@/content/locations";
import { crowdLabels, plannerCopy } from "@/content/planner";
import type { PlannerLocationChoice } from "./types";

const CROWD_COLOR: Record<CrowdLevel, string> = {
  low: "text-emerald-600",
  medium: "text-amber-600",
  high: "text-red-600",
};

export function LocationPicker({
  locale,
  selected,
  onSelect,
}: {
  locale: Locale;
  selected: PlannerLocationChoice | null;
  onSelect: (location: PlannerLocationChoice) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-strong">{plannerCopy.stepOfFive[1][locale]}</p>
      <h2 className="mb-2 font-heading text-3xl text-charcoal sm:text-4xl">{plannerCopy.step2.title[locale]}</h2>
      <p className="mb-10 text-sm text-muted">{plannerCopy.step2.sub[locale]}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => {
          const isSelected = selected?.id === loc.id;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() =>
                onSelect({
                  id: loc.id,
                  title: loc.name[locale],
                  image: loc.image,
                  bestTime: loc.bestTime?.[locale],
                  crowdLevel: loc.crowdLevel,
                  outfitSuggestion: loc.outfitSuggestion?.[locale],
                  estimatedDuration: loc.estimatedDuration?.[locale],
                })
              }
              className={`group overflow-hidden border text-start transition-all duration-300 ${
                isSelected ? "border-gold-strong" : "border-border hover:border-gold/50"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-ivory-soft">
                <CinematicImage src={loc.image} alt={loc.imageAlt[locale]} sizes="(min-width: 1024px) 33vw, 50vw" />
                {isSelected ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gold/20">
                    <span className="text-2xl text-charcoal">✓</span>
                  </div>
                ) : null}
              </div>
              <div className="bg-white p-4">
                <p
                  className={`mb-1 font-heading text-base transition-colors ${
                    isSelected ? "text-gold-strong" : "text-charcoal"
                  }`}
                >
                  {loc.name[locale]}
                </p>
                <div className="mb-2 flex items-center gap-4 text-[11px] text-muted">
                  {loc.estimatedDuration ? <span>⏱ {loc.estimatedDuration[locale]}</span> : null}
                  {loc.crowdLevel ? (
                    <span className={CROWD_COLOR[loc.crowdLevel]}>● {crowdLabels[loc.crowdLevel][locale]}</span>
                  ) : null}
                </div>
                {loc.bestTime ? <p className="text-[11px] text-muted">{loc.bestTime[locale]}</p> : null}
              </div>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() =>
            onSelect({
              id: "custom",
              title: plannerCopy.customLocation.title[locale],
              outfitSuggestion: plannerCopy.customLocation.outfitSuggestion[locale],
              estimatedDuration: plannerCopy.customLocation.estimatedDuration[locale],
              bestTime: plannerCopy.customLocation.bestTime[locale],
            })
          }
          className={`flex flex-col items-start justify-center gap-2 border p-6 text-start transition-all duration-300 ${
            selected?.id === "custom"
              ? "border-gold-strong bg-gold-soft"
              : "border-dashed border-border bg-white hover:border-gold/50"
          }`}
        >
          <p className={`font-heading text-base ${selected?.id === "custom" ? "text-gold-strong" : "text-charcoal"}`}>
            {plannerCopy.customLocation.title[locale]}
          </p>
          <p className="text-xs leading-relaxed text-muted">{plannerCopy.customLocation.description[locale]}</p>
        </button>
      </div>
    </div>
  );
}
