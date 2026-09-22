"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

interface PageRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const PageReveal = ({
  children,
  className,
  delay = 0.05,
  ...props
}: PageRevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem = ({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) => {
  return (
    <motion.div variants={FADE_UP_VARIANT} className={className} {...props}>
      {children}
    </motion.div>
  );
};
