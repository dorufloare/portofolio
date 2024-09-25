"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const Subtitle = () => {
  const words = [
    {
      text: "Software\u00A0",
    },
    {
      text: "developer",
    },
   
  ];
  return (
   
      <TypewriterEffectSmooth words={words} />
    
  );
}

export default Subtitle;