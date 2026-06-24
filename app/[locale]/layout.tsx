import type { Metadata } from "next";
import type { ReactNode } from "react";
import { locales, isRtl } from "@/content/types";
import { siteUrl } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { getLocalBusinessJsonLd, getOrganizationJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FixedBottomNav } from "@/components/layout/FixedBottomNav";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} data-locale={locale} className={fontVariables}>
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={getOrganizationJsonLd(locale)} />
        <JsonLd data={getLocalBusinessJsonLd(locale)} />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <FixedBottomNav locale={locale} />
      </body>
    </html>
  );
}
