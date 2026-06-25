import type { Locale } from "@/content/types";
import { plannerCopy } from "@/content/planner";

export interface BudgetSelection {
  id: string;
  label: string;
  priceRange: [number, number];
  selected: boolean;
}

function calcTotal(items: BudgetSelection[]): [number, number] {
  const selected = items.filter((i) => i.selected);
  if (!selected.length) return [0, 0];
  const low = selected.reduce((sum, i) => sum + i.priceRange[0], 0);
  const high = selected.reduce((sum, i) => sum + i.priceRange[1], 0);
  return [low, high];
}

export function BudgetStep({
  locale,
  items,
  onChange,
}: {
  locale: Locale;
  items: BudgetSelection[];
  onChange: (items: BudgetSelection[], total: [number, number]) => void;
}) {
  const toggle = (id: string) => {
    const updated = items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item));
    onChange(updated, calcTotal(updated));
  };

  const total = calcTotal(items);
  const hasSelection = total[0] > 0;

  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-strong">{plannerCopy.stepOfFive[4][locale]}</p>
      <h2 className="mb-2 font-heading text-3xl text-charcoal sm:text-4xl">{plannerCopy.step5.title[locale]}</h2>
      <p className="mb-10 text-sm text-muted">{plannerCopy.step5.sub[locale]}</p>

      <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className={`flex items-center justify-between border p-5 text-start transition-all duration-300 ${
              item.selected ? "border-gold-strong bg-gold-soft" : "border-border bg-white hover:border-gold/50"
            }`}
          >
            <div>
              <p
                className={`mb-1 text-sm font-medium transition-colors ${
                  item.selected ? "text-gold-strong" : "text-charcoal"
                }`}
              >
                {item.label}
              </p>
              <p className="text-xs text-muted">
                ${item.priceRange[0]}–${item.priceRange[1]}
              </p>
            </div>
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                item.selected ? "border-gold-strong bg-gold-strong" : "border-border"
              }`}
            >
              {item.selected ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#F8F3EA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      <div className="border border-gold/30 bg-gold-soft p-8">
        {hasSelection ? (
          <>
            <p className="mb-2 text-xs uppercase tracking-widest text-gold-strong">{plannerCopy.step5.range[locale]}</p>
            <p className="font-heading text-4xl text-charcoal">
              ${total[0].toLocaleString()}
              <span className="text-2xl text-muted"> – </span>${total[1].toLocaleString()}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted">{plannerCopy.step5.note[locale]}</p>
          </>
        ) : (
          <p className="text-sm text-muted">{plannerCopy.step5.empty[locale]}</p>
        )}
      </div>
    </div>
  );
}
