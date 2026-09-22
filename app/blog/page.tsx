import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog - Abdullah (1xcoder)",
  description:
    "Notes on software engineering, full-stack architecture, and lessons learned while building.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <div className="flex flex-col gap-5 pt-4">
          <span className="text-foreground/45 font-mono text-[11px] font-medium tracking-[0.2em] uppercase">
            WRITING
          </span>
          <p className="text-foreground text-base leading-relaxed">
            Notes on software architecture, design engineering, freelancing, and
            things I learn while building modern applications.
          </p>
          <p className="text-foreground/80 text-base leading-relaxed">
            I occasionally write here to document technical breakdowns,
            patterns, and developer experiences.
          </p>
        </div>
        <DottedSeparator className="my-8" />
        <BlogIndex posts={posts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
