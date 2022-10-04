const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
  },
  swcMinify: false
}

module.exports = nextConfig
