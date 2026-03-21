"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Center Name
  const opacity1 = useTransform(progress, [0, 0.8, 0.95], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.9], [0, -150]);
  const scale1 = useTransform(progress, [0, 0.9], [1, 1.1]);

  // Top Left
  const opacity2 = useTransform(progress, [0.15, 0.3, 0.8, 0.95], [0, 1, 1, 0]);
  const x2 = useTransform(progress, [0.15, 0.3], [-50, 0]);
  const y2 = useTransform(progress, [0.15, 0.9], [0, -100]);

  // Bottom Right
  const opacity3 = useTransform(progress, [0.4, 0.55, 0.8, 0.95], [0, 1, 1, 0]);
  const x3 = useTransform(progress, [0.4, 0.55], [50, 0]);
  const y3 = useTransform(progress, [0.4, 0.9], [0, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 h-screen overflow-hidden">
      {/* Name Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] bg-gradient-to-br from-amber-100 via-amber-300 to-amber-600 bg-clip-text text-transparent font-[family-name:var(--font-playfair)] italic">
          Akash A.
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-white/80 font-light tracking-[0.3em] uppercase">
          AI & ML Student
        </p>
      </motion.div>

      {/* CV solutions Top Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="absolute inset-0 flex flex-col items-start justify-start pt-32 pl-8 md:pl-24 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white/90 drop-shadow-2xl leading-tight font-[family-name:var(--font-playfair)]">
          Building intelligent systems<br />
          <span className="text-cyan-300 italic text-4xl md:text-5xl lg:text-7xl">& real-world CV solutions.</span>
        </h2>
      </motion.div>

      {/* Passionate Bottom Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="absolute inset-0 flex flex-col items-end justify-end pb-32 pr-8 md:pr-24 max-w-3xl ml-auto text-right"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white/90 drop-shadow-2xl leading-tight font-[family-name:var(--font-playfair)]">
          Passionate about<br />
          <span className="text-fuchsia-300 italic text-4xl md:text-5xl lg:text-7xl">deep learning</span><br />
          & data algorithms.
        </h2>
      </motion.div>
    </div>
  );
}
