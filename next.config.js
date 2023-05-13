/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_ANALITICS_TAG: process.env.GOOGLE_ANALITICS_TAG
  }
}

module.exports = nextConfig
