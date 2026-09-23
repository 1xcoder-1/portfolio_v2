import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { Work } from "@/components/work";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { BlogList } from "@/components/blog/blog-list";
import { WorkWithMe } from "@/components/work-with-me";
import { Quote } from "@/components/quote";

type HomeBlogPost = {
  slug: string;
  publishedAt: string;
  title: string;
};

export const metadata: Metadata = {
  title: "Abdullah (1xcoder) - Developer, Builder & Tech Explorer",
  description: "Abdullah, a developer, builder, and tech explorer passionate about creating modern digital experiences.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const posts = ((await getAllFilesFrontMatter("blog")) as HomeBlogPost[]).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <Companies />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
      <BlogList posts={posts} />
      <DottedSeparator className="my-10" />
      <Quote />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
