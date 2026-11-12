import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { PORTFOLIO_DATA } from "./components/constants/portfolio";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero {...PORTFOLIO_DATA.personal} />
      <BentoGrid />
    </main>
  );
}
