/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@stripe/firestore-stripe-payments"],
  images: {
    domains: ["image.tmdb.org", "assets.nflxext.com"],
  },
};

module.exports = nextConfig;
