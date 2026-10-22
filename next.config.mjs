/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/alfioperino-frontend-portfolio',
  assetPrefix: '/alfioperino-frontend-portfolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig