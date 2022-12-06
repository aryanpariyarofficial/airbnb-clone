/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapboxAccessToken: 'pk.eyJ1IjoiYXJ5YW5wYXJpeWFyIiwiYSI6ImNsYmJ5c3puNTA2enIzb255NzA2a2g5ZWsifQ.o0wF_H_LU9KTbHW1xeexjw',
  }
}

module.exports = nextConfig
