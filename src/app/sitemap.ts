import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://junaid-amazone.vercel.app";
  return [
    {
      url: process.env.SITE_URL || siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || siteUrl}/services`,
      lastModified: new Date(),
    },
  ];
}
