"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex justify-center mt-32 px-6"
    >
      <div className="max-w-4xl w-full bg-[#0f0f16] border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8">

        {/* YOUR IMAGE */}
        <Image
          src="/my-photo.png" // place image in /public folder
          alt="Subhankar Pani"
          width={220}
          height={220}
          className="rounded-2xl shadow-lg object-cover"
        />

        {/* ABOUT TEXT */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-3">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m Subhankar Pani — a passionate developer who loves building
            modern web apps, designing clean user interfaces, and exploring
            automation tools. I enjoy learning new technologies and creating
            digital experiences that feel smooth, fast, and impactful.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
