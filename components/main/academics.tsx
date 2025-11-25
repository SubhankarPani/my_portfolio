"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Academics() {
  const academicData = [
    {
      title: "Valley View School",
      degree: "Secondary Education (10th Grade)",
      branch: "ICSE Board — Percentage: 81%",
      minor: "",
      details: "Location: Jamshedpur, Jharkhand",
      duration: "Completed: 2019",
      logo: "/school-logo.jpg",
      side: "left",
    },
    {
      title: "Valley View School",
      degree: "Higher Secondary Education (12th Grade)",
      branch: "Science Stream — Percentage: 80.2%",
      minor: "",
      details: "Location: Jamshedpur, Jharkhand",
      duration: "Completed: 2021",
      logo: "/school-logo.jpg",
      side: "right",
    },
    {
      title: "ITER, Siksha 'O' Anusandhan University",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science and Engineering",
      minor: "",
      details: "CGPA: 7.9 / 10",
      duration: "2021 – 2025",
      logo: "/collage-logo.png",
      side: "left",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-48 px-6 relative">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-white text-center"
      >
        Academic <span className="text-cyan-400">History</span>
      </motion.h1>

      {/* VERTICAL TIMELINE */}
      <div className="relative w-full max-w-5xl mt-20">
        <div className="absolute left-1/2 -translate-x-1/2 w-[4px] bg-cyan-400 h-full rounded-full shadow-[0_0_20px_#22d3ee]"></div>

        {/* TIMELINE ITEMS */}
        <div className="flex flex-col gap-32">
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* CARD */}
              <div
  className={`bg-[#0f0f16] border border-white/10 p-8 rounded-2xl shadow-xl w-full max-w-lg 
    ${item.side === "right" ? "pl-24" : ""}`}
>

                <h2 className="text-2xl font-bold text-cyan-400">
                  {item.title}
                </h2>

                <p className="text-gray-300 mt-2 font-medium">
                  {item.degree}
                </p>

                <p className="text-gray-400">{item.branch}</p>

                {item.minor && (
                  <p className="text-gray-300 mt-4">
                    <span className="font-semibold">Minor Subject:</span> {item.minor}
                  </p>
                )}

                <p className="text-gray-400 mt-4">{item.details}</p>
              </div>

              {/* CENTER CIRCLE WITH LOGO */}
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#0f0f16] border-[3px] border-cyan-400 shadow-[0_0_20px_#22d3ee] overflow-hidden flex justify-center items-center">
                  <Image
                    src={item.logo}
                    width={80}
                    height={80}
                    alt="Academic Logo"
                    className="object-cover"
                  />
                </div>

                {/* DATE */}
                <p className="text-gray-300 text-sm mt-2">
                  {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
