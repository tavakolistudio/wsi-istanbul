import type { Locale } from "@/content/types";
import { plannerCopy, projectTypeOptions, type ProjectTypeId } from "@/content/planner";

export function ProjectTypePicker({
  locale,
  selected,
  onSelect,
}: {
  locale: Locale;
  selected: ProjectTypeId | null;
  onSelect: (id: ProjectTypeId) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-strong">{plannerCopy.stepOfFive[0][locale]}</p>
      <h2 className="mb-2 font-heading text-3xl text-charcoal sm:text-4xl">{plannerCopy.step1.title[locale]}</h2>
      <p className="mb-10 text-sm text-muted">{plannerCopy.step1.sub[locale]}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projectTypeOptions.map((opt) => {
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
              <span className="mb-3 block text-2xl">{opt.icon}</span>
              <p
                className={`mb-1 font-heading text-lg transition-colors duration-300 ${
                  isSelected ? "text-gold-strong" : "text-charcoal group-hover:text-gold-strong"
                }`}
              >
                {opt.label[locale]}
              </p>
              <p className="text-xs leading-relaxed text-muted">{opt.description[locale]}</p>
              {isSelected ? (
                <span className="mt-3 inline-block text-[10px] uppercase tracking-widest text-gold-strong">
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
