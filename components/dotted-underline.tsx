"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type DottedUnderlineProps = {
  /** Radius of each dot in user units (default 1). */
  dotRadius?: number;
  /** Horizontal repeat of the pattern (default 6). */
  patternWidth?: number;
  /** Vertical repeat of the pattern (default 4). */
  patternHeight?: number;
  /** SVG strip height in px (default 4). */
  height?: number;
  /** Dot fill; defaults to currentColor (with text-neutral-400 when unset for contrast). */
  color?: string;
  /** Extra classes on the SVG (merged with positioning defaults). */
  className?: string;
};

export function DottedUnderline({
  dotRadius = 1,
  patternWidth = 6,
  patternHeight = 4,
  height: stripHeight = 4,
  color,
  className,
}: DottedUnderlineProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 block w-full",
        color == null && "text-neutral-400",
        className,
      )}
      style={{
        height: stripHeight,
        backgroundImage: `radial-gradient(circle at ${patternWidth / 2}px ${patternHeight / 2}px, ${color ?? "currentColor"} ${dotRadius}px, transparent ${dotRadius}px)`,
        backgroundSize: `${patternWidth}px ${patternHeight}px`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "0 0",
      }}
      aria-hidden="true"
    />
  );
}

