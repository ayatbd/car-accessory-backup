import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["daisyui"],
  },
};

module.exports = nextConfig;

