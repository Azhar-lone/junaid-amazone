// import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  // DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { BarChart, PhoneCallIcon, ArrowDown } from "lucide-react";

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
          <PhoneCallIcon className="md:size-8 size-4 "/>
          <h1 className="md:text-xl font-bold">{Data.PoneNumber}</h1>
        </div>
      </div>
      <div className="md:flex justify-between  items-center hidden">
        <div className="flex gap-10 ">
          {Data.links.map((link, index) => (
            <div key={index} className="hover:cursor-pointer">
              {!link.subLinks ? (
                <h1 className="font-semibold hover:text-red-400 ">
                  {link.text}
                </h1>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger className="font-semibold hover:text-red-400 flex">
                    {link.text}
                    <ArrowDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex gap-4">
                    {link.subLinks.map((subLink, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="flex gap-5 flex-col"
                      >
                        {subLink.subLinkTitle}
                        <DropdownMenuSub>
                          {subLink.moreLinks &&
                            subLink.moreLinks.map((value, index) => (
                              <DropdownMenuSubContent key={index}>
                                <h1>{value.text}</h1>
                                <value.icon />
                              </DropdownMenuSubContent>
                            ))}
                        </DropdownMenuSub>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
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
  links: [
    {
      text: "Services",
      subLinks: [
        {
          subLinkTitle: "Seo",
          moreLinks: [
            {
              text: "Testing",
              icon: PhoneCallIcon,
            },
          ],
        },
        {
          subLinkTitle: "asfsafa",
        },
        {
          subLinkTitle: "asfsafasdg",
        },
        {
          subLinkTitle: "Seo",
          moreLinks: [],
        },
        {
          subLinkTitle: "asfsafa",
        },
        {
          subLinkTitle: "asfsafasdg",
        },
      ],
    },
    { text: "Testimonials" },
  ],
};
