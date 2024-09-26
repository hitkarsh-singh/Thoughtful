/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.usegalileo.ai'], // Add the external domain here
  },
};

export default nextConfig;
