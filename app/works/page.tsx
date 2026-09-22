import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects/projects-view";

export const metadata: Metadata = {
  title: "Works - Abdullah (1xcoder)",
  description:
    "Selected freelance and personal projects across Web Development, Mobile Apps, UI/UX Design, and Graphic Design.",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage() {
  return <ProjectsView />;
}
