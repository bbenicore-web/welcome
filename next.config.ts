import type { NextConfig } from "next";

const basePath =
  process.env.GITHUB_PAGES === "true"
    ? process.env.NEXT_PUBLIC_BASE_PATH || "/welcome"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
