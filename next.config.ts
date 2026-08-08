import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The dev-mode image optimizer intermittently hangs on Windows generating
    // new size variants; serve originals in dev, optimize in production only.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;

