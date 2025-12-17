import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0-adbar.vercel.app",
      },
    ],
  },
  turbopack: {
    // Silence workspace root inference warning by pinning root here
    root: __dirname,
  },
};

export default nextConfig;
