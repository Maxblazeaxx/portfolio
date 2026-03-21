"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={containerRef} className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-gray-300">
        <motion.h3 
          style={{ opacity, x: xLeft }}
          className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight font-[family-name:var(--font-playfair)]"
        >
          About Me
        </motion.h3>
        
        <motion.div 
          style={{ opacity, x: xRight }}
          className="text-lg md:text-xl font-light leading-relaxed space-y-6"
        >
          <p>
            I am a B.Tech student specializing in Artificial Intelligence and Machine Learning at Ramaiah University of Applied Sciences (Expected 2027). I am passionate about solving real-world problems using deep learning and computer vision.
          </p>
          <p>
            I enjoy working on projects that combine data, algorithms, and practical applications. Currently, I am focused on building intelligent systems and improving my skills in model optimization and deployment.
          </p>
          <p>
            Beyond tech, I enjoy exploring futuristic interfaces, minimal design, and building visually interactive applications. I believe technology should not only be powerful but also intuitive and engaging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
