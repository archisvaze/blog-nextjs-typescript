/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['onrender.com', 'strapi-sls4.onrender.com'],
  }
}

module.exports = nextConfig
