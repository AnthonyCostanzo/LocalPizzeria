/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'image.similarpng.com',
      'media.istockphoto.com',
    ],
  },
};

module.exports = nextConfig;
