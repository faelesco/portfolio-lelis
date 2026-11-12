import Link from "next/link";
import { PORTFOLIO_DATA } from "./constants/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";

export function Footer() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Vamos construir <span className="text-accent">algo incrível.</span>
        </h2>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CopyEmailButton variant="primary" />
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Raphael Lelis</p>
          <nav aria-label="Redes" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/projects" className="hover:text-accent transition-colors">Projetos</Link>
            <Link href="/experience" className="hover:text-accent transition-colors">Experiência</Link>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
