const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig

const withVideos = require('next-videos');
module.exports = withVideos();