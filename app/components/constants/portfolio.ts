import { Project } from "../../types/project";
import { Experience } from "../../types/experience";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Raphael Lelis",
    title: "Tech Lead at Blip | FullStack Developer | Software Architecture",
    bio: "Com mais de 8 anos de experiência em programação, sou apaixonado por transformar desafios em soluções inovadoras com foco em arquitetura de software, automação de processos e liderança técnica.",
    availableForTheMarket: true,
  },
  meta: {
    title: "Portfólio Pessoal | Raphael Lelis",
    description: "Projetos e experiências desenvolvidos por Raphael Lelis.",
  },
  experiences: [
    {
      id: "1",
      position: "Líder Técnico",
      enterprise: "Blip",
      period: "Março de 2026 — Presente",
      companyDuration: "5 anos e 10 meses",
      description: [
        "Liderança técnica de hub de desenvolvimento, atendendo simultaneamente grandes contas (Pluxee, Veloe, Nespresso, Alelo e Safra).",
        "Definição de arquitetura de software, avaliação de soluções técnicas e alinhamento estratégico com stakeholders.",
        "Gestão de roadmap, priorização de demandas e mentoria/coaching contínuo para o time de engenharia."
      ],
      technologies: ["ARQUITETURA DE SOFTWARE", "LIDERANÇA", "AGILE", "AZURE DEVOPS", "BLIP"]
    },
    {
      id: "2",
      position: "Software Engineer — Pleno",
      enterprise: "Blip",
      period: "Março de 2024 — Abril de 2026",
      companyDuration: "5 anos e 10 meses",
      description: [
        "Atuação na conta GM Chevrolet cobrindo Brasil, Argentina, Colômbia, Equador, Chile e Peru.",
        "Desenvolvimento de integrações sistêmicas, soluções reutilizáveis de alta performance e automações.",
        "Configuração de pipelines CI/CD, documentação de APIs e acompanhamento de PDI de desenvolvedores."
      ],
      technologies: ["C#", "JAVASCRIPT", "CI/CD", "APIS REST", "AZURE DEVOPS", "BLIP"]
    },
    {
      id: "3",
      position: "Chatbot Developer — Júnior",
      enterprise: "Blip",
      period: "Novembro de 2020 — Março de 2024",
      companyDuration: "5 anos e 10 meses",
      description: [
        "Desenvolvimento e manutenção de aplicações de chatbots para marcas Stellantis (Fiat, Jeep e Ram).",
        "Integração de APIs de terceiros utilizando C# e desenvolvimento de interfaces em JavaScript.",
        "Análise de desempenho de contatos inteligentes e condução de demandas utilizando Kanban."
      ],
      technologies: ["JAVASCRIPT", "C#", "APIS REST", "KANBAN", "CHATBOTS"]
    },
    {
      id: "4",
      position: "Técnico de Suporte em TI",
      enterprise: "Hormigon Hect",
      period: "Junho de 2018 — Outubro de 2020",
      companyDuration: "2 anos e 5 meses",
      description: [
        "Análise e manutenção de servidores, suporte interno e infraestrutura de TI.",
        "Condução de treinamentos técnicos para equipes internas."
      ],
      technologies: ["INFRAESTRUTURA", "SERVIDORES", "SUPORTE TI"]
    },
    {
      id: "5",
      position: "Desenvolvedor",
      enterprise: "Dona Tecnologia",
      period: "Janeiro de 2018 — Junho de 2018",
      companyDuration: "6 meses",
      description: [
        "Desenvolvimento de soluções em C# para otimização de processos de projetos.",
        "Publicação e gerenciamento de aplicações na Google Play."
      ],
      technologies: ["C#", "ANDROID", "GOOGLE PLAY"]
    }
  ] as Experience[],
};