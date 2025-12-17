/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.educative.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
