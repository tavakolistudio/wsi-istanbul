// Generates the brand-toned SVG placeholders referenced by content/*.ts.
// Re-run with `node scripts/generate-placeholder-images.mjs` any time you
// add a new gallery/location entry and need a matching placeholder.
//
// To go live with real photography: drop a same-named .jpg/.webp next to
// (or in place of) the .svg in /public/images/**, then update the `image`
// path string in the relevant content/*.ts file to point at it.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesRoot = path.join(__dirname, "..", "public", "images");

const CHARCOAL = "#211E1B";
const IVORY = "#FAF7F2";

/** [folder, filename, width, height, caption, gradientStops[], skylineOpacity] */
const IMAGES = [
  // Hero slideshow (wide, cinematic)
  ["hero", "hero-istanbul-wedding-1.svg", 2400, 1350, "hero-istanbul-wedding-1.jpg", ["#2A251F", "#C9A668"], 0.22],
  ["hero", "hero-istanbul-wedding-2.svg", 2400, 1350, "hero-istanbul-wedding-2.jpg", ["#9C7C44", "#EDE0C8"], 0.18],
  ["hero", "hero-istanbul-wedding-3.svg", 2400, 1350, "hero-istanbul-wedding-3.jpg", ["#6B6258", "#8C6E5C"], 0.2],

  // Gallery (10 — portrait ratio for the grid)
  ["gallery", "gallery-bosphorus-wedding-1.svg", 1200, 1500, "gallery-bosphorus-wedding-1.jpg", ["#C9A668", "#EDE0C8"], 0.16],
  ["gallery", "gallery-ortakoy-wedding-1.svg", 1200, 1500, "gallery-ortakoy-wedding-1.jpg", ["#9C7C44", "#E7E1D5"], 0.16],
  ["gallery", "gallery-sultanahmet-wedding-1.svg", 1200, 1500, "gallery-sultanahmet-wedding-1.jpg", ["#837762", "#EDE0C8"], 0.18],
  ["gallery", "gallery-galata-pre-wedding-1.svg", 1200, 1500, "gallery-galata-pre-wedding-1.jpg", ["#B8AD98", "#E7E1D5"], 0.16],
  ["gallery", "gallery-balat-pre-wedding-1.svg", 1200, 1500, "gallery-balat-pre-wedding-1.jpg", ["#D9956F", "#C9A668", "#8FA897"], 0.14],
  ["gallery", "gallery-pierreloti-pre-wedding-1.svg", 1200, 1500, "gallery-pierreloti-pre-wedding-1.jpg", ["#8C6E5C", "#C9A668"], 0.18],
  ["gallery", "gallery-galata-couple-1.svg", 1200, 1500, "gallery-galata-couple-1.jpg", ["#6B6258", "#E7E1D5"], 0.16],
  ["gallery", "gallery-bosphorus-couple-1.svg", 1200, 1500, "gallery-bosphorus-couple-1.jpg", ["#C9A668", "#B8AD98"], 0.16],
  ["gallery", "gallery-karakoy-city-1.svg", 1200, 1500, "gallery-karakoy-city-1.jpg", ["#5E6E73", "#D7DEE0"], 0.2],
  ["gallery", "gallery-rooftop-city-1.svg", 1200, 1500, "gallery-rooftop-city-1.jpg", ["#11151C", "#9C7C44"], 0.24],

  // Locations (8 — landscape cards)
  ["locations", "location-galata.svg", 1200, 900, "location-galata.jpg", ["#B8AD98", "#EDE0C8"], 0.18],
  ["locations", "location-karakoy.svg", 1200, 900, "location-karakoy.jpg", ["#5E6E73", "#D7DEE0"], 0.2],
  ["locations", "location-bosphorus.svg", 1200, 900, "location-bosphorus.jpg", ["#9C7C44", "#EDE0C8"], 0.18],
  ["locations", "location-ortakoy.svg", 1200, 900, "location-ortakoy.jpg", ["#5E6E73", "#EDE0C8"], 0.2],
  ["locations", "location-balat.svg", 1200, 900, "location-balat.jpg", ["#D9956F", "#C9A668", "#8FA897"], 0.14],
  ["locations", "location-sultanahmet.svg", 1200, 900, "location-sultanahmet.jpg", ["#837762", "#C9A668"], 0.2],
  ["locations", "location-pierre-loti.svg", 1200, 900, "location-pierre-loti.jpg", ["#8C6E5C", "#C9A668"], 0.18],
  ["locations", "location-rooftop-yacht.svg", 1200, 900, "location-rooftop-yacht.jpg", ["#11151C", "#9C7C44"], 0.24],

  // About portraits
  ["about", "about-mohammad-tavakoli.svg", 1000, 1250, "about-mohammad-tavakoli.jpg", ["#6B6258", "#E7E1D5"], 0.14],
  ["about", "about-mahtab-bahrian.svg", 1000, 1250, "about-mahtab-bahrian.jpg", ["#B8AD98", "#EDE0C8"], 0.14],
];

function skylineMotif(width, height, opacity) {
  const y = (f) => height * f;
  const x = (f) => width * f;
  return `<g opacity="${opacity}" fill="${CHARCOAL}">
    <rect x="0" y="${y(0.86)}" width="${width}" height="${y(0.14)}" />
    <rect x="${x(0.08)}" y="${y(0.64)}" width="${x(0.025)}" height="${y(0.22)}" />
    <circle cx="${x(0.17)}" cy="${y(0.62)}" r="${x(0.045)}" />
    <rect x="${x(0.14)}" y="${y(0.68)}" width="${x(0.075)}" height="${y(0.18)}" />
    <rect x="${x(0.4)}" y="${y(0.72)}" width="${x(0.012)}" height="${y(0.14)}" />
    <rect x="${x(0.56)}" y="${y(0.72)}" width="${x(0.012)}" height="${y(0.14)}" />
    <path d="M ${x(0.4)} ${y(0.76)} Q ${x(0.48)} ${y(0.7)} ${x(0.56)} ${y(0.76)}" stroke="${CHARCOAL}" stroke-width="${x(0.004)}" fill="none" />
    <rect x="${x(0.78)}" y="${y(0.66)}" width="${x(0.02)}" height="${y(0.2)}" />
    <circle cx="${x(0.84)}" cy="${y(0.64)}" r="${x(0.035)}" />
  </g>`;
}

function svgTemplate({ width, height, stops, caption, skylineOpacity }) {
  const stopEls = stops
    .map((color, i) => `<stop offset="${(i / (stops.length - 1)) * 100}%" stop-color="${color}" />`)
    .join("");
  const badgeWidth = Math.min(width * 0.62, caption.length * (width * 0.0125) + width * 0.05);
  const fontSize = Math.max(14, height * 0.024);

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder image">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">${stopEls}</linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  ${skylineMotif(width, height, skylineOpacity)}
  <rect x="${width * 0.045}" y="${height * 0.9}" width="${badgeWidth}" height="${height * 0.05}" rx="${height * 0.025}" fill="${CHARCOAL}" opacity="0.6" />
  <text x="${width * 0.045 + width * 0.018}" y="${height * 0.9 + height * 0.034}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="${fontSize}" fill="${IVORY}">Replace: ${caption}</text>
</svg>`;
}

for (const [folder, filename, width, height, caption, stops, skylineOpacity] of IMAGES) {
  const dir = path.join(imagesRoot, folder);
  fs.mkdirSync(dir, { recursive: true });
  const svg = svgTemplate({ width, height, stops, caption, skylineOpacity });
  fs.writeFileSync(path.join(dir, filename), svg, "utf8");
}

console.log(`Generated ${IMAGES.length} placeholder images under ${imagesRoot}`);
