import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { PORTFOLIO_DATA } from "./components/constants/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-cyan-400 selection:text-black transition-colors flex flex-col justify-between">
      <div>
        <main>
          <Hero {...PORTFOLIO_DATA.personal} />
          <Ticker />
          
          {/* Grid de Navegação Principal na Home */}
          <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/projects"
              className="p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 transition-all group"
            >
              <h3 className="text-xl font-black uppercase text-zinc-900 dark:text-white group-hover:text-cyan-400 mb-2">
                Projetos →
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explore os repositórios públicos sincronizados diretamente do meu GitHub.
              </p>
            </Link>

            <Link 
              href="/experience"
              className="p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 transition-all group"
            >
              <h3 className="text-xl font-black uppercase text-zinc-900 dark:text-white group-hover:text-cyan-400 mb-2">
                Trajetória →
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Conheça meu histórico profissional, liderança técnica e stacks utilizadas.
              </p>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}