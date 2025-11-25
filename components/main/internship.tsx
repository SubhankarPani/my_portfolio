"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Internship(): JSX.Element {
  interface InternshipItem {
    role: string;
    company: string;
    duration: string;
    logo: string;
    points: string[];
  }

  const internships: InternshipItem[] = [
    {
      role: "Program Analyst Trainee",
      company: "Cognizant",
      duration: "Full-Time · Sept 2024 – Present (3 months)",
      logo: "/cognizant.png",
      points: [
        "Working as a full-time Analyst Trainee contributing to enterprise solutions.",
        "Collaborating with cross-functional Agile teams.",
        "Applying core engineering, debugging and backend workflow skills.",
      ],
    },
    {
      role: "Program Analyst Trainee",
      company: "Cognizant",
      duration: "Internship · May 2024 – Aug 2024 (4 months)",
      logo: "/cognizant.png",
      points: [
        "Performed manual QA and testing tasks using Jira.",
        "Learned and practiced Selenium and Cucumber automation basics.",
        "Supported backend workflow testing and documentation.",
      ],
    },
    {
      role: "SAP Intern",
      company: "Tata Steel",
      duration: "July 2023 – August 2023",
      logo: "/tatasteel.png",
      points: [
        "Gained knowledge of SAP functional modules and enterprise workflows.",
        "Understood real-time ERP operations and business process mapping.",
      ],
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-16 text-white tracking-wide">
        Internship Experience
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-60" />

        <div className="flex flex-col gap-16 pl-20">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform overflow-hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-10 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg" />

              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
                  <Image
                    src={intern.logo}
                    width={50}
                    height={50}
                    alt={`${intern.company} logo`}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {intern.role}
                  </h3>
                  <p className="text-white/80 text-sm">{intern.company}</p>
                  <p className="text-white/60 text-xs mt-1">{intern.duration}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-white/80 pl-1">
                {intern.points.map((p, i) => (
                  <li key={i} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
