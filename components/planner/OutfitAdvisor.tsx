import type { Locale } from "@/content/types";
import { plannerCopy, styleOptions, styleOutfitAdvice, type VisualStyleId } from "@/content/planner";
import type { PlannerLocationChoice } from "./types";

export function OutfitAdvisor({
  locale,
  location,
  style,
}: {
  locale: Locale;
  location: PlannerLocationChoice | null;
  style: VisualStyleId | null;
}) {
  const styleLabel = style ? styleOptions.find((s) => s.id === style)?.label[locale] : null;
  const styleDescription = style ? styleOutfitAdvice[style][locale] : "";

  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-strong">{plannerCopy.stepOfFive[3][locale]}</p>
      <h2 className="mb-2 font-heading text-3xl text-charcoal sm:text-4xl">{plannerCopy.step4.title[locale]}</h2>
      <p className="mb-10 text-sm text-muted">{plannerCopy.step4.sub[locale]}</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {location ? (
          <div className="border border-gold/30 bg-gold-soft p-8">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-gold-strong">{location.title}</p>
            <h3 className="mb-4 font-heading text-xl text-charcoal">{plannerCopy.step4.colorRec[locale]}</h3>
            <p className="text-sm leading-relaxed text-charcoal/80">{location.outfitSuggestion}</p>
          </div>
        ) : null}

        {style ? (
          <div className="border border-border bg-white p-8">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-muted/70">
              {plannerCopy.stepLabels.style[locale]}: {styleLabel}
            </p>
            <h3 className="mb-4 font-heading text-xl text-charcoal">{plannerCopy.step4.styleDir[locale]}</h3>
            <p className="text-sm leading-relaxed text-muted">{styleDescription}</p>
          </div>
        ) : null}

        <div className="border border-border bg-white p-8">
          <h3 className="mb-5 font-heading text-xl text-charcoal">{plannerCopy.step4.avoidHeading[locale]}</h3>
          <ul className="space-y-3">
            {plannerCopy.step4.avoidList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 shrink-0 text-red-600">✗</span>
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-white p-8">
          <h3 className="mb-5 font-heading text-xl text-charcoal">{plannerCopy.step4.coupleHeading[locale]}</h3>
          <ul className="space-y-3">
            {plannerCopy.step4.coupleList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 shrink-0 text-gold-strong">→</span>
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-white p-8 lg:col-span-2">
          <h3 className="mb-5 font-heading text-xl text-charcoal">{plannerCopy.step4.accessoriesHeading[locale]}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {plannerCopy.step4.accessoriesList.map((item, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted">
                <span className="text-gold-strong">✦ </span>
                {item[locale]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
