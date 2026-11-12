import type { Metadata } from "next";
import { Projects } from "../components/Projects";
import { SectionHeading } from "../components/SectionHeading";
import { getGithubProjects } from "../services/github";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos open source e demos publicados no GitHub por Raphael Lelis.",
};

export default async function ProjetosPage() {
  const githubProjects = await getGithubProjects("faelesco");

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        title="Projetos"
        description="Repositórios públicos com a tag portfolio no GitHub, com código-fonte e demonstrações quando disponíveis."
      />
      <Projects projects={githubProjects} />
    </main>
  );
}
