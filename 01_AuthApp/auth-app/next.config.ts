import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
async rewrites() {
    return [
      {
        source: '/api/:path*',      // frontend path
        destination: 'https://api.freeapi.app/api/v1/:path*', // backend URL
      },
    ]

  },

};

export default nextConfig;
