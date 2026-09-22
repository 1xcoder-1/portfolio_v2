"use client";
import React from "react";
import Container from "./container";
import { LinkPreview } from "./link-preview";
import { Signature } from "./signature";

export const Footer = () => {
  return (
    <Container className="pb-10">
      <footer className="my-8 flex flex-col items-center gap-4">
        <Signature className="mx-auto h-9 w-auto text-foreground" inView={true} duration={2.2} />
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-foreground/40 text-center text-sm text-balance">
            Crafted with passion by Abdullah (1xcoder). Explore my{" "}
            <LinkPreview url="https://github.com/1xcoder-1">
              GitHub
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://1xcoder.vercel.app">
              portfolio
            </LinkPreview>{" "}
            creations.
          </p>
          <p className="text-foreground/40 text-sm text-balance">
            Website heavily inspired by{" "}
            <LinkPreview url="https://designerdada.com">
              Akash Bhadange
            </LinkPreview>
          </p>
        </div>
      </footer>
    </Container>
  );
};
