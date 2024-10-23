import React from "react";
import Services from "@/components/myUi/Services";
import type { Metadata } from "next";

const siteUrl = "https://junaid-amazone.vercel.app";
const dev_siteUrl = "https://azhar-lone-portfolio.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || siteUrl),
  title: "services",
  description: "services of Amazone virtual assistant junaid jumshed",
  keywords: ["junaid", "amazone"],
  authors: [
    {
      name: "Azhar Lone",
      url: process.env.DEV_SITE_URL || dev_siteUrl,
    },
  ],
  publisher: "vercel",
};

const page = () => {
  return <Services />;
};

export default page;
