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
};

export default nextConfig;
