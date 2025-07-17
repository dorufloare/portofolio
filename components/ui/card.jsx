"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Card({ title, description, imageUrl, githubUrl }) {
  return (
    <CardContainer className="inter-var m-0 p-0 py-4">
      <CardBody className="m-0 bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0e1117] dark:border-white/[0.2] border-black/[0.1] w-[44vw] sm:w-[22rem] md:w-[24rem] h-auto rounded-xl p-2 sm:p-4 border">
        <CardItem
          translateZ="50"
          className="text-sm sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-[10px] sm:text-sm max-w-sm mt-1 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-28 sm:h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={githubUrl}
            target="_blank"
            className="px-3 py-1.5 rounded-xl bg-black dark:bg-white dark:text-black text-white text-[10px] sm:text-xs font-bold"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
