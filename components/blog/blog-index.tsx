"use client";

import { useMemo, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { BlogPostLink } from "./blog-post-link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export type BlogIndexPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
};

type BlogIndexProps = {
  posts: BlogIndexPost[];
};

export function BlogIndex({ posts }: BlogIndexProps) {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () =>
      [...posts].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [posts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((p) => p.title.toLowerCase().includes(q));
  }, [sorted, query]);

  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="show"
      className="mt-6 flex flex-col gap-6"
    >
      <motion.div variants={FADE_UP_VARIANT} className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Search posts by title
        </label>
        <IconSearch
          className="text-foreground/40 pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          aria-hidden
        />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title…"
          className={cn(
            "w-full rounded-md border border-neutral-200 bg-white py-2.5 pr-3 pl-10 text-sm text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
            "placeholder:text-foreground/40",
            "focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none",
          )}
          autoComplete="off"
        />
      </motion.div>

      <div>
        {!filtered.length ? (
          <p className="text-foreground/70 text-sm">
            No posts match that filter.
          </p>
        ) : (
          <motion.ul
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.li
                  key={post.slug}
                  variants={FADE_UP_VARIANT}
                  layout
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <BlogPostLink
                    title={post.title}
                    slug={post.slug}
                    publishedAt={post.publishedAt}
                    summary={post.summary}
                    image={post.image}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </motion.section>
  );
}

