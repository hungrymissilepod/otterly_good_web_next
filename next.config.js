const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = withVideos(nextConfig);