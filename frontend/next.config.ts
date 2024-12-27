import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['cdn.sanity.io','via.placeholder.com'] // Allow images from the Sanity CDN
  },
};
export default nextConfig;
