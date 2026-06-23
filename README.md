# Wedding Stories Istanbul

Premium wedding photography & film marketing site, by Tavakoli Studio. Next.js 15 (App Router), TypeScript, Tailwind CSS v4. Trilingual: English (default), Persian (RTL), Turkish.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en`. Try `/fa` and `/tr` for the other languages.

```bash
npm run build   # production build, also type-checks + lints
npm run lint
```

## How the site is organized

```
content/      All editable copy + structured data (the main place to edit text)
lib/          i18n, metadata/SEO, WhatsApp link, and JSON-LD helpers
components/   ui/ (generic), layout/, sections/ (home), and one folder per page area
app/[locale]/ Routes — every page lives under /en, /fa, or /tr
public/images/ Placeholder photography (see "Replacing images" below)
scripts/      generate-placeholder-images.mjs — regenerates the placeholder SVGs
```

Routing is custom (no i18n library): `middleware.ts` redirects unprefixed paths to `/en`, and `app/[locale]/layout.tsx` validates the locale, sets `<html lang dir>`, and renders Persian as RTL automatically. Components use Tailwind's logical-property utilities (`ps-`, `pe-`, `text-start`, `start-`/`end-`, `rtl:`) instead of `left`/`right`, so RTL layout flips for free — no per-component RTL branching.

## Where to edit text

Everything is in `content/*.ts`, typed so TypeScript flags a missing translation. Each translatable field is an object with `en`, `fa`, and `tr` keys, e.g. `{ en: "...", fa: "...", tr: "..." }`.

| File | What's in it |
|---|---|
| `content/site.ts` | Brand name, contact details, founder bios, every page's hero copy + SEO title/description, footer text, shared button/UI strings |
| `content/navigation.ts` | Header/footer nav labels and paths |
| `content/services.ts` | The 4 services (title, intro, feature bullets, WhatsApp message) |
| `content/gallery.ts` | The 10 gallery items (title, category, image, alt text, location) |
| `content/locations.ts` | The 8 Istanbul location cards |
| `content/testimonials.ts` | Placeholder testimonials — replace with real client quotes any time |
| `content/blog.ts` | Empty for now — see "Adding a blog post" below |

Find the English line you want to change, edit the `en` value, and update `fa`/`tr` alongside it (or leave a native speaker to fill those in — TypeScript will compile fine either way as long as all three keys exist).

## Replacing images

Every image right now is a **generated placeholder SVG** — a brand-colored gradient with a subtle Istanbul skyline motif and a small "Replace: ..." caption naming the real file it stands in for. They're real files (not broken links), produced by `scripts/generate-placeholder-images.mjs`, so the site looks finished today and swaps cleanly later.

**To replace one:** drop your real photo into the matching folder under `public/images/` using the filename shown in the placeholder's caption (e.g. `gallery-bosphorus-wedding-1.jpg`), then update that one path string in the relevant `content/*.ts` file (e.g. change `"/images/gallery/gallery-bosphorus-wedding-1.svg"` to `"/images/gallery/gallery-bosphorus-wedding-1.jpg"`). That's it — no component changes needed, `next/image` handles the rest (optimization, lazy-loading, responsive sizes).

Folders: `public/images/hero/` (3 slideshow images), `public/images/gallery/` (10), `public/images/locations/` (8), `public/images/about/` (2 founder portraits). The brand logo is `public/logo.png` and the favicon mark is `app/icon.png` — both already real assets, not placeholders.

If you add a brand-new gallery/location entry before you have a real photo for it, run `node scripts/generate-placeholder-images.mjs` after adding a matching entry to the `IMAGES` array at the top of that script, and it'll generate a new on-brand placeholder for you.

## Adding a new gallery item

Open `content/gallery.ts` and push a new object into the `galleryItems` array:

```ts
{
  id: "wedding-karakoy-2",
  title: { en: "...", fa: "...", tr: "..." },
  category: "wedding", // "wedding" | "pre-wedding" | "couple-session" | "istanbul-city"
  image: "/images/gallery/gallery-karakoy-wedding-2.jpg",
  alt: { en: "...", fa: "...", tr: "..." },
  location: { en: "Karaköy", fa: "کاراکوی", tr: "Karaköy" }, // optional
}
```

It'll automatically appear in the Gallery page's grid and filters. The Home page only shows the first 6 items in `galleryItems`, so reorder the array if you want a different featured set.

## Adding a blog post

`content/blog.ts` exports an empty, typed `blogPosts` array and `app/[locale]/blog/page.tsx` shows an on-brand "coming soon" state when it's empty. To publish the first post: push a `BlogPost` object (see the shape in `content/types.ts`) into that array — the listing page will render it automatically. A `[slug]` detail route wasn't built yet since there's no content to point it at; add `app/[locale]/blog/[slug]/page.tsx` once you have real posts.

## Updating SEO metadata

- **Per-page title/description**: `content/site.ts` → `pages.<page>.seo.title` / `.description` (per locale). Each page's `generateMetadata` reads from here via `lib/metadata.ts`.
- **Canonical/hreflang/Open Graph/Twitter tags**: generated automatically by `lib/metadata.ts` — no manual work needed when you change `siteUrl` or page copy.
- **Site URL**: set the `NEXT_PUBLIC_SITE_URL` environment variable (see `.env.example`) once you have a real domain — it currently falls back to `https://wsi-istanbul.vercel.app`. This feeds the sitemap, robots.txt, canonical URLs, and JSON-LD.
- **Structured data** (Organization + LocalBusiness/ProfessionalService): `lib/structured-data.ts`, sourced from `content/site.ts` (brand, contact, founders).
- **Sitemap/robots**: `app/sitemap.ts` and `app/robots.ts` — update the `routes` array in `sitemap.ts` if you add a new top-level page.

## Notes

- Contact form (`components/contact/ContactForm.tsx`) validates client-side and simulates a submission — there's a `// TODO` at the simulated network call marking exactly where to wire up a real endpoint (an API route, or a service like Formspree/Resend).
- The placeholder SVGs use `images.dangerouslyAllowSVG` in `next.config.ts`, scoped to these first-party generated files. Safe to leave in place even after swapping to real photos.
- Motion is intentionally minimal: CSS transitions plus one small `IntersectionObserver`-based fade-in (`components/ui/FadeIn.tsx`), respecting `prefers-reduced-motion`. No animation library.
