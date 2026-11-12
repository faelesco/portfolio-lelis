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

const REVALIDATE_SECONDS = 60 * 60;

export async function getGithubProjects(username: string): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      console.error(`GitHub respondeu ${response.status} ao listar repositórios`);
      return [];
    }

    const repos: GithubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork && repo.topics?.includes("portfolio"))
      .slice(0, 10)
      .map((repo) => {
        const tags = repo.topics.filter((topic) => topic !== "portfolio");
        return {
          id: String(repo.id),
          title: repo.name.replace(/-/g, " "),
          description: repo.description ?? "",
          tags: tags.length > 0 ? tags : ["GitHub"],
          linkGithub: repo.html_url,
          linkDeploy: repo.homepage || undefined,
        };
      });
  } catch (error) {
    console.error("Falha ao buscar repositórios do GitHub", error);
    return [];
  }
}
