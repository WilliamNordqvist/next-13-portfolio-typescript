/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    appDir: true,
  },
  images: {
    domains: ['images.ctfassets.net', "pics.freeicons.io"],
  },
};

module.exports = nextConfig;
