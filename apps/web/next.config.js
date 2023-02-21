/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["ui"],
  reactStrictMode: true,
  unstable_runtimeJS: false,
  swcMinify: true,
};

module.exports = nextConfig;
