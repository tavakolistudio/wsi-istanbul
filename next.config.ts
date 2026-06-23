import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder gallery/location/hero assets are generated SVGs (see
    // scripts/generate-placeholder-images.mjs). Safe here since they're
    // first-party build-time output, not user-uploaded content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
  experimental: {
    // Required for middleware.ts's `runtime: "nodejs"` to actually take
    // effect — without this flag it builds fine but crashes at runtime.
    // Next.js 15.5.19 recognizes this flag at runtime (confirmed in the
    // build's "Experiments" log) but its bundled NextConfig type hasn't
    // caught up yet, hence the cast.
    nodeMiddleware: true,
  } as NextConfig["experimental"],
};

export default nextConfig;
