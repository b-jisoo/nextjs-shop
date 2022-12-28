/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://ip-172-31-8-255.ap-northeast-2.compute.internal/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
