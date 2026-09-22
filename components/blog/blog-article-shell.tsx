"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { motion } from "motion/react";
import { STAGGER_CONTAINER, FADE_UP_VARIANT } from "@/lib/motion-config";

export type BlogArticleFrontMatter = {
  title: string;
  publishedAt: string;
  summary?: string;
  readingTime?: { text: string };
};

type BlogArticleShellProps = {
  frontMatter: BlogArticleFrontMatter;
  children: React.ReactNode;
};

export function BlogArticleShell({
  frontMatter,
  children,
}: BlogArticleShellProps) {
  const dateLabel = format(parseISO(frontMatter.publishedAt), "MMMM d, yyyy");

  return (
    <Container>
      <motion.article
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="show"
        className="pt-4"
      >
        <motion.h2
          variants={FADE_UP_VARIANT}
          className="text-primary pt-3 text-xl font-medium tracking-tight md:text-2xl"
        >
          {frontMatter.title}
        </motion.h2>
        {frontMatter.summary ? (
          <motion.p
            variants={FADE_UP_VARIANT}
            className="text-foreground/70 pt-3 text-sm leading-relaxed"
          >
            {frontMatter.summary}
          </motion.p>
        ) : null}
        <motion.div
          variants={FADE_UP_VARIANT}
          className="text-foreground/50 mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs"
        >
          <span>1xcoder</span>
          <span aria-hidden className="text-foreground/30">
            ·
          </span>
          <time dateTime={frontMatter.publishedAt}>{dateLabel}</time>
          {frontMatter.readingTime?.text ? (
            <>
              <span aria-hidden className="text-foreground/30">
                ·
              </span>
              <span>{frontMatter.readingTime.text}</span>
            </>
          ) : null}
        </motion.div>

        <DottedSeparator className="my-8" />

        <motion.div
          variants={FADE_UP_VARIANT}
          className="prose prose-neutral prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
        >
          {children}
        </motion.div>

        <DottedSeparator className="mt-12 mb-4" />
      </motion.article>
    </Container>
  );
}
