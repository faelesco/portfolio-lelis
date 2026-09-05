import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { PORTFOLIO_DATA } from "./components/constants/portfolio";
import { BentoGrid } from "./components/BentoGrid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-cyan-400 selection:text-black transition-colors flex flex-col justify-between">
      <div>
        <main>
          <Hero {...PORTFOLIO_DATA.personal} />
          <Ticker />
          <BentoGrid />
        </main>
      </div>
    </div>
  );
}