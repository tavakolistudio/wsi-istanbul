import type { ReactNode } from "react";

/**
 * Root layout for the small set of unprefixed redirect pages (app/page.tsx
 * and friends) that send visitors to /en/... — see those files for why
 * middleware isn't used for this instead (a long-standing Next.js/Vercel
 * Edge Runtime bug: next/server's bundled ua-parser-js references
 * __dirname, which crashes middleware in production on Vercel).
 * The real app shell (fonts, header, footer) lives in app/[locale]/layout.tsx.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
