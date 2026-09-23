"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { IconSearch, IconChevronDown, IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

export type InspirationItem = {
  title: string;
  description: string;
  href: string;
  domain: string;
  category?: string;
  iconBg?: string;
  fallbackText?: string;
};

const CATEGORIES = ["All", "People", "Products", "Design & Fonts", "Tools", "Websites"];

export const InspirationList = ({ items }: { items: InspirationItem[] }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.domain.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        item.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesQuery && matchesCategory;
    });
  }, [items, query, selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search Bar & Category Filter */}
      <div className="flex items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <IconSearch
            className="text-foreground/40 pointer-events-none absolute top-1/2 left-0 h-4.5 w-4.5 -translate-y-1/2"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search links"
            className={cn(
              "w-full bg-transparent py-2 pr-4 pl-7 text-sm md:text-base text-foreground",
              "placeholder:text-foreground/40",
              "focus:outline-none border-b border-transparent focus:border-border transition-colors",
            )}
            autoComplete="off"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <span>{selectedCategory}</span>
            <IconChevronDown className={cn("size-4 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
          </button>

          {isDropdownOpen ? (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1.5 z-50 min-w-[150px] overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg text-left transition-colors",
                      selectedCategory === cat
                        ? "bg-neutral-100 text-foreground dark:bg-neutral-800"
                        : "text-foreground/70 hover:bg-neutral-50 hover:text-foreground dark:hover:bg-neutral-800/50",
                    )}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat ? (
                      <IconCheck className="size-3.5 text-primary" />
                    ) : null}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Items List */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3.5 pt-2"
      >
        {filteredItems.length === 0 ? (
          <p className="text-foreground/50 py-8 text-sm">
            No links found matching your search.
          </p>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.href}
                variants={FADE_UP_VARIANT}
                layout
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-1.5 transition-colors"
                >
                  {/* Left: Icon + Title / Description */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Favicon / Icon Box */}
                    <div className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-md border border-black/10 bg-neutral-100 shadow-2xs dark:border-white/10 dark:bg-neutral-800">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
                        alt={item.title}
                        className="size-4 object-contain"
                        onError={(e) => {
                          // Fallback icon style
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector(".fallback-text")) {
                            const span = document.createElement("span");
                            span.className = "fallback-text text-[10px] font-bold text-foreground/70 uppercase";
                            span.innerText = item.fallbackText || item.title.slice(0, 2);
                            parent.appendChild(span);
                          }
                        }}
                      />
                    </div>

                    {/* Title / Description */}
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm md:text-[15px] truncate">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="text-foreground/40 font-light select-none">/</span>
                      <span className="text-foreground/70 group-hover:text-foreground text-xs md:text-sm transition-colors truncate">
                        {item.description}
                      </span>
                    </div>
                  </div>

                  {/* Right: Clean Monospace Domain */}
                  <div className="shrink-0 pl-2">
                    <span className="font-mono text-xs font-light text-foreground/45 group-hover:text-foreground/75 transition-colors">
                      {item.domain}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};
