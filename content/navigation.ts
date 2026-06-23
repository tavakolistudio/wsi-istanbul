import type { NavItem } from "./types";

/** Primary header navigation. Footer reuses this list and appends `footerExtraLinks`. */
export const primaryNav: NavItem[] = [
  { label: { en: "Home", fa: "خانه", tr: "Ana Sayfa" }, path: "/" },
  { label: { en: "About", fa: "درباره ما", tr: "Hakkımızda" }, path: "/about" },
  { label: { en: "Services", fa: "خدمات", tr: "Hizmetler" }, path: "/services" },
  { label: { en: "Gallery", fa: "گالری", tr: "Galeri" }, path: "/gallery" },
  {
    label: { en: "Istanbul Locations", fa: "لوکیشن‌های استانبول", tr: "İstanbul Lokasyonları" },
    path: "/locations",
  },
  { label: { en: "Contact", fa: "تماس با ما", tr: "İletişim" }, path: "/contact" },
];

/** Shown only in the footer's quick-links column, alongside primaryNav. */
export const footerExtraLinks: NavItem[] = [
  { label: { en: "Journal", fa: "ژورنال", tr: "Blog" }, path: "/blog" },
];
