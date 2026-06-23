interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "start",
  className = "",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === "center" ? "mx-auto text-center" : "text-start";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-strong">{eyebrow}</p>
      ) : null}
      <Heading className="text-balance font-heading text-3xl leading-tight text-charcoal sm:text-4xl md:text-[2.75rem]">
        {heading}
      </Heading>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
