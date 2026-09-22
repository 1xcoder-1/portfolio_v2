"use client";

import React from "react";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export interface QuoteProps {
  kicker?: string;
  quote?: string;
  author?: string;
}

export function Quote({
  kicker = "MOTIVATIONAL THOUGHTS & CREED",
  quote = '"If you don\'t give up, you still have a chance. Giving up is the greatest failure."',
  author = "Jack Ma, Alibaba Founder",
}: QuoteProps) {
  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4"
    >
      <motion.span
        variants={FADE_UP_VARIANT}
        className="text-foreground/45 font-mono text-[11px] font-medium tracking-[0.2em] uppercase"
      >
        {kicker}
      </motion.span>

      <motion.div
        variants={FADE_UP_VARIANT}
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-start gap-4 rounded-2xl border border-foreground/10 bg-white/75 p-5 shadow-xs transition-all duration-200 hover:border-foreground/25 hover:shadow-md dark:bg-black/20 md:p-6"
      >
        <span className="text-2xl select-none leading-none pt-0.5" role="img" aria-label="light bulb">
          💡
        </span>

        <div className="flex flex-col">
          <p className="text-[15px] italic leading-relaxed text-foreground md:text-base font-normal">
            &ldquo;{quote}&rdquo;
          </p>
          <span className="mt-2.5 font-mono text-xs text-foreground/55">
            &ndash; {author}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
