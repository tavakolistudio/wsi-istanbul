import { contact } from "@/content/site";

/**
 * Builds a wa.me deep link with an optional prefilled message.
 * Reused by header/footer CTAs, service cards, and the contact page.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${contact.whatsappDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
