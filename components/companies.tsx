"use client";

import React from "react";
import { Subheading } from "./subheading";
import {
  FreeCodeCampIcon,
  GeeksforGeeksIcon,
  GDGIcon,
  FirebaseIcon,
  NeonIcon,
  PosthogIcon,
} from "./icons/general";
import { Box } from "./box";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export const Companies = () => {
  const organizations = [
    {
      title: "freeCodeCamp",
      description: "Full-Stack Web Development, Responsive Design & JavaScript.",
      skeleton: (
        <FreeCodeCampIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-blue-500 to-indigo-700 ring-offset-blue-600",
    },
    {
      title: "GeeksforGeeks",
      description: "Data Structures, Algorithms, and Core Computer Science.",
      skeleton: (
        <GeeksforGeeksIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-green-500 to-emerald-700 ring-offset-green-600",
    },
    {
      title: "GDG Live Pakistan",
      description: "Google Developer Groups community member & tech participant.",
      skeleton: (
        <GDGIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-red-400 to-rose-600 ring-offset-rose-500",
    },
    {
      title: "Firebase",
      description: "Cloud database, user authentication & backend integrations.",
      skeleton: (
        <FirebaseIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-amber-400 to-orange-600 ring-offset-orange-500",
    },
    {
      title: "Neon Postgres",
      description: "Serverless Postgres database architecture for modern web apps.",
      skeleton: (
        <NeonIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-teal-400 to-emerald-600 ring-offset-teal-500",
    },
    {
      title: "PostHog",
      description: "Product analytics and user behavior insights for web platforms.",
      skeleton: (
        <PosthogIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-yellow-400 to-yellow-600 ring-offset-yellow-500",
    },
  ];

  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Subheading>Organizations & Communities</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {organizations.map((org) => (
          <motion.div
            key={org.title}
            variants={FADE_UP_VARIANT}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <Box className={org.boxClassName}>{org.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">
                {org.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {org.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
