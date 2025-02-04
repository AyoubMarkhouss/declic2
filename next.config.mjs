/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,

  i18n: {
    locales: ["en", "fr"], // Add your supported locales here
    defaultLocale: "en",
    localeDetection: true, // Set the default locale
  },
};

export default nextConfig;
