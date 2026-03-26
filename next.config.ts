import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/Aims-site-proposal" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Aims-site-proposal/" : "",
};

export default nextConfig;
