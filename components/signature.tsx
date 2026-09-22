"use client";

import React from "react";
import { motion } from "motion/react";

interface SignatureProps {
  className?: string;
  duration?: number;
  delay?: number;
  inView?: boolean;
}

export const Signature = ({
  className = "h-10 w-auto",
  duration = 2.0,
  delay = 0.1,
  inView = false,
}: SignatureProps) => {
  const animationProps = inView
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true, amount: 0.5 },
        transition: {
          pathLength: { duration, ease: [0.65, 0, 0.35, 1], delay },
          opacity: { duration: 0.4, delay },
        },
      }
    : {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration, ease: [0.65, 0, 0.35, 1], delay },
          opacity: { duration: 0.4, delay },
        },
      };

  return (
    <svg
      viewBox="0 0 310 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Abdullah Signature"
    >
      {/* Animated Cursive Stroke Writing "Abdullah" */}
      <motion.path
        {...animationProps}
        d="M 25 68 C 20 62, 32 30, 42 18 C 46 14, 52 48, 56 65 C 57 68, 52 50, 40 48 C 32 46, 38 40, 48 42 C 58 44, 66 58, 72 65 C 76 56, 82 32, 88 18 C 91 12, 95 14, 93 24 C 90 40, 84 62, 87 65 C 89 67, 96 66, 99 58 C 101 54, 98 52, 96 54 C 94 56, 100 62, 106 65 C 112 60, 110 50, 105 52 C 100 54, 101 65, 107 65 C 112 65, 115 58, 117 50 C 119 40, 122 24, 124 16 C 125 13, 127 15, 126 22 C 124 38, 121 58, 123 65 C 124 67, 128 67, 133 60 C 137 54, 137 60, 139 65 C 141 68, 147 68, 149 54 C 150 58, 149 62, 151 65 C 153 68, 158 66, 163 58 C 167 50, 172 30, 177 16 C 180 10, 185 13, 183 22 C 179 40, 174 61, 177 65 C 179 67, 184 66, 189 58 C 193 50, 198 30, 203 16 C 206 10, 211 13, 209 22 C 205 40, 200 61, 203 65 C 205 67, 210 66, 215 58 C 219 52, 215 50, 211 53 C 207 56, 208 65, 213 65 C 217 65, 221 60, 222 52 C 223 56, 222 62, 224 65 C 226 68, 230 66, 235 58 C 239 50, 244 30, 249 16 C 252 10, 257 13, 255 22 C 251 40, 246 61, 248 65 C 249 61, 253 52, 259 52 C 264 52, 267 58, 268 65 C 272 72, 282 72, 288 64 C 294 56, 290 76, 275 80 C 240 86, 150 85, 45 80 C 22 79, 18 76, 32 74 C 55 70, 160 72, 250 72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
