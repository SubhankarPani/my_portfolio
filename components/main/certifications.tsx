"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications(): JSX.Element {
  interface CertificateItem {
    title: string;
    platform: string;
    logo: string;
    certificate: string;
    date?: string;
  }

  const certificates: CertificateItem[] = [
    {
      title: "Flutter & Dart – The Complete Guide",
      platform: "Udemy",
      logo: "/udemy.png",
      certificate: "/flutter-cert.jpg",
    },
    {
      title: "Python Fundamentals for Beginners",
      platform: "greatlearning",
      logo: "/greatlearning.png",
      certificate: "/python-cert.png",
    },
    {
      title: "Adobe Illustrator",
      platform: "Udemy",
      logo: "/udemy.png",
      certificate: "/illustrator-cert.jpg",
    },
    {
      title: "AWS Academy Cloud Foundation",
      platform: "AWS Academy",
      logo: "/aws.png",
      certificate: "/aws-cert.jpg",
      date: "Issued Feb 2024",
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-16 text-white tracking-wide drop-shadow-lg">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-11/12 max-w-6xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition-all overflow-hidden group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 opacity-30 blur-2xl" />

            {/* Header */}
            <div className="relative flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Image src={cert.logo} width={70} height={70} alt={cert.platform} className="object-contain" />
              </div>

              <div className="flex flex-col w-full">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-all">
                  {cert.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{cert.platform}</p>
                {cert.date && <p className="text-white/50 text-xs mt-1">{cert.date}</p>}
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/20 shadow-xl group-hover:scale-[1.02] transition-all">
              <Image
                src={cert.certificate}
                width={800}
                height={500}
                alt="Certificate Preview"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Badge */}
            <div className="mt-6 inline-block px-5 py-2 text-sm font-medium rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-xl shadow-md">
              ✔ Verified Certificate
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
