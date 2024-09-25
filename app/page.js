import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Subtitle from "@/components/shared/Subtitle";

const Home = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center min-h-screen">
     
      <MacbookScroll src='/laptop.png'/>
    </div>
  );
};

export default Home;
