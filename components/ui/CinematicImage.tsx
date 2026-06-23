import Image from "next/image";

interface CinematicImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Standard image treatment used site-wide. `src` currently points at the
 * generated placeholder SVGs under /public/images (see
 * scripts/generate-placeholder-images.mjs) — once real photography is
 * ready, just point `image` fields in content/*.ts at the new files.
 * Parent should set `position: relative` + a height (or aspect-ratio) and
 * the `group` class if a hover zoom is desired.
 */
export function CinematicImage({ src, alt, className = "", sizes, priority }: CinematicImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
      priority={priority}
      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${className}`}
    />
  );
}
