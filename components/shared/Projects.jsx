"use client";

import React from "react";
import Card from "@/components/ui/card";

const products = [
  {
    title: "Maide",
    link: "https://maide.ro",
    thumbnail: "/maide.png",
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
    title: "Verstappen AI",
    link: "https://github.com/dorufloare/verstappen-ai",
    thumbnail: "/f1.png",
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
    title: "Baselinker SMS Integration",
    link: "https://github.com/dorufloare/baselinker-sms-integration",
    thumbnail: "/baselinker.png",
  },
  {
    title: "QT Chess bot",
    link: "https://github.com/dorufloare/chess",
    thumbnail: "/chess.png",
  },
  {
    title: "Ascii art generator",
    link: "https://github.com/dorufloare/image-to-ascii",
    thumbnail: "/ascii.png",
  },
];

const Projects = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-20 mt-24 md:mt-72">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-24">Some of My Projects</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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
