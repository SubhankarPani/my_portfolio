"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  color?: string;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  color = "from-[#4f4f4f] to-[#2a2a2a]",
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={500}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        className="
          relative bg-[#0e101c] px-8 py-7 w-[180px] h-[175px]
          border border-white/10 rounded-2xl shadow-lg
          flex flex-col items-center justify-center
          overflow-hidden group pointer-events-auto
        "
      >
        {/* TOP GRADIENT BORDER */}
        <div
          className={`absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r ${color}`}
        />

        {/* Floating Shine */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-all duration-700 
            bg-gradient-to-br from-white/10 via-transparent to-transparent
            pointer-events-none
          "
        ></div>

        {/* Glow shadow */}
        <div
          className={`
            absolute inset-0 blur-lg opacity-0
            group-hover:opacity-30
            transition-all duration-700
            bg-gradient-to-r ${color}
          `}
        ></div>

        {/* ICON */}
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="z-10"
        />

        {/* NAME */}
        <p className="mt-4 text-white font-semibold text-sm z-10">
          {name}
        </p>

        {/* BOTTOM GRADIENT BORDER */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r ${color}`}
        />
      </motion.div>
    </Tilt>
  );
};
