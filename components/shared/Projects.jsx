"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

const Projects = () => {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: "Verstappen AI",
    link: "https://github.com/dorufloare/verstappen-ai",
    thumbnail:
      "/f1.png",
  },
  {
    title: "Maide",
    link: "https://maide.so",
    thumbnail:
      "/maide.png",
  },
  {
    title: "Imaginify",
    link: "https://photo-edit-ai-six.vercel.app/",
    thumbnail:
      "/imaginify.png",
  },
  
  
  {
    title: "Flappy Bird AI",
    link: "https://github.com/dorufloare/flappy-bird-ai",
    thumbnail:
      "/bird.jpg",
  },
  {
    title: "Best Price (in development)",
    link: "https://best-price-inky.vercel.app/",
    thumbnail:
      "/best-price.png",
  },
  
  {
    title: "Poker bot",
    link: "https://github.com/dorufloare/poker",
    thumbnail:
      "/poker.png",
  },

  {
    title: "Baselinker SMS Integration",
    link: "https://github.com/dorufloare/baselinker-sms-integration",
    thumbnail:
      "/baselinker.png",
  },
  {
    title: "QT Chess bot",
    link: "https://github.com/dorufloare/chess",
    thumbnail:
      "/chess.png",
  },
  {
    title: "Ascii art generator",
    link: "https://github.com/dorufloare/image-to-ascii",
    thumbnail:
      "/ascii.png",
  },
  
];

export default Projects;