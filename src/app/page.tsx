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
    h1: "Heading",
    p: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repellendus atque, magni iste alias ab rem! Molestiae repellendus sunt pariatur quas sapiente quos maxime reprehenderit a! Quis, eligendi? Commodi, ratione?
    `,
  },
  imgSrc: "/next.svg",
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
