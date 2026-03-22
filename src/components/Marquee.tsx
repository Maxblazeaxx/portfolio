"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  // The repeating string of skills and fields
  const items = [
    "AI & MACHINE LEARNING",
    "COMPUTER VISION",
    "DEEP LEARNING",
    "MODEL OPTIMIZATION",
    "INTELLIGENT SYSTEMS",
    "DATA ALGORITHMS"
  ];
  
  // Create a continuous string with stylish diamond dividers
  const textGroup = items.join(" ✦ ") + " ✦ ";
  
  // Duplicate it enough times to ensure it overflows the screen completely (prevents popping)
  const repeatedText = new Array(8).fill(textGroup).join("");

  return (
    <div className="relative w-full bg-black/40 py-5 overflow-hidden border-y border-white/5 flex items-center z-30 backdrop-blur-md">
      {/* Decorative gradient shadows on edges for cinematic depth */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>

      {/* The scrolling container */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 150, // Significantly slower, readable crawl speed
        }}
      >
        <span className="text-sm md:text-xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 font-mono pr-8 opacity-80">
          {repeatedText}
        </span>
        <span className="text-sm md:text-xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 font-mono pr-8 opacity-80">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
