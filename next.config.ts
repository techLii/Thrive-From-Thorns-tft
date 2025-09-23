import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    // Favor modern formats for smaller transfers
    formats: ["image/avif", "image/webp"],
    // Tailor responsive breakpoints for this site
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 160, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
