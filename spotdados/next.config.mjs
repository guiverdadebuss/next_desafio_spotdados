/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**',
      },
    ],
  },
}
export default nextConfig;
