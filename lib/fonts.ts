import { Inter, Playfair_Display, Vazirmatn } from "next/font/google";

/**
 * Editorial heading + body pairing for English/Turkish (Latin script).
 * Persian uses Vazirmatn for both roles instead of pairing two Latin faces.
 */
export const headingLatin = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-latin",
  display: "swap",
});

export const bodyLatin = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-latin",
  display: "swap",
});

export const fa = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fa",
  display: "swap",
});

export const fontVariables = `${headingLatin.variable} ${bodyLatin.variable} ${fa.variable}`;
