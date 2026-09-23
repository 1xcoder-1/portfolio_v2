import type { Metadata } from "next";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { InspirationList, type InspirationItem } from "@/components/inspiration-list";

export const metadata: Metadata = {
  title: "Inspiration - 1xcoder",
  description:
    "Curated collection of UI inspiration websites, design engineering tools, and creative digital craft.",
  alternates: {
    canonical: "/inspiration",
  },
};

export default async function InspirationPage() {
  const items: InspirationItem[] = [
    {
      title: "Godly",
      description: "Truly godly web design inspiration and creative direction",
      href: "https://godly.website",
      domain: "godly.website",
      category: "Websites",
    },
    {
      title: "Minimal Gallery",
      description: "Curated gallery of clean, minimal website design",
      href: "https://minimal.gallery",
      domain: "minimal.gallery",
      category: "Websites",
    },
    {
      title: "Recent Design",
      description: "Archive of recently launched standout digital designs",
      href: "https://recent.design",
      domain: "recent.design",
      category: "Websites",
    },
    {
      title: "Inspora Design",
      description: "High-quality UI design inspiration gallery",
      href: "https://www.inspora.design",
      domain: "inspora.design",
      category: "Websites",
    },
    {
      title: "Noiced",
      description: "Curated brand and digital design showcases",
      href: "https://noiced.com",
      domain: "noiced.com",
      category: "Websites",
    },
    {
      title: "Codrops",
      description: "Cutting edge web experiments and UI motion tutorials",
      href: "https://tympanus.net/codrops",
      domain: "tympanus.net",
      category: "Websites",
    },
    {
      title: "Design Engineer Tools",
      description: "Handy utilities and resources for design engineers",
      href: "https://designengineer.tools",
      domain: "designengineer.tools",
      category: "Tools",
    },
    {
      title: "Animate Icons",
      description: "Smooth interactive animated icons library for React",
      href: "https://animateicons.in",
      domain: "animateicons.in",
      category: "Design & Fonts",
    },
    {
      title: "Open Source UI",
      description: "Directory of open source UI components and design systems",
      href: "https://opensourceui.in",
      domain: "opensourceui.in",
      category: "Tools",
    },
    {
      title: "Kitbitz",
      description: "Curated design assets, UI kits, and creative components",
      href: "https://kitbitz.art",
      domain: "kitbitz.art",
      category: "Design & Fonts",
    },
    {
      title: "Kombai",
      description: "Figma to code engine with clean React output",
      href: "https://kombai.com",
      domain: "kombai.com",
      category: "Tools",
    },
    {
      title: "Scene AI",
      description: "Creative 3D scenes and generative visual art",
      href: "https://sceneai.art",
      domain: "sceneai.art",
      category: "Products",
    },
    {
      title: "Quiver AI",
      description: "Creative AI workflows and design utilities",
      href: "https://quiver.ai",
      domain: "quiver.ai",
      category: "Products",
    },
    {
      title: "Arlan's Vault",
      description: "Vault of creative bookmarks and inspiration",
      href: "https://www.arlan.me/vault",
      domain: "arlan.me",
      category: "Websites",
    },
    {
      title: "Curated Supply",
      description: "All the things I wish to own someday",
      href: "https://curated.supply",
      domain: "curated.supply",
      category: "Websites",
    },
    {
      title: "Mobbin",
      description: "World's largest mobile and web UI design patterns",
      href: "https://mobbin.com",
      domain: "mobbin.com",
      category: "Websites",
    },
    {
      title: "Land-book",
      description: "Curated landing pages and product showcase gallery",
      href: "https://land-book.com",
      domain: "land-book.com",
      category: "Websites",
    },
    {
      title: "Bauhaus Clock",
      description: "A minimal and beautiful clock screensaver",
      href: "https://bauhausclock.com",
      domain: "bauhausclock.com",
      category: "Design & Fonts",
    },
    {
      title: "Departure Mono",
      description: "Beautiful pixel mono font for code and design",
      href: "https://departuremono.com",
      domain: "departuremono.com",
      category: "Design & Fonts",
    },
    {
      title: "Dieter Rams",
      description: "My timeless source of design inspiration",
      href: "https://rams-foundation.org",
      domain: "rams-foundation.org",
      category: "People",
    },
    {
      title: "Rauno",
      description: "Masterclass in interaction design & craft",
      href: "https://rauno.me",
      domain: "rauno.me",
      category: "People",
    },
    {
      title: "Gavin Nelson",
      description: "Designer at Linear with exceptional craft",
      href: "https://nelson.co",
      domain: "nelson.co",
      category: "People",
    },
    {
      title: "Hardik Pandya",
      description: "Brilliant design leader and writer",
      href: "https://hvpandya.com",
      domain: "hvpandya.com",
      category: "People",
    },
    {
      title: "Hugeicons",
      description: "Using these icons in all of my projects",
      href: "https://hugeicons.com",
      domain: "hugeicons.com",
      category: "Design & Fonts",
    },
    {
      title: "Shadcn UI",
      description: "Modern accessible UI component primitives",
      href: "https://ui.shadcn.com",
      domain: "ui.shadcn.com",
      category: "Tools",
    },
  ];

  return (
    <>
      <Container className="min-h-screen">
        <div className="flex flex-col gap-5 pt-8 md:pt-10">
          <span className="text-foreground/45 font-mono text-[12px] font-medium tracking-[0.2em] uppercase">
            INSPIRATION
          </span>
          <p className="text-foreground text-base leading-relaxed">
            I love discovering great things, whether it's a beautifully designed product, an inspiring person, or a website I keep coming back to. This is my collection of those gems I find on the internet and in the real world. Everything here has caught my attention and stuck with me for one reason or another.
          </p>
        </div>
        <DottedSeparator className="my-8" />
        <InspirationList items={items} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}
