import React from "react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Hand, Search, Edit, LucideIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-6  py-2 flex-col w-full" id="services">
      <h3 className="text-4xl  p-2 ">Services</h3>

      <div className="flex flex-wrap gap-2 md:ml-3 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-primary shadow-lg h-60 mt-5 flex flex-col items-center  p-2 px-4 rounded-2xl border    md:w-[24%] "
          >
            <h1 className="text-2xl text-center flex flex-col items-center justify-center gap-1">
              <service.icon className="size-14" /> {service.title}
            </h1>
            <ScrollArea className=" p-1 overflow-y-auto h-[40%]">
              {service.discription}
            </ScrollArea>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"#" + service.title}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

interface services {
  title: string;
  discription: string;
  icon: LucideIcon;
}

const services: services[] = [
  {
    title: "PPC",
    discription: `Having trouble with your catalog? We’ll handle it.
`,
    icon: Hand,
  },
  {
    title: "Copywriting",
    discription: `Want your product to stand out? Our expert copywriting and Amazon SEO services will make it a top contender`,
    icon: Edit,
  },
  {
    title: "SEO",
    discription: `Watch your search rankings soar with our proven 4-phase Amazon SEO plan. Results in just 90 days.`,
    icon:  Search,
  },
];
