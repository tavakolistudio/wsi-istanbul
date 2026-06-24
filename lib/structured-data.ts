import { brand, contact, founders, siteUrl } from "@/content/site";
import type { Locale } from "@/content/types";

/** Organization schema — sitewide brand identity. */
export function getOrganizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    description: brand.tagline[locale],
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}${brand.logo}`,
    email: contact.email,
    sameAs: [contact.instagramUrl],
    parentOrganization: {
      "@type": "Organization",
      name: brand.parentBrand,
    },
  };
}

/** LocalBusiness/ProfessionalService schema for local SEO in Istanbul. */
export function getLocalBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    image: `${siteUrl}${brand.logo}`,
    url: `${siteUrl}/${locale}`,
    telephone: contact.whatsappDisplay,
    email: contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Istanbul",
    },
    sameAs: [contact.instagramUrl],
    founder: founders.map((founder) => ({
      "@type": "Person",
      name: founder.name[locale],
      jobTitle: founder.role.en,
    })),
  };
}
