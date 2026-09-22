"use client";

import React from "react";
import { LinkPreview } from "./link-preview";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export const Header = () => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5 pt-4"
    >
      <motion.span
        variants={FADE_UP_VARIANT}
        className="text-foreground/45 font-mono text-[11px] font-medium tracking-[0.2em] uppercase"
      >
        ABOUT
      </motion.span>
      <motion.div variants={FADE_UP_VARIANT} className="text-foreground text-base leading-relaxed">
        I'm a software engineer at heart, tinkering with AI and code almost 90% of the time. I'm mostly active on{" "}
        <LinkPreview url="https://github.com/1xcoder-1">
          GitHub
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://linkedin.com/in/1xcoder">
          LinkedIn
        </LinkPreview>{" "}
        where I share my projects, learnings, and development journey.
      </motion.div>
      <motion.div variants={FADE_UP_VARIANT} className="text-foreground text-base leading-relaxed">
        I've built a strong software foundation as a dedicated student of{" "}
        <LinkPreview url="https://www.freecodecamp.org">
          freeCodeCamp
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://www.geeksforgeeks.org">
          GeeksforGeeks
        </LinkPreview>
        , while regularly participating in developer meetups with{" "}
        <LinkPreview url="https://gdg.community.dev">
          GDG Live Pakistan
        </LinkPreview>
        .
      </motion.div>
      <motion.div variants={FADE_UP_VARIANT} className="text-foreground text-base leading-relaxed">
        I love crafting end-to-end full-stack applications with React, Next.js,
        Node.js, Firebase, and modern UI libraries like{" "}
        <LinkPreview url="https://ui.aceternity.com">
          Aceternity UI
        </LinkPreview>
        . Check out my work on my portfolio at{" "}
        <LinkPreview url="https://1xcoder.vercel.app">
          1xcoder.vercel.app
        </LinkPreview>
        .
      </motion.div>
    </motion.div>
  );
};
