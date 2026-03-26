import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "book.sondrdesigns.com" }],
        destination: "/book/:path*",
      },
    ];
  },
};

export default nextConfig;
