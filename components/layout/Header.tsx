"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { primaryNav } from "@/content/navigation";
import { brand, ui } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <Link href={`/${locale}`} className="flex shrink-0 flex-col items-start leading-none">
          <span className="font-heading text-xl tracking-tight text-charcoal sm:text-2xl">{brand.name}</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px]">
            by {brand.parentBrand}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => {
            const href = `/${locale}${item.path === "/" ? "" : item.path}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.path}
                href={href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-strong ${
                  isActive ? "text-gold-strong" : "text-charcoal"
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} className="text-charcoal" />
          <Button href={getWhatsAppLink()} external variant="primary" className="px-5 py-2 text-xs">
            {ui.startChat[locale]}
          </Button>
        </div>

        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
