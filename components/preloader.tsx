"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Signature } from "./signature";

export const Preloader = () => {
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Let the signature draw (duration: 1.5s), then slide up
    const timer = setTimeout(() => {
      setIsSlidingUp(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (isDone) return null;

  return (
    <motion.div
      key="signature-preloader"
      initial={{ y: "0%" }}
      animate={{ y: isSlidingUp ? "-100%" : "0%" }}
      transition={{
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isSlidingUp) {
          setIsDone(true);
        }
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-theme-bg text-foreground select-none shadow-2xl border-b border-foreground/10"
    >
      {/* Only Animated Text */}
      <Signature
        className="h-16 md:h-24 w-auto max-w-[85vw] text-foreground"
        duration={1.4}
        delay={0.1}
      />
    </motion.div>
  );
};
