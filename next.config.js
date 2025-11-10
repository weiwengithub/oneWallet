const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const isProd = process.env.NODE_ENV === 'production';
const BASE = isProd ? '' : '';  // 例如 '/onewallet-website'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  basePath: BASE,
  assetPrefix: BASE ? BASE + '/' : undefined,
  allowedDevOrigins: ["*.preview.same-app.com"],
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  // 开发环境API代理配置
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'https://wallet-admin.deltax.online/api/:path*',
        },
      ];
    }
    return [];
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  }
};

module.exports = withNextIntl(nextConfig);
