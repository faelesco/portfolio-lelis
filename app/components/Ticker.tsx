export function Ticker() {
  const itens = ["NEXT.JS", "TYPESCRIPT", "JAVASCRIPT", "C#", "DOTNET", "LIDERANÇA", "GESTÃO DE PROJETOS", "AZURE", "KUBECTL", "SCRUM", "KANBAN"];

  return (
    <div className="w-full overflow-hidden bg-emerald-900 py-2.5 font-black text-zinc-100 uppercase tracking-widest text-xs select-none -rotate-1 my-8 border-y border-emerald-700">
      <div className="flex w-max animate-marquee gap-8">
        {[...itens, ...itens, ...itens, ...itens].map((item, index) => (
          <span key={index} className="flex items-center gap-8">
            {item} <span className="text-emerald-400">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}