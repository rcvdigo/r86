/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/r86',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
