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
        source: '/api/:path*',
        destination: 'https://bookreviewry-back-pmchm.run.goorm.site/:path*',
      },
    ]
  },
}

module.exports = nextConfig
