import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://i.ibb.co.com/3mPw55DZ/logo.png')],
  },
};

module.exports = nextConfig;
