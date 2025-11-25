"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WallOfFame(): JSX.Element {
  const images = [
    "/awards/award1.jpg",
    "/awards/award2.jpg",
    "/awards/award3.jpg",
    "/awards/award4.jpg",
    "/awards/award5.png",
    "/awards/award6.jpg",
    "/awards/award7.jpg",
    "/awards/award8.jpg",
    "/awards/award9.jpg",
    "/awards/award10.jpg",
    "/awards/award11.jpg",
    "/awards/award12.jpg",
    "/awards/award13.jpg",
  ] 

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const slide = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(slide);
  }, [paused, images.length]);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-12 text-white tracking-wide drop-shadow-xl">
        Wall of Fame
      </h2>

      {/* Full-width Carousel */}
      <div
        className="relative w-full max-w-[1400px] h-[620px] mx-auto overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-white/5 backdrop-blur-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Award Image"
              fill
              className="object-contain w-full h-full rounded-3xl"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent rounded-3xl" />
          </motion.div>
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="absolute top-6 left-8 z-20 text-white">
          <h1 className="text-3xl font-semibold drop-shadow-lg">Achievement</h1>
          <p className="text-lg opacity-80">Award / Certificate</p>
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-lg p-3 rounded-full text-white text-xl shadow-lg z-30"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-lg p-3 rounded-full text-white text-xl shadow-lg z-30"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
