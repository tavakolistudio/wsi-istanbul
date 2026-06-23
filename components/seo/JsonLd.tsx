/** Renders a JSON-LD script tag. `data` must come from trusted builders (lib/structured-data.ts), never user input. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
