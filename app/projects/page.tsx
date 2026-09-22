import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects/projects-view";

export const metadata: Metadata = {
  title: "Projects & Works - Abdullah (1xcoder)",
  description:
    "Selected freelance and personal projects across Web Development, Mobile Apps, UI/UX Design, and Graphic Design.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
