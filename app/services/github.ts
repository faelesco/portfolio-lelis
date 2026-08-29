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
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
    cache: 'no-cache'
  });

  if (!response.ok) {
    console.error("Erro ao buscar repositórios do GitHub");
    return [];
  }

  const repos: GithubRepo[] = await response.json();

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: String(repo.id),
      title: repo.name.replace(/-/g, " "),
      description: repo.description || "Sem descrição cadastrada no GitHub.",
      tags: repo.topics && repo.topics.length > 0 ? repo.topics : ["GitHub"],
      linkGithub: repo.html_url,
      linkDeploy: repo.homepage || undefined,
    }));
}