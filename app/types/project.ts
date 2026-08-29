export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  linkGithub?: string;
  linkDeploy?: string;
}