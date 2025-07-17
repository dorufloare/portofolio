"use client";
import React from "react";
import { useTranslation } from "@/app/TranslationContext";
import { Timeline } from "@/components/ui/timeline";

const Career = () => {
  const messages = useTranslation();

  const data = [
    {
      title: "Bitmovin",
      location: "Vienna, Austria",
      position: "Software Engineer Intern",
      date: "Jul–Sept 2025",
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Currently working on an AI model specialized in anomaly detection for various video streaming analytics
          </p>
        </div>
      ),
    },
    {
      title: "Mercor Intelligence",
      position: "AI Engineer",
      location: "San Francisco, California - Remote",
      date: "Nov 2024–Feb 2025",
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Trained a large language model for a top 5 AI lab
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Created various extremely difficult competitive programming problems, for various Data structures and Algorithms
          </p>
        </div>
      ),
    },
    {
      title: "Freelance",
      date: "Jul 2023–May 2025",
      position: "WebDev, Python Automation",
      content: (
        <div className="md:ml-[20%]">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Created, maintained and customized websites for clients
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Implemented python automation scripts for various tasks, as sending messages for order confirmations
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Made a system for product updates integration between a Google Sheet and a Wordpress Website
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Ran succesful Google Ads campaigns
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="">
          <h2 className="text-xl ml-8 md:text-4xl mt-0 mb-0 text-white dark:text-white max-w-4xl font-bold md:ml-24">
            My Career Journey
          </h2>
          <Timeline data={data} />
        </div>
  );
};

export default Career;
