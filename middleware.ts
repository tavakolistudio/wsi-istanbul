import { NextResponse, type NextRequest } from "next/server";

// Kept in sync with content/types.ts manually. Middleware runs on the Edge
// Runtime, which Vercel's bundler can refuse to deploy if it pulls in
// shared app modules (seen with "@/content/types" here) — so this file is
// deliberately self-contained with zero "@/..." imports.
const locales = ["en", "fa", "tr"] as const;
const defaultLocale = "en";

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
