/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables Next.js image optimization (necessary for static sites)
  },
};

module.exports = nextConfig;