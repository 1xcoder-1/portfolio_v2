import type { Metadata } from "next";
import Container from "@/components/container";
import { Companies } from "@/components/companies";
import { CopyEmailInline } from "@/components/copy-email-inline";
import { Focus } from "@/components/focus";
import { LinkPreview } from "@/components/link-preview";

import { DottedSeparator } from "@/components/separator";

export const metadata: Metadata = {
  title: "Sponsor - Abdullah (1xcoder)",
  description:
    "Partner with me to feature products and developer tools I genuinely use and recommend.",
  alternates: {
    canonical: "/sponsor",
  },
};

export default async function SponsorsPage() {
  return (
    <>
      <Container className="min-h-screen">
        <div className="flex flex-col gap-7 pt-8 md:pt-10">
          <span className="text-foreground/45 font-mono text-[12px] font-medium tracking-[0.2em] uppercase">
            SPONSOR
          </span>
          <div className="text-foreground text-base leading-relaxed">
            I build and share open-source tools, full-stack projects, and
            developer tutorials on{" "}
            <LinkPreview url="https://github.com/1xcoder-1">
              GitHub
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://linkedin.com/in/1xcoder">
              LinkedIn
            </LinkPreview>
            . I enjoy testing out and featuring great developer tools.
          </div>
          <div className="text-foreground/80 text-base leading-relaxed">
            If you think your software or product is a good fit, valuable and
            useful, please reach out to me at{" "}
            <CopyEmailInline>my email</CopyEmailInline>.
          </div>
        </div>
        <DottedSeparator className="my-8" />
        <Focus />
        <DottedSeparator className="my-8" />
        <Companies />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}
