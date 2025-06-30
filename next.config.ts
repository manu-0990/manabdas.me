/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Needed for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: "/./out",

};

module.exports = nextConfig;
