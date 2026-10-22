/** @type {import('next').NextConfig} */
const basePath = '/alfioperino-frontend-portfolio'
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProduction ? basePath : '',
  assetPrefix: isProduction ? `${basePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig