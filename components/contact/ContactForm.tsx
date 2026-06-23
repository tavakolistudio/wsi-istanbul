"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  shootType: string;
  preferredDate: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  shootType: "",
  preferredDate: "",
  message: "",
};

const inputClasses =
  "w-full rounded-sm border border-border bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-strong";

export function ContactForm({ locale }: { locale: Locale }) {
  const content = pages.contact;
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = content.form.requiredError[locale];
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = content.form.emailError[locale];
    }
    if (!values.shootType) nextErrors.shootType = content.form.requiredError[locale];
    if (!values.message.trim()) nextErrors.message = content.form.requiredError[locale];
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    // TODO: wire up a real submission once a backend exists (e.g. POST to
    // an /api/contact route, or a service like Formspree/Resend). This
    // simulates the network call so the rest of the UX is fully built.
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-border bg-ivory-soft p-8 text-center">
        <h3 className="font-heading text-2xl text-charcoal">{content.success.heading[locale]}</h3>
        <p className="mt-3 text-muted">{content.success.body[locale]}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field label={content.form.name[locale]} error={errors.name}>
        <input type="text" value={values.name} onChange={(e) => update("name", e.target.value)} className={inputClasses} />
      </Field>

      <Field label={content.form.email[locale]} error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClasses}
        />
      </Field>

      <Field label={content.form.whatsapp[locale]}>
        <input
          type="tel"
          value={values.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          className={inputClasses}
        />
      </Field>

      <Field label={content.form.shootType[locale]} error={errors.shootType}>
        <select
          value={values.shootType}
          onChange={(e) => update("shootType", e.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            —
          </option>
          {content.form.shootTypeOptions.map((option) => (
            <option key={option.en} value={option.en}>
              {option[locale]}
            </option>
          ))}
        </select>
      </Field>

      <Field label={content.form.preferredDate[locale]}>
        <input
          type="date"
          value={values.preferredDate}
          onChange={(e) => update("preferredDate", e.target.value)}
          className={inputClasses}
        />
      </Field>

      <Field label={content.form.message[locale]} error={errors.message}>
        <textarea
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className={inputClasses}
        />
      </Field>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? content.form.sending[locale] : content.form.submit[locale]}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-charcoal">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
