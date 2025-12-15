/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.educative.io',
        port: '',
        pathname: '/**', // allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
