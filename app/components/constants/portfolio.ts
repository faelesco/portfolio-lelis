import { Project } from "../../types/project";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Raphael Lelis",
    title: "Tech Lead / Full Stack",
    bio: "Desenvolvendo soluções modernas e escaláveis com Next.js, React e TypeScript.",
    availableForTheMarket: true,
  },
  meta: {
    title: "Portfólio Pessoal",
    description: "Projetos e experiências desenvolvidos em React e TypeScript.",
  },
    projects: [
        {
        id: "1",
        title: "Plataforma de E-commerce",
        description: "Aplicação full-stack com carrinho de compras, checkout e integração de pagamentos.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        linkGithub: "https://github.com",
        linkDeploy: "https://meu-ecommerce.com",
        },
        {
        id: "2",
        title: "Gerenciador de Tarefas",
        description: "Quadro Kanban interativo para organização de fluxos de trabalho e produtividade.",
        tags: ["TypeScript", "React", "Zustand"],
        linkGithub: "https://github.com",
        },
    ] as Project[],
};