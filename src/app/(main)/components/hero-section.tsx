"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white flex flex-col gap-6"
    >
      <div className="mb-10 md:mb-0">
        <p className="text-lg text-[#E5E9F0] mb-4">Hi all. I am</p>
        <h1 className="text-6xl md:text-5xl font-semibold text-white mb-4">
          Akbar Farajov
        </h1>
        <h2 className="text-xl md:text-2xl text-[#43D9AD] flex items-center gap-2">
          <span className="text-3xl">&gt;</span>
          <span>Front-end developer</span>
        </h2>
      </div>

      <div className="text-[#607B96] text-sm flex flex-col gap-2">
        <span>{"// create more projects to continue"}</span>
        <span>{"// you can also find my profile on Github:"}</span>
        <p>
          <span className="text-[#4D5BCE]">const</span>{" "}
          <span className="text-[#43D9AD]">githubLink</span> ={" "}
          <a
            href="https://github.com/akbar-farajov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E99287] underline hover:text-white transition-colors"
          >
            &quot;https://github.com/akbar-farajov&quot;
          </a>
        </p>
      </div>
    </motion.div>
  );
}
