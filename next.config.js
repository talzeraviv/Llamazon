/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "fakestoreapi.com",
      "links.papareact.com",
      "lh3.googleusercontent.com",
    ],
  },
};
module.exports = nextConfig;
