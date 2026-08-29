export function Ticker() {
  const itens = ["NEXT.JS 15", "TYPESCRIPT", "REACT", "TAILWIND CSS", "FULL STACK", "DEVELOPER"];

  return (
    <div className="w-full overflow-hidden bg-cyan-400 py-2 font-black text-black uppercase tracking-widest text-xs select-none -rotate-1 my-8">
      <div className="flex w-max animate-marquee gap-8">
        {[...itens, ...itens, ...itens, ...itens].map((item, index) => (
          <span key={index} className="flex items-center gap-8">
            {item} <span>★</span>
          </span>
        ))}
      </div>
    </div>
  );
}