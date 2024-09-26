"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

const Contact = () => {
  const links = [
    {
      title: "Github",
      icon: (
        <Image
          src="/github.svg"
          width={20}
          height={20}
          alt="github" />
      ),
      href: "https://github.com/dorufloare",
    },
    {
      title: "Facebook",
      icon: (
        <Image
          src="/facebook.svg"
          width={20}
          height={20}
          alt="facebook" />
      ),
      href: "https://www.facebook.com/doru.floare.1/",
    },
    {
      title: "Instagram",
      icon: (
        <Image
          src="/instagram.svg"
          width={20}
          height={20}
          alt="instagram" />
      ),
      href: "https://www.instagram.com/dorulean/",
    },
    {
      title: "Mail",
      icon: (
        <Image
          src="/mail.svg"
          width={20}
          height={20}
          alt="mail" />
      ),
      href: "mailto:dorufloare2005@gmail.com",
    },
  ];
  return (
    (<>
       <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold text-center md:text-left mb-0 md:mt-[100px]">
          Contact me here:
        </h2>
      <div className="flex items-center justify-center h-[15rem] w-full">
        <FloatingDock
          // only for demo, remove for production
          mobileClassName="translate-y-20 "
          items={links} />
      </div>
    </>)
  );
}

export default Contact