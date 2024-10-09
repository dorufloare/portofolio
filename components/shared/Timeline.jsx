"use client";
import React from 'react';
import { useTranslation } from '@/app/TranslationContext';
import { Timeline } from "@/components/ui/timeline";

const Achievements = () => {
  const messages = useTranslation();

  const data = [
    {
      title: messages['highschool-title'],
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">{messages['gold-medal']}</span> {messages['info-cup']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">4 x {messages['first-place']}</span> {messages['regional-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">2 x {messages['gold-medal']}</span> {messages['grigore-moisil']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            2 x {messages['international-team-qualification']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-silver">{messages['silver-medal']}</span> {messages['rmi']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            4 x <span className="text-silver">{messages['silver-medal']}</span> {messages['national-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-bronze">{messages['third-place']}</span> {messages['reply-code']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            {messages['reached']} <span className="text-gold">{messages['master']}</span> {messages['codeforces']}
          </p>
        </div>
      ),
    },
    {
      title: messages['primary-title'],
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-bronze">{messages['bronze-medal']}</span> {messages['info-cup']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">3 x {messages['first-place']}</span> {messages['regional-olympiad']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-silver">{messages['silver-medal']}</span> {messages['grigore-moisil']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-silver">2 x {messages['silver-medal']}</span> {messages['national-informatics']}
            &nbsp; {messages['and']} <span className="text-bronze">{messages['1x-bronze']} {messages['bronze-medal']}</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">3 x {messages['first-place']}</span> {messages['regional-math']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-bronze">{messages['bronze-medal']}</span> {messages['national-math']}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            <span className="text-gold">2 x {messages['chess-champion']}</span> {messages['regional-chess']}
          </p>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};

export default Achievements;