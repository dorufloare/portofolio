"use client";

import React from "react";
import Card from "@/components/ui/card";

const products = [
  {
    title: "DFML - C++ mlp library",
    link: "https://github.com/dorufloare/dfml",
    thumbnail: "/dfml.jpg"
  },
  {
    title: "Poker MCCFR Engine",
    link: "https://github.com/dorufloare/mccfr-poker-engine",
    thumbnail: "/poker-cards.jpg",
  },
  {
    title: "Trading Simulator",
    link: "https://github.com/dorufloare/market-order-simulator",
    thumbnail: "/trading2.jpg",
  },
  {
    title: "Best Price",
    link: "https://best-price-inky.vercel.app/",
    thumbnail: "/best-price.png",
  },
  {
    title: "Poker bot",
    link: "https://github.com/dorufloare/poker",
    thumbnail: "/poker.png",
  },
  {
    title: "Maide",
    link: "https://maide.ro",
    thumbnail: "/maide.png",
  },
  {
    title: "Verstappen AI",
    link: "https://github.com/dorufloare/verstappen-ai",
    thumbnail: "/f1.png",
  },
    {
    title: "QT Chess bot",
    link: "https://github.com/dorufloare/chess",
    thumbnail: "/chess.png",
  },
  {
    title: "Woocomerce Spreadsheet integration",
    link: "https://github.com/dorufloare/spreadsheet-maide-integration",
    thumbnail: "/spreadsheet.png",
  },
  {
    title: "Baselinker SMS Integration",
    link: "https://github.com/dorufloare/baselinker-sms-integration",
    thumbnail: "/baselinker.png",
  },
  {
    title: "Imaginify",
    link: "https://photo-edit-ai-six.vercel.app/",
    thumbnail: "/imaginify.png",
  },
  {
    title: "Flappy Bird AI",
    link: "https://github.com/dorufloare/flappy-bird-ai",
    thumbnail: "/bird.jpg",
  },
  

  {
    title: "Ascii art generator",
    link: "https://github.com/dorufloare/image-to-ascii",
    thumbnail: "/ascii.png",
  },
];

const Projects = () => {
  return (
    <section className="w-full px-4 px-12 md:px-12 mt-24 md:mt-72 2xl:px-48 ">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-24">
        Some of My Projects
      </h1>
      <div className="grid grid-cols-1 px-[8%] sm:px-0 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-6 justify-items-center">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description=""
            imageUrl={product.thumbnail}
            githubUrl={product.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
