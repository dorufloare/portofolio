"use client"

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Subtitle from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects";
import { Header } from "@/components/ui/hero-parallax";
import { Timeline } from "@/components/ui/timeline";
import Achievements from "@/components/shared/Timeline";
import Contacts from "@/components/shared/Contact";
import { TranslationProvider, useTranslation } from '@/app/TranslationContext';
import Image from "next/image";
import Career from "@/components/shared/Career";

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
      <Subtitle />
      
      <Career />
      <Projects />
      
      <Achievements />
      <Contacts />
    </div>
  );
};

export default Home;