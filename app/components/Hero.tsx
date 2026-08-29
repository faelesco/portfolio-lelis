interface HeroProps {
  name: string;
  title: string;
  bio: string;
  availableForTheMarket?: boolean;
}

export function Hero({ name, title, bio, availableForTheMarket = true }: HeroProps) {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
        {name}
      </h1>
      <h2 className="mt-2 text-xl font-semibold text-blue-600 dark:text-blue-400">
        {title}
      </h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {bio}
      </p>
      {availableForTheMarket && (
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Disponível para novas oportunidades
        </div>
      )}
    </section>
  );
}