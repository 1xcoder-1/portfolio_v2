"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GENERAL_VARIANT, SPRING_CONFIG } from "@/lib/motion-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DottedUnderline } from "./dotted-underline";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const links = [
  { title: "Home", href: "/" },
  { title: "Inspiration", href: "/inspiration" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Sponsor", href: "/sponsor" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-2xl flex-col items-start gap-5 px-4 pt-6 md:pt-10">
      <div className="flex items-center gap-2 perspective-distant">
        <motion.div
          variants={GENERAL_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={SPRING_CONFIG}
          className="rounded-md bg-white shadow-md dark:bg-neutral-800"
        >
          <Image
            src="/logo.png"
            alt="1xcoder"
            width={40}
            height={40}
            className="aspect-square size-6 rounded-md shadow-2xl object-cover"
          />
        </motion.div>
        <h1 className="text-foreground text-xl font-medium tracking-tight md:text-2xl">
          Abdullah{" "}
          <span className="text-foreground/50 font-normal">aka</span>{" "}
          <span className="font-normal italic">1xcoder</span>
        </h1>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-[15px]">
        {links.map((link) => {
           const active = isActivePath(pathname, link.href);
           return (
             <Link
               key={link.href}
               href={link.href}
               className={cn(
                 "group relative pb-0.5 transition-colors",
                 active
                   ? "text-primary font-medium"
                   : "text-foreground/70 hover:text-primary font-normal",
               )}
             >
               {link.title}
               <DottedUnderline
                 className={cn(
                   "mask-x-from-90% transition-opacity duration-300",
                   active
                     ? "opacity-100"
                     : "opacity-0 group-hover:opacity-100",
                 )}
               />
             </Link>
           );
        })}
      </div>
    </nav>
  );
};
