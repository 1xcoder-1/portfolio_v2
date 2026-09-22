import type { Variants } from "motion/react";

export const SPRING_CONFIG = {
  type: "spring" as const,
  visualDuration: 0.77,
  bounce: 0.2,
};

export const POP_IN_VARIANT: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.6, rotateY: 40 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
  },
  exit: { opacity: 0, y: 20, scale: 0.6 },
};

export const GENERAL_VARIANT: Variants = {
  initial: { opacity: 0, scale: 0.6, rotateY: 40, rotateX: 40 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
  },
  exit: { opacity: 0, y: 20, scale: 0.6 },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const FADE_UP_VARIANT: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export const FADE_IN_VARIANT: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
