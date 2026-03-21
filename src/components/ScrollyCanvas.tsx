"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);

    const loadSequence = async () => {
      const fetchImage = (index: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameStr = index.toString().padStart(3, "0");
          img.src = `/sequence/frame_${frameStr}_delay-0.066s.webp`;
          img.onload = () => {
            if (!isCancelled) {
              loadedImages[index] = img;
              setImages([...loadedImages]);
              if (index === 0) drawFrame(img);
            }
            resolve();
          };
          img.onerror = () => resolve();
        });
      };

      await Promise.all(
        Array.from({ length: FRAME_COUNT }).map((_, i) => fetchImage(i))
      );
    };

    loadSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle object-fit: cover logic
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = cw / 2 - w / 2;
    const y = ch / 2 - h / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set actual size in memory (scaled to account for extra pixel density if needed, though 1:1 is fine here)
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        let targetImg = images[frameIndex];
        if (!targetImg) {
          for (let i = frameIndex; i >= 0; i--) {
            if (images[i]) {
              targetImg = images[i];
              break;
            }
          }
        }
        if (targetImg) {
          drawFrame(targetImg);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Handle scroll updates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    let frameIndex = Math.floor(latest * FRAME_COUNT);
    if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
    
    let targetImg = images[frameIndex];
    if (!targetImg) {
      for (let i = frameIndex; i >= 0; i--) {
        if (images[i]) {
          targetImg = images[i];
          break;
        }
      }
    }

    if (targetImg) {
      requestAnimationFrame(() => drawFrame(targetImg));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full block"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
