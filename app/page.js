import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Subtitle from "@/components/shared/Subtitle";
import Projects from "@/components/shared/Projects";

const Home = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center min-h-screen">
     
      <MacbookScroll src='/laptop.png'/ >
      <div className="md:mt-[1000px]">
      <Projects/>
      </div>
      
    </div>
  );
};

export default Home;
``