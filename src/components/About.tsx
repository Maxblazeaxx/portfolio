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
          <div className="pt-6">
            <a 
              href="/Akash_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
