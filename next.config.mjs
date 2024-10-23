/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  env: {
    SITE_URL: "https://junaid-amazone.vercel.app",
    DEV_SITE_URL: "https://azhar-lone-portfolio.vercel.app",
  },
};

export default nextConfig;
