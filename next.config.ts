import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yg7xmhez0r.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'oumts6nefv.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'ph-files.imgix.net',
      },
    ],
  },
};

export default nextConfig;
