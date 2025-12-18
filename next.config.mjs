/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  allowedDevOrigins: [
  process.env.EDUCATIVE_LIVE_VM_URL?.replace(/^https?:\/\//, ''),
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
