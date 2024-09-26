import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Achievements = () => {
  const data = [
    {
      title: "Highschool (2020 - 2024)",
      content: (
        <div className="md:ml-[20%]">
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base  font-normal mb-4">
            <span className="text-gold"> GOLD MEDAL </span> at International Programming contest Info(1)Cup
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
            4 x <span  className="text-gold"> FIRST PLACE </span> at Regional Olympiad in Informatics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            2 x <span className="text-gold"> GOLD MEDAL </span> at National Programming contest "Grigore Moisil"
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            <span className="text-silver"> SILVER MEDAL </span> at International Programming contest RMI
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            4 x <span className="text-silver"> SILVER MEDAL </span> at National Olympiad in Informatics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            <span className="text-bronze"> THIRD PLACE </span> at International Teams Programming Reply Code Challenge
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            Reached <span className="text-gold"> MASTER </span> rank on  <a className='underline' href='https://codeforces.com/profile/dorulean'>Codeforces  </a>
          </p>
        </div>
      ),
    },
    {
      title: "Primary and Middleschool (2012 - 2020)",
      content: (
        <div className="md:ml-[20%]">
         <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            <span className="text-bronze"> BRONZE MEDAL </span> at International Programming contest Info(1)Cup
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            3 x <span className="text-gold"> FIRST PLACE </span> at Regional Olympiad in Informatics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            1 x <span className="text-silver"> SILVER MEDAL </span> at National Programming contest "Grigore Moisil"
          </p>

          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            2 x <span className="text-silver"> SILVER MEDAL </span> and 1 x <span className="text-bronze"> BRONZE MEDAL </span> at National Olympiad in Informatics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            3 x <span className="text-gold"> FIRST PLACE </span> at Regional Olympiad in Mathematics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            1 x <span className="text-bronze"> BRONZE MEDAL </span> at National Olympiad in Mathematics
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-base font-normal mb-4">
            2 x <span className="text-gold"> CHAMPION </span> at the biggest regional Chess tournament
          </p>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}

export default Achievements