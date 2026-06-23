import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder gallery/location/hero assets are generated SVGs (see
    // scripts/generate-placeholder-images.mjs). Safe here since they're
    // first-party build-time output, not user-uploaded content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
