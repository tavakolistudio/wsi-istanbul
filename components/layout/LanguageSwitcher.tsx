"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { getLocalizedPath } from "@/lib/i18n/getLocalizedPath";

const labels: Record<Locale, string> = { en: "EN", fa: "FA", tr: "TR" };

/** Display order only — the canonical `locales` array (used for routing/SEO) is untouched. */
const displayOrder: Locale[] = ["tr", "fa", "en"];

export function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`flex items-center gap-1 text-sm ${className}`}>
      {displayOrder.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? (
            <span className="mx-1 opacity-40" aria-hidden="true">
              /
            </span>
          ) : null}
          <Link
            href={getLocalizedPath(pathname, l)}
            aria-current={l === locale ? "true" : undefined}
            className={`tracking-wide transition-colors hover:text-gold-strong ${l === locale ? "text-gold-strong" : ""}`}
          >
            {labels[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
