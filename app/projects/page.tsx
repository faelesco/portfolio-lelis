import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { getGithubProjects } from "../services/github";

export default async function ProjetosPage() {
  const githubProjects = await getGithubProjects("faelesco");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-cyan-400 selection:text-black transition-colors">
      <main className="py-8">
        <Projects projects={githubProjects} />
      </main>
    </div>
  );
}