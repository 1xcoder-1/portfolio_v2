"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconWorld,
  IconPalette,
  IconDeviceMobile,
  IconBrush,
  IconSparkles,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { DottedSeparator } from "@/components/separator";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export type ProjectCategory =
  | "All"
  | "Web Dev"
  | "App Dev"
  | "UI/UX Design"
  | "Graphic Design"
  | "AI Tools";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Dev" | "App Dev" | "UI/UX Design" | "Graphic Design" | "AI Tools";
  year: string;
  description: string;
  tags: string[];
  href: string;
  iconType: "web" | "uiux" | "app" | "graphic" | "ai";
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Dev",
  "App Dev",
  "UI/UX Design",
  "Graphic Design",
  "AI Tools",
];

const PROJECTS: ProjectItem[] = [
  {
    id: "aceternity-ui",
    title: "Aceternity UI",
    category: "Web Dev",
    year: "2024",
    description:
      "Modern animated component library for Next.js & Tailwind CSS powering over 200k developers worldwide.",
    tags: ["#Next.js", "#React", "#Tailwind CSS", "#Framer Motion"],
    href: "https://ui.aceternity.com",
    iconType: "web",
  },
  {
    id: "finflow-banking",
    title: "FinFlow SaaS Banking",
    category: "UI/UX Design",
    year: "2024",
    description:
      "High-conversion SaaS banking dashboard, multi-currency wallet flow, and complete mobile UX architecture.",
    tags: ["#Figma", "#Design Systems", "#Prototyping", "#Fintech"],
    href: "https://1xcoder.vercel.app",
    iconType: "uiux",
  },
  {
    id: "art-connection",
    title: "Art Connection Gallery",
    category: "Web Dev",
    year: "2024",
    description:
      "Full-stack customized framed art e-commerce platform with interactive live room preview, cart system, and Firebase auth.",
    tags: ["#React", "#Firebase", "#Tailwind CSS", "#E-Commerce"],
    href: "https://e-commerce-app-cf00d.web.app/",
    iconType: "web",
  },
  {
    id: "pulse-health",
    title: "Pulse Mobile Health Tracker",
    category: "App Dev",
    year: "2024",
    description:
      "Cross-platform mobile wellness and biometric tracking application with offline sync and intuitive analytics.",
    tags: ["#React Native", "#Expo", "#TypeScript", "#Tailwind"],
    href: "https://github.com/1xcoder-1",
    iconType: "app",
  },
  {
    id: "vanguard-brand",
    title: "Vanguard Brand Identity",
    category: "Graphic Design",
    year: "2023",
    description:
      "Comprehensive visual identity, typography system, interactive design tokens, and guideline handbook for modern tech ventures.",
    tags: ["#Branding", "#Design Tokens", "#Typography", "#Illustrator"],
    href: "https://1xcoder.vercel.app",
    iconType: "graphic",
  },
  {
    id: "wonder-app",
    title: "Wonder App Social Platform",
    category: "Web Dev",
    year: "2024",
    description:
      "Dynamic social networking application featuring real-time feed updates, multimedia posts, instant direct messaging, and secure profiles.",
    tags: ["#React", "#Node.js", "#MongoDB", "#Express"],
    href: "https://app-socialmedia.vercel.app/",
    iconType: "web",
  },
  {
    id: "crypto-base",
    title: "Crypto Base Market Tracker",
    category: "Web Dev",
    year: "2023",
    description:
      "Real-time cryptocurrency analytics platform with live interactive charts, CoinGecko market feed integration, and portfolio watchlist.",
    tags: ["#React", "#CoinGecko API", "#Chart.js", "#Tailwind CSS"],
    href: "https://app-crypto2.vercel.app/",
    iconType: "web",
  },
  {
    id: "devflow-ai",
    title: "DevFlow AI Assistant",
    category: "AI Tools",
    year: "2024",
    description:
      "Context-aware AI developer tool that automates semantic code reviews, unit test generation, and intelligent PR summaries.",
    tags: ["#OpenAI", "#Next.js", "#TypeScript", "#LangChain"],
    href: "https://github.com/1xcoder-1",
    iconType: "ai",
  },
];

function getCategoryIcon(type: ProjectItem["iconType"]) {
  switch (type) {
    case "web":
      return {
        bg: "bg-linear-to-b from-blue-500 to-blue-600",
        icon: <IconWorld className="size-4 text-white" />,
      };
    case "uiux":
      return {
        bg: "bg-linear-to-b from-purple-500 to-indigo-600",
        icon: <IconPalette className="size-4 text-white" />,
      };
    case "app":
      return {
        bg: "bg-linear-to-b from-emerald-500 to-teal-600",
        icon: <IconDeviceMobile className="size-4 text-white" />,
      };
    case "graphic":
      return {
        bg: "bg-linear-to-b from-orange-500 to-amber-600",
        icon: <IconBrush className="size-4 text-white" />,
      };
    case "ai":
      return {
        bg: "bg-linear-to-b from-fuchsia-500 to-rose-600",
        icon: <IconSparkles className="size-4 text-white" />,
      };
  }
}

export function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Container className="pt-8 md:pt-10">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7"
        >
          <motion.span
            variants={FADE_UP_VARIANT}
            className="text-foreground/45 font-mono text-[12px] font-medium tracking-[0.2em] uppercase"
          >
            WORKS
          </motion.span>
          <motion.p
            variants={FADE_UP_VARIANT}
            className="text-foreground text-base leading-relaxed"
          >
            Selected freelance and personal projects across Web Development,
            Mobile Apps, UI/UX Design, and Graphic Design.
          </motion.p>
          <motion.p
            variants={FADE_UP_VARIANT}
            className="text-foreground/80 text-base leading-relaxed"
          >
            Each project is crafted with high attention to detail, performance,
            and user experience.
          </motion.p>
        </motion.div>
      </Container>

      {/* Separator */}
      <Container>
        <DottedSeparator className="my-8" />
      </Container>

      {/* Filter Tabs */}
      <Container>
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-foreground text-theme-bg shadow-xs font-semibold"
                    : "bg-foreground/5 text-foreground/75 hover:bg-foreground/10 hover:text-foreground border border-foreground/5",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Container>

      {/* Projects Grid */}
      <Container className="mt-8 mb-16">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const iconMeta = getCategoryIcon(project.iconType);
              return (
                <motion.a
                  key={project.id}
                  layout
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  className="group flex flex-col justify-between rounded-2xl border border-foreground/10 bg-white/75 p-5 shadow-xs transition-all duration-200 hover:border-foreground/25 hover:shadow-md dark:bg-black/20"
                >
                  <div>
                    {/* Top Row: Icon + Badge + Year */}
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "flex size-7.5 shrink-0 items-center justify-center rounded-lg shadow-xs",
                          iconMeta.bg,
                        )}
                      >
                        {iconMeta.icon}
                      </div>
                      <span className="rounded-md border border-foreground/10 bg-foreground/5 px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground/80">
                        {project.category}
                      </span>
                      <span className="ml-auto font-mono text-xs text-foreground/45">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3.5 flex items-center gap-1 text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                      <IconArrowUpRight className="size-4 text-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-foreground/75 md:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-foreground/10 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-foreground/10 bg-foreground/5 px-2 py-0.5 font-mono text-[10.5px] text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
}
