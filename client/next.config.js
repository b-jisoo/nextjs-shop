/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.36.126.19:5000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
