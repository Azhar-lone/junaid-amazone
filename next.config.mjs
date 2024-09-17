/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.licdn.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.licdn.com',
            },
          ],
      }
};

export default nextConfig;
