import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/content/types";

/**
 * Every route lives under /{locale}. Unprefixed paths redirect to the
 * default locale (English) — deliberately deterministic, not
 * Accept-Language sniffed, per the brief.
 */
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
