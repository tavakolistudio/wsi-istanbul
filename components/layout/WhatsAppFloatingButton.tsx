import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton({ locale }: { locale: Locale }) {
  return (
    <a
      href={getWhatsAppLink(pages.contact.defaultWhatsappMessage[locale])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gold-strong"
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.43-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.43 9.9-9.9 0-2.64-1.03-5.13-2.9-7-1.86-1.87-4.35-2.9-7-2.9zm0 18.07a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.34c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.18-8.24 8.18zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.18-.54.06-1.45-.72-2.4-1.29-3.36-2.92-.25-.44.25-.41.72-1.36.08-.17.04-.31-.03-.43-.08-.12-.6-1.45-.82-1.99-.21-.52-.43-.45-.6-.46h-.5c-.17 0-.45.06-.69.31-.23.25-.9.88-.9 2.14 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.74 4.36 3.74 2.16.84 2.6.67 3.07.63.47-.04 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.21-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}
