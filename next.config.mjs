/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-bigboy.duthanhduoc.com',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
}

export default nextConfig
