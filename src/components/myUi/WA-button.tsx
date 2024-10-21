import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import Link from "next/link";

const WAbutton = () => {
  return (
    <Link
      href={
        "https://wa.me/923484260244?text=" +
        encodeURIComponent(
          "hello!\n I'd like to inquire you about your services."
        )
      }
      className="fixed right-5 bottom-8 "
    >
      <RiWhatsappLine className="size-12 animate-bounce" />
    </Link>
  );
};

export default WAbutton;
