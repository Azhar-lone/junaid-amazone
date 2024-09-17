import React from "react";
import Link from "next/link";

// Icons
import { BarChart, LinkedinIcon, FacebookIcon } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-secondary  justify-center  flex flex-col gap-4 p-2 ">
      <div className="flex justify-around pt-10">
        <div className="flex flex-col">
          <div className="flex">
            <BarChart className="size-8" />
            <h1 className=" md:text-4xl font-bold pr-2">My Amazon Guy</h1>
          </div>

          <div className="flex gap-1 p-2">
            {IconLinks.map(({ Icon, href }, index) => (
              <Link href={href}>
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {ulLinks.map((link, index) => (
          <div className="p-5" key={index}>
            <h1 className="font-semibold text-xl">{link.ul}</h1>
            <ul className="flex flex-col gap-3">
              {link.links.map((li, index) => (
                <Link href={li.href} key={index}>
                  {li.text}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h1 className="text-muted">2024 copyrights @Azhar-lone</h1>
    </footer>
  );
};

export default Footer;

let IconLinks = [
  {
    href: "#",
    Icon: LinkedinIcon,
  },

  {
    href: "#",
    Icon: FacebookIcon,
  },
];

let ulLinks = [
  {
    ul: "Services",
    links: [
      {
        text: " Full Service Management",
        href: "#",
      },
      {
        text: "Search Engine Optimization (SEO)",
        href: "#",
      },

      {
        text: "Advertising Management (PPC)",
        href: "#",
      },
      {
        text: " Listing Optimization",
        href: "#",
      },
      {
        text: " Design",
        href: "#",
      },
      {
        text: " CTR Main Image Hack",
        href: "#",
      },
      {
        text: "Account Suspension",
        href: "#",
      },
    ],
  },

  {
    ul: "Company",
    links: [
      {
        text: "Testimonials",
        href: "#",
      },

      {
        text: "Leadership",
        href: "#",
      },
      {
        text: "Jobs",
        href: "#",
      },
      {
        text: "History",
        href: "#",
      },
      {
        text: "Press",
        href: "#",
      },
      {
        text: "Articles",
        href: "#",
      },
    ],
  },
];
