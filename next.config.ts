import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/github-pages-dashboard",
  assetPrefix: "/github-pages-dashboard/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
