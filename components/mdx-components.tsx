// @ts-nocheck
"use client";

import Link from "next/link";
import NextImage from "next/image";

import StepLarge from "@/components/step-large";
import StepLargeCustom from "@/components/step-large-custom";
import HighlightBox from "@/components/highlight-box";
import StepCheck from "@/components/step-check";
import Divider from "@/components/divider";
import VideoDemo from "./video-demo";
import VideoComponent from "./video-component";
import Button from "./button";

const TweetEmbed = () => null;

const MdxImage = ({ width, height, alt = "", src, className, priority, ...props }) => {
  if (src && (typeof src === "string" && (src.endsWith(".svg") || src.includes(".svg")))) {
    return (
      <img
        src={src}
        alt={alt}
        className={className || "my-6 h-auto w-full rounded-xl border border-neutral-200 shadow-md dark:border-neutral-800"}
        loading="lazy"
        {...props}
      />
    );
  }

  if (width && height) {
    return (
      <NextImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        className={className || "my-6 h-auto w-full rounded-xl border border-neutral-200 shadow-md dark:border-neutral-800"}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className || "my-6 h-auto w-full rounded-xl border border-neutral-200 shadow-md dark:border-neutral-800"}
      {...props}
    />
  );
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={href} {...props}></Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: MdxImage,
  a: CustomLink,
  StepLarge,
  StepCheck,
  Tweet: TweetEmbed,
  VideoDemo,
  HighlightBox,
  Divider,
  StepLargeCustom,
  VideoComponent,
  Button,
};

export default MDXComponents;
