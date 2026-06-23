import { locales, type Locale } from "@/content/types";

/**
 * Swaps the locale segment of a pathname while preserving the rest of the
 * path, e.g. getLocalizedPath("/en/services", "fa") -> "/fa/services".
 * Used by the language switcher so navigating languages stays on the same page.
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/");

  if (locales.includes(segments[1] as Locale)) {
    segments[1] = targetLocale;
    return segments.join("/") || "/";
  }

  return `/${targetLocale}${pathname}`;
}
