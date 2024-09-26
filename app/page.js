import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Subtitle from "@/components/shared/Subtitle";
import Projects from "@/components/shared/Projects";
import { Header } from "@/components/ui/hero-parallax";
import { Timeline } from "@/components/ui/timeline";
import Achievements from "@/components/shared/Timeline";
import Contacts from "@/components/shared/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center min-h-screen">
     
      <MacbookScroll src='/laptop.png'/ >
      <div className="mt-[300px] md:mt-[1000px]">
        <Header/>
        </div>
      <Projects/>
      <Achievements/>
      <Contacts/>
    </div>
  );
};

export default Home;
``