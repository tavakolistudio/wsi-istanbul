"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isRtl, type Locale } from "@/content/types";
import {
  budgetItemOptions,
  plannerCopy,
  projectTypeOptions,
  styleOptions,
  type ProjectTypeId,
  type VisualStyleId,
} from "@/content/planner";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ProjectTypePicker } from "./ProjectTypePicker";
import { LocationPicker } from "./LocationPicker";
import { StylePicker } from "./StylePicker";
import { OutfitAdvisor } from "./OutfitAdvisor";
import { BudgetStep, type BudgetSelection } from "./BudgetStep";
import type { PlannerLocationChoice } from "./types";

interface PlannerState {
  step: number;
  projectType: ProjectTypeId | null;
  location: PlannerLocationChoice | null;
  style: VisualStyleId | null;
  budgetItems: BudgetSelection[];
  totalBudget: [number, number];
}

function buildInitialState(locale: Locale): PlannerState {
  return {
    step: 1,
    projectType: null,
    location: null,
    style: null,
    budgetItems: budgetItemOptions.map((item) => ({
      id: item.id,
      label: item.label[locale],
      priceRange: item.priceRange,
      selected: false,
    })),
    totalBudget: [0, 0],
  };
}

export function PlannerStepper({ locale }: { locale: Locale }) {
  const dir = isRtl(locale) ? "rtl" : "ltr";
  const [state, setState] = useState<PlannerState>(() => buildInitialState(locale));
  const [done, setDone] = useState(false);

  const update = (patch: Partial<PlannerState>) => setState((s) => ({ ...s, ...patch }));
  const next = () => update({ step: Math.min(state.step + 1, 5) });
  const back = () => update({ step: Math.max(state.step - 1, 1) });

  const stepMeta = [
    { num: 1, label: plannerCopy.stepLabels.project[locale] },
    { num: 2, label: plannerCopy.stepLabels.location[locale] },
    { num: 3, label: plannerCopy.stepLabels.style[locale] },
    { num: 4, label: plannerCopy.stepLabels.outfit[locale] },
    { num: 5, label: plannerCopy.stepLabels.budget[locale] },
  ];

  const projectLabel = projectTypeOptions.find((p) => p.id === state.projectType)?.label[locale];
  const styleLabel = styleOptions.find((s) => s.id === state.style)?.label[locale];

  const waLink = getWhatsAppLink(
    [
      "Hello, I'd like to book a session with ISO Wedding.",
      "",
      `Project: ${projectLabel ?? "-"}`,
      `Location: ${state.location?.title ?? "-"}`,
      `Style: ${styleLabel ?? "-"}`,
      `Budget Range: $${state.totalBudget[0]}–$${state.totalBudget[1]}`,
      "",
      "Looking forward to hearing from you!",
    ].join("\n")
  );

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[60vh] flex-col items-center justify-center gap-8 px-6 text-center"
      >
        <div className="mx-auto h-px w-16 bg-gold" />
        <h2 className="font-heading text-4xl text-charcoal md:text-5xl">{plannerCopy.done.title[locale]}</h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {state.location?.title} · {styleLabel} · ${state.totalBudget[0]}–${state.totalBudget[1]}
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button href={waLink} external variant="primary">
            {plannerCopy.done.bookWa[locale]}
          </Button>
          <Button href={`/${locale}/contact`} variant="outline">
            {plannerCopy.done.bookForm[locale]}
          </Button>
        </div>
        <button
          type="button"
          onClick={() => {
            setState(buildInitialState(locale));
            setDone(false);
          }}
          className="mt-2 text-xs uppercase tracking-widest text-muted transition-colors hover:text-charcoal"
        >
          {plannerCopy.done.restart[locale]}
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-14 flex items-center gap-2">
        {stepMeta.map((s, i) => (
          <div key={s.num} className="flex flex-1 items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium transition-colors duration-300 ${
                  state.step >= s.num ? "bg-gold-strong text-ivory" : "bg-ivory-soft text-muted"
                }`}
              >
                {state.step > s.num ? "✓" : s.num}
              </div>
              <span
                className={`hidden text-[10px] uppercase tracking-wider sm:block ${
                  state.step >= s.num ? "text-gold-strong" : "text-muted/60"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < stepMeta.length - 1 ? (
              <div
                className={`h-px flex-1 transition-colors duration-300 ${
                  state.step > s.num ? "bg-gold/50" : "bg-border"
                }`}
              />
            ) : null}
          </div>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          key={state.step}
          initial={{ opacity: 0, x: dir === "rtl" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {state.step === 1 ? (
            <ProjectTypePicker
              locale={locale}
              selected={state.projectType}
              onSelect={(v) => update({ projectType: v })}
            />
          ) : null}
          {state.step === 2 ? (
            <LocationPicker locale={locale} selected={state.location} onSelect={(v) => update({ location: v })} />
          ) : null}
          {state.step === 3 ? (
            <StylePicker locale={locale} selected={state.style} onSelect={(v) => update({ style: v })} />
          ) : null}
          {state.step === 4 ? <OutfitAdvisor locale={locale} location={state.location} style={state.style} /> : null}
          {state.step === 5 ? (
            <BudgetStep
              locale={locale}
              items={state.budgetItems}
              onChange={(items, total) => update({ budgetItems: items, totalBudget: total })}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
        <button
          type="button"
          onClick={back}
          disabled={state.step === 1}
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-30"
        >
          {plannerCopy.back[locale]}
        </button>

        {state.step < 5 ? (
          <Button
            type="button"
            onClick={next}
            disabled={
              (state.step === 1 && !state.projectType) ||
              (state.step === 2 && !state.location) ||
              (state.step === 3 && !state.style)
            }
            variant="primary"
          >
            {plannerCopy.next[locale]}
          </Button>
        ) : (
          <Button type="button" onClick={() => setDone(true)} variant="primary">
            {plannerCopy.seePlan[locale]}
          </Button>
        )}
      </div>
    </div>
  );
}
