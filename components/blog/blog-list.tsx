"use client";

import Link from "next/link";
import { Subheading } from "../subheading";
import { formatPostDate } from "@/lib/format-post-date";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export const BlogList = ({ posts }: { posts: Array<{ slug: string; title: string; publishedAt: string }> }) => {
  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-4"
    >
      <Subheading>Writing</Subheading>
      {posts.slice(0, 3).map((post, index) => (
        <motion.div
          key={post.slug || index}
          variants={FADE_UP_VARIANT}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between gap-10 transition-colors duration-200 md:gap-20"
          >
            <span className="text-foreground group-hover:text-primary truncate">
              {post.title}
            </span>
            <span className="text-foreground/50 group-hover:text-primary shrink-0 font-mono text-xs font-light">
              {formatPostDate(post.publishedAt)}
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
};
