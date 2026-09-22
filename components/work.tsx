"use client";

import React from "react";
import { Box } from "./box";
import Link from "next/link";
import {
  IconShoppingBag,
  IconMessageCircle,
  IconCoins,
  IconSparkles,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

const workItems = [
  {
    href: "https://e-commerce-app-cf00d.web.app/",
    title: "Art Connection",
    description: "Full-stack E-Commerce platform for framed artwork with Firebase.",
    icon: (
      <IconShoppingBag className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-linear-to-b from-amber-400 to-amber-600 ring-offset-amber-500",
  },
  {
    href: "https://app-socialmedia.vercel.app/",
    title: "Wonder App",
    description: "Modern social media web application with real-time posts & clean UX.",
    icon: (
      <IconMessageCircle className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
  },
  {
    href: "https://app-crypto2.vercel.app/",
    title: "Crypto Base",
    description: "API-driven cryptocurrency tracker powered by CoinGecko API.",
    icon: (
      <IconCoins className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
  },
  {
    href: "https://1xcoder.vercel.app/",
    title: "Creative Labs & UI",
    description: "Design engineering, MERN stack experiments, and interactive components.",
    icon: (
      <IconSparkles className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
  },
];

export const Work = () => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Subheading>Things I do & Build</Subheading>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        {workItems.map((item) => (
          <motion.div
            key={item.href}
            variants={FADE_UP_VARIANT}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href={item.href}
              target="_blank"
              className="group flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
            >
              <Box className={`mr-4 ${item.boxClassName}`}>{item.icon}</Box>
              <p className="text-foreground group-hover:text-primary font-medium transition-colors">
                {item.title}
              </p>
              <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
              <p className="text-foreground/70">{item.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
