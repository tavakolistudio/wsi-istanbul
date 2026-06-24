import type { Locale } from "@/content/types";
import { ui } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FixedBottomNav({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-ivory py-2.5 ps-4 pe-2.5 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.03]"
      >
        <HeartIcon className="h-4 w-4 text-gold-strong" />
        <span className="rounded-full bg-charcoal px-4 py-1.5 text-sm font-medium tracking-wide text-ivory">
          {ui.startChat[locale]}
        </span>
      </a>
    </div>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 20.8c-.3 0-.6-.1-.8-.3-2.4-2-4.6-3.9-6.1-5.8C3.3 12.7 2.5 10.9 2.5 9c0-3 2.3-5.4 5.2-5.4 1.7 0 3.2.8 4.3 2.2 1.1-1.4 2.6-2.2 4.3-2.2 2.9 0 5.2 2.4 5.2 5.4 0 1.9-.8 3.7-2.6 5.7-1.5 1.9-3.7 3.8-6.1 5.8-.2.2-.5.3-.8.3z" />
    </svg>
  );
}
