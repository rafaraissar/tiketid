/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
<<<<<<< HEAD
  transpilePackages: ["ui"],
  reactStrictMode: true,
  unstable_runtimeJS: false,
  swcMinify: true,
};

module.exports = nextConfig;
=======

  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = nextConfig
>>>>>>> 716635c (update)
