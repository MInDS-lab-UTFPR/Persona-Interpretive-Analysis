import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const githubPagesUrl =
  "https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio";

const nextConfig: NextConfig = githubPages
  ? {
      output: "export",
      assetPrefix: githubPagesUrl,
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
