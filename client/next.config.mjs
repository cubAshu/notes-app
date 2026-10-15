/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8086/api/:path*', // Targets your Node port
      },
    ];
  },
};
 
export default nextConfig;
