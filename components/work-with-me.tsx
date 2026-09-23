"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Subheading } from "./subheading";
import Link from "next/link";
import { Box } from "./box";
import { cn } from "@/lib/utils";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconAppWindowFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import {
  SPRING_CONFIG,
  STAGGER_CONTAINER,
  FADE_UP_VARIANT,
} from "@/lib/motion-config";

import { CalModal } from "./cal-modal";

type WorkItem = {
  title: string;
  description: string;
  boxClassName: string;
  skeleton: React.ReactNode;
} & (
  | { type: "link"; href: string }
  | { type: "copyEmail"; email: string }
  | { type: "cal" }
);

export const WorkWithMe = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCalOpen, setIsCalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const work: WorkItem[] = [
    {
      title: "Consultation",
      description: "Get on a call or email me to discuss your projects.",
      type: "copyEmail",
      email: "1xcoder@proton.me",
      boxClassName:
        "bg-linear-to-b from-blue-500 to-blue-600 shadow-md shadow-blue-500/20",
      skeleton: <IconMail className="size-4 text-white" />,
    },
    {
      title: "Hire me",
      description: "Let's build a modern web or mobile app for your business.",
      type: "cal",
      boxClassName:
        "bg-linear-to-b from-orange-500 to-amber-600 shadow-md shadow-orange-500/20",
      skeleton: <IconAppWindowFilled className="size-4 text-white" />,
    },
    {
      title: "Connect on LinkedIn",
      description: "Professional updates, networking, and direct messages.",
      type: "link",
      href: "https://linkedin.com/in/1xcoder",
      boxClassName:
        "bg-linear-to-b from-sky-500 to-blue-700 shadow-md shadow-sky-500/20",
      skeleton: <IconBrandLinkedin className="size-4 text-white" />,
    },
    {
      title: "Check my GitHub",
      description: "Explore my open-source codebases and tech projects.",
      type: "link",
      href: "https://github.com/1xcoder-1",
      boxClassName:
        "bg-linear-to-b from-emerald-500 to-teal-700 shadow-md shadow-emerald-500/20",
      skeleton: <IconBrandGithub className="size-4 text-white" />,
    },
  ];

  const toast = (
    <AnimatePresence mode="wait">
      {copied ? <CopyAnimation key="copy-email-toast" /> : null}
    </AnimatePresence>
  );

  return (
    <motion.section
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
        WORK WITH ME
      </motion.span>
      {mounted ? createPortal(toast, document.body) : null}
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="mt-1 flex flex-col gap-3.5">
        {work.map((item) => {
          if (item.type === "cal") {
            return (
              <motion.div
                key={item.title}
                variants={FADE_UP_VARIANT}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <button
                  type="button"
                  onClick={() => setIsCalOpen(true)}
                  className="group flex w-full cursor-pointer items-center gap-3.5 py-1 text-left transition-colors"
                >
                  <div
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-[10px] shadow-sm ring-1 ring-white/20 ${item.boxClassName}`}
                  >
                    {item.skeleton}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-sm md:text-[15px]">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <span className="text-foreground/30 font-light select-none">·</span>
                    <span className="text-foreground/65 text-xs md:text-sm font-normal">
                      {item.description}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          }

          if (item.type === "copyEmail") {
            return (
              <motion.div
                key={item.title}
                variants={FADE_UP_VARIANT}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <button
                  type="button"
                  onClick={() => handleCopyEmail(item.email)}
                  className="group flex w-full cursor-pointer items-center gap-3.5 py-1 text-left transition-colors"
                >
                  <div
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-[10px] shadow-sm ring-1 ring-white/20 ${item.boxClassName}`}
                  >
                    {item.skeleton}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-sm md:text-[15px]">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <span className="text-foreground/30 font-light select-none">·</span>
                    <span className="text-foreground/65 text-xs md:text-sm font-normal">
                      {item.description}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={item.title}
              variants={FADE_UP_VARIANT}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 py-1 transition-colors"
              >
                <div
                  className={`flex size-8.5 shrink-0 items-center justify-center rounded-[10px] shadow-sm ring-1 ring-white/20 ${item.boxClassName}`}
                >
                  {item.skeleton}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-sm md:text-[15px]">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-foreground/30 font-light select-none">·</span>
                  <span className="text-foreground/65 text-xs md:text-sm font-normal">
                    {item.description}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

const CopyAnimation = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      transition={SPRING_CONFIG}
      className="pointer-events-none fixed inset-x-0 bottom-20 z-200 mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-linear-to-b from-blue-400 to-blue-600 p-4 text-center text-white shadow-lg ring-1 shadow-black/10 ring-white/50 ring-offset-2 ring-offset-blue-500 ring-inset"
    >
      <EmailIcon /> Email Copied to clipboard
    </motion.div>
  );
};

const EmailIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4 perspective-distant"
      initial={{
        scale: 0.8,
      }}
      animate={{
        scale: [0.8, 1, 1.2, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <motion.path
        initial={{
          rotateX: 40,
        }}
        animate={{
          rotateX: [40, 0, 40],
        }}
        style={{
          transformOrigin: "top",
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
      />
    </motion.svg>
  );
};
