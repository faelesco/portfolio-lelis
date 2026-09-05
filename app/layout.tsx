import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: "Portfólio | Raphael Lelis",
  description: "Portfólio Pessoal e Trajetória Profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white transition-colors antialiased min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}