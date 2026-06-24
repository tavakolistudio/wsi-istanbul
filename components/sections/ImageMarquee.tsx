import Image from "next/image";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";

export function ImageMarquee({ locale }: { locale: Locale }) {
  const images = pages.home.marquee.images;
  const track = [...images, ...images];

  return (
    <section className="marquee-pause-on-hover overflow-hidden py-4">
      <div className="marquee-track flex w-max gap-5 sm:gap-6">
        {track.map((image, index) => {
          const isDuplicate = index >= images.length;
          return (
            <div
              key={`${image.src}-${index}`}
              aria-hidden={isDuplicate || undefined}
              className="relative h-[260px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-[460px] lg:h-[500px] lg:rounded-[32px]"
            >
              <Image
                src={image.src}
                alt={isDuplicate ? "" : image.alt[locale]}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 350px, 200px"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
