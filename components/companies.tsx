"use client";

import React, { useState } from "react";
import { Subheading } from "./subheading";
import {
  FreeCodeCampIcon,
  GeeksforGeeksIcon,
  GDGIcon,
  FirebaseIcon,
  NeonIcon,
  PosthogIcon,
  CursorIcon,
  StrapiIcon,
} from "./icons/general";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandMongodb,
  IconBrandReactNative,
  IconBrandAws,
  IconBrandDocker,
  IconBrandVercel,
  IconBrandCloudflare,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandSentry,
  IconBolt,
  IconBox,
  IconPlayerPlay,
  IconLayersIntersect,
  IconShieldCheck,
  IconServer,
  IconServer2,
  IconDatabase,
  IconDroplet,
  IconApi,
  IconCpu,
  IconBroadcast,
  IconDeviceMobile,
  IconGitMerge,
  IconTerminal2,
  IconRoute,
  IconBug,
  IconRocket,
} from "@tabler/icons-react";
import { Box } from "./box";
import { motion, AnimatePresence } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

type ToolCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Mobile"
  | "DevOps & Cloud"
  | "Tools";

type ToolItem = {
  title: string;
  category: ToolCategory;
  role: string;
  icon: React.ReactNode;
  boxClassName: string;
};

export const Companies = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>("Frontend");

  const learningCommunities = [
    {
      title: "freeCodeCamp",
      description: "Full-Stack Web Development, Responsive Design & JavaScript.",
      skeleton: (
        <FreeCodeCampIcon className="size-4 text-white drop-shadow-md" />
      ),
      boxClassName:
        "bg-linear-to-b from-blue-500 to-indigo-700 ring-offset-blue-600",
    },
    {
      title: "GeeksforGeeks",
      description: "Data Structures, Algorithms, and Core Computer Science.",
      skeleton: (
        <GeeksforGeeksIcon className="size-4 text-white drop-shadow-md" />
      ),
      boxClassName:
        "bg-linear-to-b from-emerald-500 to-green-700 ring-offset-emerald-600",
    },
    {
      title: "GDG Live Pakistan",
      description: "Google Developer Groups community member & tech participant.",
      skeleton: (
        <GDGIcon className="size-4 text-white drop-shadow-md" />
      ),
      boxClassName:
        "bg-linear-to-b from-red-500 to-rose-700 ring-offset-rose-600",
    },
  ];

  const toolsAndTech: ToolItem[] = [
    // Frontend
    {
      title: "Next.js",
      category: "Frontend",
      role: "React Framework",
      icon: <IconBrandNextjs className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-neutral-700 to-neutral-900 ring-offset-neutral-800",
    },
    {
      title: "React",
      category: "Frontend",
      role: "UI Library",
      icon: <IconBrandReact className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-sky-400 to-blue-600 ring-offset-blue-500",
    },
    {
      title: "Astro",
      category: "Frontend",
      role: "Content Web Framework",
      icon: <IconRocket className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-purple-500 to-pink-600 ring-offset-purple-500",
    },
    {
      title: "TypeScript",
      category: "Frontend",
      role: "Typed JavaScript",
      icon: <IconBrandTypescript className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-blue-500 to-blue-700 ring-offset-blue-600",
    },
    {
      title: "Tailwind CSS",
      category: "Frontend",
      role: "Styling Engine",
      icon: <IconBrandTailwind className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-cyan-400 to-blue-500 ring-offset-cyan-500",
    },
    {
      title: "Shadcn UI",
      category: "Frontend",
      role: "Component Library",
      icon: <IconBox className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-zinc-700 to-zinc-900 ring-offset-zinc-800",
    },
    {
      title: "Framer Motion",
      category: "Frontend",
      role: "Motion & Animations",
      icon: <IconBrandFramerMotion className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-purple-500 to-indigo-600 ring-offset-purple-500",
    },
    {
      title: "GSAP",
      category: "Frontend",
      role: "Performant Animation",
      icon: <IconPlayerPlay className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-green-500 to-emerald-700 ring-offset-green-600",
    },
    {
      title: "Zustand",
      category: "Frontend",
      role: "State Management",
      icon: <IconLayersIntersect className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-amber-500 to-orange-700 ring-offset-amber-600",
    },
    {
      title: "Zod",
      category: "Frontend",
      role: "Schema Validation",
      icon: <IconShieldCheck className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-indigo-500 to-blue-700 ring-offset-indigo-600",
    },

    // Backend
    {
      title: "Node.js",
      category: "Backend",
      role: "JS Runtime",
      icon: <IconBrandNodejs className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-green-500 to-emerald-700 ring-offset-green-600",
    },
    {
      title: "Express.js",
      category: "Backend",
      role: "REST Framework",
      icon: <IconServer className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-zinc-600 to-zinc-800 ring-offset-zinc-700",
    },
    {
      title: "Python",
      category: "Backend",
      role: "Programming Language",
      icon: <IconBrandPython className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-blue-400 to-amber-500 ring-offset-blue-500",
    },
    {
      title: "FastAPI",
      category: "Backend",
      role: "High-Speed Async API",
      icon: <IconBolt className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-teal-400 to-emerald-600 ring-offset-teal-500",
    },
    {
      title: "Prisma",
      category: "Backend",
      role: "Type-Safe ORM",
      icon: <IconDatabase className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-cyan-600 to-blue-800 ring-offset-cyan-700",
    },
    {
      title: "Drizzle ORM",
      category: "Backend",
      role: "Lightweight SQL ORM",
      icon: <IconDroplet className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-lime-500 to-green-700 ring-offset-lime-600",
    },
    {
      title: "REST APIs",
      category: "Backend",
      role: "API Architecture",
      icon: <IconApi className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-purple-500 to-indigo-700 ring-offset-purple-600",
    },
    {
      title: "Inngest",
      category: "Backend",
      role: "Event-Driven Workflows",
      icon: <IconCpu className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-indigo-500 to-blue-600 ring-offset-indigo-500",
    },
    {
      title: "Socket.IO",
      category: "Backend",
      role: "Real-Time Engine",
      icon: <IconBroadcast className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-neutral-700 to-neutral-900 ring-offset-neutral-800",
    },

    // Database
    {
      title: "PostgreSQL",
      category: "Database",
      role: "Relational SQL Database",
      icon: <IconDatabase className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-blue-600 to-indigo-800 ring-offset-blue-700",
    },
    {
      title: "MongoDB",
      category: "Database",
      role: "Document NoSQL DB",
      icon: <IconBrandMongodb className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-emerald-500 to-green-700 ring-offset-emerald-600",
    },
    {
      title: "Redis",
      category: "Database",
      role: "In-Memory Caching",
      icon: <IconServer2 className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-red-500 to-rose-700 ring-offset-red-600",
    },
    {
      title: "Supabase",
      category: "Database",
      role: "Backend & Postgres",
      icon: <IconBolt className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-emerald-400 to-teal-600 ring-offset-emerald-500",
    },
    {
      title: "Neon Postgres",
      category: "Database",
      role: "Serverless Database",
      icon: <NeonIcon className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-teal-400 to-emerald-600 ring-offset-teal-500",
    },
    {
      title: "Firebase",
      category: "Database",
      role: "Realtime Database & Auth",
      icon: <FirebaseIcon className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-amber-400 to-orange-600 ring-offset-orange-500",
    },

    // Mobile
    {
      title: "React Native",
      category: "Mobile",
      role: "Cross-Platform Mobile",
      icon: <IconBrandReactNative className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-sky-400 to-blue-600 ring-offset-blue-500",
    },
    {
      title: "Expo",
      category: "Mobile",
      role: "Universal App Suite",
      icon: <IconDeviceMobile className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-neutral-700 to-neutral-900 ring-offset-neutral-800",
    },

    // DevOps & Cloud
    {
      title: "AWS",
      category: "DevOps & Cloud",
      role: "Cloud Infrastructure",
      icon: <IconBrandAws className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-orange-400 to-amber-600 ring-offset-orange-500",
    },
    {
      title: "Docker",
      category: "DevOps & Cloud",
      role: "App Containerization",
      icon: <IconBrandDocker className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-blue-500 to-cyan-700 ring-offset-blue-600",
    },
    {
      title: "Vercel",
      category: "DevOps & Cloud",
      role: "Edge Deployments",
      icon: <IconBrandVercel className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-neutral-700 to-neutral-900 ring-offset-neutral-800",
    },
    {
      title: "Cloudflare",
      category: "DevOps & Cloud",
      role: "CDN & Edge Workers",
      icon: <IconBrandCloudflare className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-orange-500 to-amber-600 ring-offset-orange-500",
    },
    {
      title: "Nginx",
      category: "DevOps & Cloud",
      role: "Reverse Proxy",
      icon: <IconServer className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-green-600 to-emerald-800 ring-offset-green-700",
    },
    {
      title: "Linux",
      category: "DevOps & Cloud",
      role: "Server Environment",
      icon: <IconTerminal2 className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-amber-500 to-yellow-600 ring-offset-amber-500",
    },
    {
      title: "CI / CD",
      category: "DevOps & Cloud",
      role: "Automated Pipelines",
      icon: <IconGitMerge className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-blue-500 to-indigo-600 ring-offset-blue-500",
    },

    // Tools & Workflow
    {
      title: "Cursor",
      category: "Tools",
      role: "AI Code Editor",
      icon: <CursorIcon className="size-3.5 text-white" />,
      boxClassName: "bg-linear-to-b from-indigo-500 to-purple-700 ring-offset-indigo-600",
    },
    {
      title: "n8n",
      category: "Tools",
      role: "Workflow Automations",
      icon: <IconRoute className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-rose-500 to-red-600 ring-offset-rose-500",
    },
    {
      title: "Git & GitHub",
      category: "Tools",
      role: "Version Control",
      icon: <IconBrandGithub className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-neutral-600 to-neutral-800 ring-offset-neutral-700",
    },
    {
      title: "Figma",
      category: "Tools",
      role: "UI & Prototype Design",
      icon: <IconBrandFigma className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-purple-500 to-rose-600 ring-offset-purple-500",
    },
    {
      title: "PostHog",
      category: "Tools",
      role: "Product Analytics",
      icon: <PosthogIcon className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-yellow-400 to-amber-600 ring-offset-yellow-500",
    },
    {
      title: "Sentry",
      category: "Tools",
      role: "Error & Crash Tracking",
      icon: <IconBrandSentry className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-purple-600 to-indigo-800 ring-offset-purple-700",
    },
    {
      title: "Strapi",
      category: "Tools",
      role: "Headless CMS",
      icon: <StrapiIcon className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-indigo-500 to-violet-700 ring-offset-indigo-600",
    },
    {
      title: "Cypress",
      category: "Tools",
      role: "E2E Testing",
      icon: <IconBug className="size-4 text-white" />,
      boxClassName: "bg-linear-to-b from-emerald-500 to-teal-700 ring-offset-emerald-600",
    },
  ];

  const categories: ToolCategory[] = [
    "Frontend",
    "Backend",
    "Database",
    "Mobile",
    "DevOps & Cloud",
    "Tools",
  ];

  const filteredTools = toolsAndTech.filter(
    (tool) => tool.category === activeCategory,
  );

  return (
    <div className="flex flex-col gap-10">
      {/* SECTION 1: LEARNING & COMMUNITIES */}
      <motion.section
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        <Subheading>Learning & Communities</Subheading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {learningCommunities.map((item) => (
            <motion.div
              key={item.title}
              variants={FADE_UP_VARIANT}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex flex-col gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.04]"
            >
              <div className="flex items-center gap-2.5">
                <Box className={item.boxClassName}>{item.skeleton}</Box>
                <p className="text-foreground text-sm font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-foreground/70 text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 2: TOOLS & TECHNOLOGIES (Categorized Interactive Grid) */}
      <motion.section
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Subheading>Tools & Technologies</Subheading>
          <span className="text-foreground/45 font-mono text-xs">
            {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "bg-foreground/[0.04] text-foreground/65 hover:bg-foreground/[0.08] hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Tools Grid */}
        <motion.div
          key={activeCategory}
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.title}
              variants={FADE_UP_VARIANT}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex items-center gap-2.5 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-2.5 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.05]"
            >
              <div
                className={`flex size-7.5 shrink-0 items-center justify-center rounded-[8px] shadow-xs ring-1 ring-white/20 ${tool.boxClassName}`}
              >
                {tool.icon}
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-xs font-semibold text-foreground transition-colors group-hover:text-primary">
                  {tool.title}
                </span>
                <span className="truncate font-mono text-[10px] uppercase tracking-wider text-foreground/45">
                  {tool.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};
