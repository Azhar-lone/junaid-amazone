import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/app/globals.css";

// components
import Nav from "@/components/myUi/Header";
import Footer from "@/components/myUi/Footer";

// context
import { ThemeProvider } from "@/context/theme-provider";

// const inter = Inter({ subsets: ["latin"] });
// const siteUrl = "https://#";
const dev_siteUrl = "https://#";
export const metadata: Metadata = {
  // metadataBase: new URL(process.env.SITE_URL || siteUrl),
  title: {
    default: "|",
    template: "%s | Junaid",
  },
  description: "website of Amazone virtual assistant junaid jumshed",
  keywords: ["junaid", "amazone"],
  authors: [
    {
      name: "Azhar Lone",
      url: process.env.DEV_SITE_URL || dev_siteUrl,
    },
  ],
  publisher: "vercel",
  // openGraph: {
  //   images: "/og-image.png",
  // },
  // twitter: {
  //   title: {
  //     default: "|",
  //     template: "%s | Junaid",
  //   },
  //   description: "website of Amazone virtual assistant junaid jumshed",
  //   card: "summary_large_image",
  //   creator: "Azhar Lone",
  //   site: process.env.SITE_URL || siteUrl,
  //   images: "/og-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
