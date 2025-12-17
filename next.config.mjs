/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    '.educative.run',
  ],

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
