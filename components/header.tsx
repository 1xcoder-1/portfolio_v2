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
      className="flex flex-col gap-7 pt-8 md:pt-10"
    >
      <motion.span
        variants={FADE_UP_VARIANT}
        className="text-foreground/45 font-mono text-[12px] font-medium tracking-[0.2em] uppercase"
      >
        ABOUT
      </motion.span>
      <motion.div variants={FADE_UP_VARIANT} className="text-foreground text-base leading-relaxed">
        I'm a developer, tinkering with code, AI tools, and modern web technologies. I'm mostly active on{" "}
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
        I've built a solid foundation as a dedicated learner with{" "}
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
        I love crafting modern full stack web and mobile applications with Next.js, React, Node.js, TypeScript, Tailwind CSS, and Python.
      </motion.div>
    </motion.div>
  );
};
