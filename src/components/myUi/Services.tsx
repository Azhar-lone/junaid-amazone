import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-6  py-2 flex-col w-full" id="services">
      <h3 className="text-4xl  p-2 ">Services</h3>

      <div className="flex flex-wrap gap-2 md:ml-3 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-primary shadow-lg h-60 mt-5  p-2 px-4 rounded-2xl border sm:w-[48%]  md:w-[32%] 2xl:w-[24%] "
          >
            <h1 className="text-2xl text-center">{service.title}</h1>
            <ScrollArea className=" p-1 overflow-y-auto h-[80%]">
              {service.discription}
            </ScrollArea>
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
}

let services: services[] = [
  {
    title: "E-commerce Site Development",
    discription: `I specialize in developing robust and scalable e-commerce platforms tailored to your business needs.
     With expertise in both the MERN and T3 stacks, I can create feature-rich online stores that include secure payment gateways,
      inventory management, user-friendly interfaces, and seamless shopping experiences.`,
  },
  {
    title: "Landing Page Development",
    discription: `I design and develop high-converting landing pages that capture leads and drive sales.
     Whether you need a simple, elegant page or a more complex, dynamic one, I ensure that your landing page
      is responsive, fast, and optimized for SEO.

`,
  },
  {
    title: "Blog Website Development",
    discription: `I build customizable and easy-to-manage blog websites that allow you to share your thoughts, news,
     and updates with your audience. Leveraging the MERN and T3 stacks, I create blog platforms that are both visually appealing and functionally robust,
     with features like user comments, social sharing, and SEO optimization.`,
  },
  {
    title: "social Media site Development",
    discription: `I can develop social media platforms that connect users, foster communities, 
    and facilitate engagement. From basic social networking features to advanced functionalities 
    like real-time messaging and content sharing, I ensure your social media site is scalable,
     secure, and user-friendly.`,
  },
  {
    title: "Api development and/or integration",
    discription: `I offer API development and integration services to help your applications
     communicate seamlessly with each other. Whether you need custom APIs or integration with 
     third-party services, I ensure that your APIs are secure, efficient, and well-documented.`,
  },
  {
    title: "Custom Web Application Development",
    discription: `I provide end-to-end development of custom web applications that cater to your specific business requirements.
     Whether it's a CRM, project management tool, or any other custom solution, I leverage the MERN and T3 stacks to deliver scalable,
     secure, and high-performance web applications.`,
  },

  {
    title: "Full-Stack Application Development",
    discription: `With expertise in both front-end and back-end development, 
    I can build full-stack applications that are tailored to your needs. From designing intuitive user 
    interfaces to implementing complex server-side logic,
     I ensure a seamless and cohesive application experience.`,
  },
];
