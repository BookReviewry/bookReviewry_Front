/** @type {import('next').NextConfig} */

const { env } = require('process')

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: env.BASE_URL + '/:path*',
      },
    ]
  },
}

module.exports = nextConfig
