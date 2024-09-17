import React from "react";
import Image from "next/image";
import Container from "@/components/myUi/Container";

// pages
import FAQs from "@/components/myUi/FAQs";
import Services from "@/components/myUi/Services";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <FAQs />
      <Services />
    </Container>
  );
};

export default Home;

const heroData = {
  text: {
    h1: "The Amazon agency that gets your products seen and sold",
    p: `Have great products, but sales are sluggish? `,
  },
  imgSrc: "https://media.licdn.com/dms/image/v2/D4E22AQHRYo7DV00dBQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1723216761071?e=1729728000&v=beta&t=YBNXv3Blax8PORNM569I_sf2ybGWwUqv_pSPeaYyDT8",
};
const Hero: React.FC = () => {
  return (
    <section>
      <div className=" flex flex-col md:flex-row items-center justify-center mx-auto w-[90%] p-2 mt-2">
        {/* Text section */}
        <section>
          <h1 className="text-xl lg:text-3xl">{heroData.text.h1}</h1>
          <p className="p-2 ">{heroData.text.p}</p>
        </section>
        <Image
          src={heroData.imgSrc}
          alt="Image"
          className="lg:w-1/2 h-60"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
};
