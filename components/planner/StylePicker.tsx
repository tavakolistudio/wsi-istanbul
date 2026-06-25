import type { Locale } from "@/content/types";
import { plannerCopy, styleOptions, type VisualStyleId } from "@/content/planner";

export function StylePicker({
  locale,
  selected,
  onSelect,
}: {
  locale: Locale;
  selected: VisualStyleId | null;
  onSelect: (id: VisualStyleId) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-strong">{plannerCopy.stepOfFive[2][locale]}</p>
      <h2 className="mb-2 font-heading text-3xl text-charcoal sm:text-4xl">{plannerCopy.step3.title[locale]}</h2>
      <p className="mb-10 text-sm text-muted">{plannerCopy.step3.sub[locale]}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {styleOptions.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.id)}
              className={`group border p-6 text-start transition-all duration-300 ${
                isSelected ? "border-gold-strong bg-gold-soft" : "border-border bg-white hover:border-gold/50"
              }`}
            >
              <p
                className={`mb-2 font-heading text-xl transition-colors ${
                  isSelected ? "text-gold-strong" : "text-charcoal group-hover:text-gold-strong"
                }`}
              >
                {opt.label[locale]}
              </p>
              <p className="text-xs leading-relaxed text-muted">{opt.description[locale]}</p>
              {isSelected ? (
                <span className="mt-4 inline-block text-[10px] uppercase tracking-widest text-gold-strong">
                  ✓ {plannerCopy.selected[locale]}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
