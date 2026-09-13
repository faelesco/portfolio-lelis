import { Project } from "../types/project";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
}

export async function getGithubProjects(username: string): Promise<Project[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
    cache: "no-cache"
  });

  if (!response.ok) {
    console.error("Erro ao buscar repositórios do GitHub");
    return [];
  }

  const repos: GithubRepo[] = await response.json();

  return repos
    .filter((repo) => !repo.fork)
    .filter((repo) => repo.topics && repo.topics.includes("portfolio"))
    .slice(0, 10)
    .map((repo) => ({
      id: String(repo.id),
      title: repo.name.replace(/-/g, " "),
      description: repo.description || "",
      tags: repo.topics.filter(t => t !== 'portfolio').length > 0 
        ? repo.topics.filter(t => t !== 'portfolio') 
        : ["GitHub"],
      linkGithub: repo.html_url,
      linkDeploy: repo.homepage || undefined,
    }));
}