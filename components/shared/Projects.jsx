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
    title: "Cucstorrent - Bittorrent client",
    link: "https://github.com/dorufloare/cucstorrent",
    thumbnail: "/torrent.png"
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
  const [showOlderProjects, setShowOlderProjects] = React.useState(false);
  const visibleProjects = products.slice(0, 3);
  const olderProjects = products.slice(3);

  return (
    <section className="w-full px-4 px-12 md:px-12 mt-24 md:mt-72 2xl:px-48 ">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-24">
        Some of My Projects
      </h1>
      <div className="grid grid-cols-1 px-[8%] sm:px-0 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-6 justify-items-center">
        {visibleProjects.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description=""
            imageUrl={product.thumbnail}
            githubUrl={product.link}
          />
        ))}
        {showOlderProjects &&
          olderProjects.map((product, index) => (
            <Card
              key={index + visibleProjects.length}
              title={product.title}
              description=""
              imageUrl={product.thumbnail}
              githubUrl={product.link}
            />
          ))}
      </div>
      {olderProjects.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowOlderProjects((current) => !current)}
            className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {showOlderProjects ? "Show less" : "View older"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
