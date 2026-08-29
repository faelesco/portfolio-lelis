import { PORTFOLIO_DATA } from "./components/constants/portfolio";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { getGithubProjects } from "./services/github";

export default async function Home() {
  const githubProjects = await getGithubProjects("faelesco");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header/>
      <Hero {...PORTFOLIO_DATA.personal}/>
      <Projects projects={githubProjects} />
    </main>
  );
}
