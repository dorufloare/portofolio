"use client"

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Subtitle from "@/components/shared/Subtitle";
import Projects from "@/components/shared/Projects";
import { Header } from "@/components/ui/hero-parallax";
import { Timeline } from "@/components/ui/timeline";
import Achievements from "@/components/shared/Timeline";
import Contacts from "@/components/shared/Contact";
import { TranslationProvider, useTranslation } from '@/app/TranslationContext';
import Image from "next/image";


const Home = ({ params }) => {
  const locale = params?.locale?.[0] || 'en';

  return (
    <TranslationProvider locale={locale}>
      <HomeContent locale={locale} />
    </TranslationProvider>
  );
};



const HomeContent = ({locale}) => {
  const messages = useTranslation();

  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center min-h-screen">
     
     <div className="absolute top-4 right-4 flex space-x-2">
        <a href="/en" className={`flex justify-center items-center` }>
          <Image
            src="/en.svg"
            alt="English"
            width={56}
            height={56}
            className="rounded-md object-contain"
          />
        </a>
        <a href="/ro" className={`flex justify-center items-center`}>
          <Image
            src="/ro.svg"
            alt="Romanian"
            width={56}
            height={56}
            className="rounded-md object-contain"
          />
        </a>
      </div>

      <MacbookScroll src={messages['laptop-img']} />
      <div className="mt-[300px] md:mt-[1000px]">
        <Header />
      </div>
      <Projects />
      <Achievements />
      <Contacts />
    </div>
  );
};

export default Home;