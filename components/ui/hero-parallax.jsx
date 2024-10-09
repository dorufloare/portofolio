"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/TranslationContext";

export const HeroParallax = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assume mobile is < 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);
  const ref = React.useRef(null);
  
  // Adjust the scroll offset based on whether the user is on mobile or not
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start start", "end end"] : ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Different scroll animation values for mobile and desktop
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, 100] : [0, 300]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, -100] : [0, -300]),
    springConfig
  );

  // Reduce the scroll distance needed to trigger the animations on mobile
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, isMobile ? 0.1 : 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, isMobile ? 0.1 : 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, isMobile ? 0.1 : 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, isMobile ? 0.1 : 0.2], [-700, 500]),
    springConfig
  );

  return (
    <>
      <div
        ref={ref}
        className="h-[200vh] md:h-[250vh] py-40 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] p-0"
      >
        <div className="items-start"></div>
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-10">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-10 space-x-8">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-8">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export const Header = () => {
  const messages = useTranslation();

  return (
    <div className="max-w-7xl mx-auto py-16 md:py-32 px-4 w-full">
      <div className="relative text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
          {messages['my-projects']}
        </h1>
        <div className="flex flex-row justify-center md:hidden text-center">
          <Image
            width={30}
            height={30}
            alt='down'
            src='/down.svg'
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[116px] sm:h-[180px] md:h-[300px] w-[170px] sm:w-[220px] md:w-[500px] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height={isMobile === true ? 200 : 600}
          width={isMobile === true ? 200 : 800}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};