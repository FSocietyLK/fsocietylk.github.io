/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add basePath for GitHub Pages
  basePath:
    process.env.NODE_ENV === "production" ? "/fsocietylk.github.io" : "",
};

module.exports = nextConfig;
