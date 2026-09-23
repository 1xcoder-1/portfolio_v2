"use client";

import React from "react";
import {
  IconCode,
  IconBrandPython,
  IconGitBranch,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

const workItems = [
  {
    title: "Web & Mobile Development",
    description: "Building responsive web apps and cross-platform mobile software.",
    icon: <IconCode className="size-4 text-white" />,
    iconBg: "bg-linear-to-b from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20",
  },
  {
    title: "Python & FastAPI Development",
    description: "Building REST APIs, backend logic, and Python automation scripts.",
    icon: <IconBrandPython className="size-4 text-white" />,
    iconBg: "bg-linear-to-b from-purple-500 to-indigo-600 shadow-md shadow-purple-500/20",
  },
  {
    title: "Workflow Automations & n8n",
    description: "Building automated backend pipelines and integrations using n8n.",
    icon: <IconGitBranch className="size-4 text-white" />,
    iconBg: "bg-linear-to-b from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/20",
  },
  {
    title: "Open Source & Tech Exploration",
    description: "Building open-source tools and experimenting with emerging tech.",
    icon: <IconBrandGithub className="size-4 text-white" />,
    iconBg: "bg-linear-to-b from-amber-500 to-orange-600 shadow-md shadow-amber-500/20",
  },
];

export const Work = () => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-5"
    >
      <motion.span
        variants={FADE_UP_VARIANT}
        className="text-foreground/45 font-mono text-[12px] font-medium tracking-[0.2em] uppercase"
      >
        THINGS I DO
      </motion.span>
      <div className="mt-1 flex flex-col gap-3.5">
        {workItems.map((item) => (
          <motion.div
            key={item.title}
            variants={FADE_UP_VARIANT}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-start gap-3.5 py-1">
              <div
                className={`flex size-8.5 shrink-0 items-center justify-center rounded-[10px] shadow-sm ring-1 ring-white/20 mt-0.5 ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5 text-sm md:text-[15px]">
                <span className="font-semibold text-foreground">
                  {item.title}
                </span>
                <span className="text-foreground/65 text-xs md:text-sm font-normal">
                  {item.description}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
