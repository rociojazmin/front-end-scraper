/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.142.219.234',
        port: '',
        pathname: '/imagen/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        port: '',
        pathname: '/image-vector/**',
      },
    ],
  },
};

export default nextConfig;
