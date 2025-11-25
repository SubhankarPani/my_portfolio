"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroCanvas from "@/components/sub/HeroCanvas";


import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const roles = [
    "Web Developer",
    "Automation Tester",
    "Graphic Designer",
    "App Developer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing Animation Logic
  useEffect(() => {
    if (index === roles.length) return;

    const currentText = roles[index];

    let timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && subIndex === currentText.length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  // Cursor Blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT SECTION */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* Empty Welcome Box (removed text) */}
        <motion.div
          variants={slideInFromTop}
          className="opacity-0" // hidden completely
        />

        {/* MAIN TITLE + TYPING EFFECT */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-white max-w-[600px]"
        >
          <h1 className="text-5xl font-bold">Hi, I am Subhankar Pani</h1>

          <h2 className="text-4xl font-extrabold h-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {roles[index].substring(0, subIndex)}
            <span className="ml-1">{blink ? "|" : ""}</span>
          </h2>
        </motion.div>
      </div>

      {/* RIGHT SECTION — HERO IMAGE */}
    <motion.div
  variants={slideInFromRight(0.8)}
  className="w-full h-full flex justify-center items-center relative"
>
  <HeroCanvas />
</motion.div>

    </motion.div>
  );
};
