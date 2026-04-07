import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.48, 0.52], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.48, 0.52, 1], [0, 1, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.48], [1, 0.95]);
  const scale2 = useTransform(scrollYProgress, [0.52, 1], [1.05, 1]);

  // Airplane animation values - Sweeping across the screen
  const planeX = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"]);
  const planeY = useTransform(scrollYProgress, [0, 0.5, 1], ["20vh", "0vh", "-20vh"]);
  const planeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  // Clip path for the "wipe" effect
  // As planeX goes from -100vw to 100vw, we map the center (0.5 scroll) to the wipe
  const wipeProgress = useTransform(scrollYProgress, [0.35, 0.65], [0, 100]);
  const clipPath1 = useTransform(wipeProgress, (v) => `inset(0 0 0 ${v}%)`);
  const clipPath2 = useTransform(wipeProgress, (v) => `inset(0 ${100 - v}% 0 0)`);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-bg-secondary">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Airplane Layer - Z-index 30 to be above text */}
        <motion.div
          style={{ 
            x: planeX, 
            y: planeY, 
            rotate: planeRotate,
            zIndex: 30 
          }}
          className="absolute pointer-events-none w-[300px] md:w-[500px]"
        >
          <img
            src="https://framerusercontent.com/images/oCLT3PyNjVFQxqVwbm6E68AzQ4.png"
            alt="Airplane"
            className="w-full h-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative w-full max-w-5xl h-60 flex items-center justify-center">
          {/* Text 1: Being "erased" from left to right */}
          <motion.h2
            style={{ clipPath: clipPath1, zIndex: 10 }}
            className="absolute text-4xl md:text-7xl font-display font-bold text-brand-text text-center leading-tight w-full"
          >
            Gestionamos tu proceso migratorio con excelencia.
          </motion.h2>

          {/* Text 2: Being "revealed" from left to right */}
          <motion.h2
            style={{ clipPath: clipPath2, zIndex: 11 }}
            className="absolute text-4xl md:text-7xl font-display font-bold text-brand-text text-center leading-tight w-full"
          >
            En MEDLA, acompañamos cada paso de tu camino.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
