import { notFound } from "next/navigation";
import { locales, type Locale } from "@/content/types";

/**
 * Next.js's generated route types require `params.locale` to be typed as
 * `string` (any segment value is possible at the type level), so every
 * page/layout narrows it through this helper rather than asserting `as Locale`
 * inline. Invalid locales 404 instead of silently rendering English.
 */
export function resolveLocale(locale: string): Locale {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  return locale as Locale;
}
