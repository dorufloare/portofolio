"use client";
import React from 'react';
import { useTranslation } from '@/app/TranslationContext';
import { Timeline } from "@/components/ui/timeline";

const Achievements = () => {
  const messages = useTranslation();

  const data = [
    {
      title: "University",
      date: "UBB - 2024–2027",
      content: (
        <div className="md:ml-[20%]">  
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">4.0 GPA</span> in the first 2 semesters
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-silver">2nd place</span> – ECN Contest
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-bronze">3rd place</span> – Bitdefender National Programming Contest
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            4th place – RCPC (Romanian ICPC)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Member of the Scientific Committee – Grigore Moisil National Contest
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Member of the Scientific Committee – National Olympiad in Informatics
          </p>
        </div>
      ),
    },
    {
      title: 'Highschool',
      date: 'CNLR - 2020-2024',
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">{messages['gold-medal']}</span> {messages['info-cup']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">4 x {messages['first-place']}</span> {messages['regional-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">2 x {messages['gold-medal']}</span> {messages['grigore-moisil']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            2 x {messages['international-team-qualification']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-silver">{messages['silver-medal']}</span> {messages['rmi']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            4 x <span className="text-silver">{messages['silver-medal']}</span> {messages['national-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-bronze">{messages['third-place']}</span> {messages['reply-code']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            {messages['reached']} <span className="text-gold">{messages['master']}</span> {messages['codeforces']}
          </p>
        </div>
      ),
    },
    {
      title: 'Prehighschool',
      date: '2012-2020',
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-bronze">{messages['bronze-medal']}</span> {messages['info-cup']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">3 x {messages['first-place']}</span> {messages['regional-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-silver">{messages['silver-medal']}</span> {messages['grigore-moisil']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-silver">2 x {messages['silver-medal']}</span> {messages['national-informatics']}
            &nbsp; {messages['and']} <span className="text-bronze">{messages['1x-bronze']} {messages['bronze-medal']}</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">3 x {messages['first-place']}</span> {messages['regional-math']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-bronze">{messages['bronze-medal']}</span> {messages['national-math']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            <span className="text-gold">2 x {messages['chess-champion']}</span> {messages['regional-chess']}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="text-left  mt-24 md:mt-72">
      <h2 className="text-xl md:text-4xl mb-0 text-white dark:text-white max-w-4xl font-bold ml-8 md:ml-24">
        Achievements & Milestones
      </h2>
      <Timeline data={data} />
    </div>
  );
};

export default Achievements;
