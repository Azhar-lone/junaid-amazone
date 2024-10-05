import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { BarChart, PhoneCallIcon } from "lucide-react";
// Types

const Header = () => {
  return (
    <nav className="flex  flex-col  justify-around   md:px-16 py-2 shadow-lg w-[100%]  bg-background border-b  ">
      <div className="flex justify-between items-center py-2">
        <div className="flex  items-center">
          <BarChart className="md:size-8 size-4" />
          <h1 className=" md:text-3xl  font-bold md:pr-2">{Data.Title}</h1>
          <ModeToggle />
        </div>
        <div className="flex gap-2 items-center w-[45%] md:w-fit ">
          <PhoneCallIcon className="md:size-8 size-4 " />
          <h1 className="md:text-xl font-bold">{Data.PoneNumber}</h1>
        </div>
      </div>
      <div className="md:flex justify-between  items-center hidden">
        <div className="flex gap-10 font-medium">
          {Data.links.map((link, index) => (
            <Link
              href={`#${link.text.toLowerCase()}`}
              key={index}
              className={" hover:text-red-600 hover:cursor-pointer"}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <Button className="p-6 mr-10">Get a Quote</Button>
      </div>
    </nav>
  );
};

export default Header;

const Data = {
  Title: "My Amazon Scale",
  PoneNumber: "+92 3484260244",
  links: [{ text: "Services" }, { text: "Testimonials" },{text:"Leadership"},{text:"SOPs"}],
};
