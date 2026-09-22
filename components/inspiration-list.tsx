"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export type InspirationItem = {
  title: string;
  description: string;
  href: string;
  src: React.ReactNode;
};

export const InspirationList = ({ items }: { items: InspirationItem[] }) => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="show"
      className="mt-8 flex flex-col gap-4"
    >
      {items.map((item) => (
        <motion.div
          key={item.href}
          variants={FADE_UP_VARIANT}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href={item.href}
            target="_blank"
            className="group flex items-center gap-2"
          >
            <div className="mr-2 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-neutral-50 to-neutral-100 shadow-sm ring-1 shadow-black/10 ring-black/10 md:size-8">
              {item.src}
            </div>
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <p className="text-foreground font-medium">{item.title}</p>
              <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
              <p className="text-foreground/70 group-hover:text-primary text-balance transition-colors duration-200">
                {item.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
