import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Lelis 🇧🇷",
  description: "Portfólio Pessoal e Trajetória Profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white transition-colors antialiased min-h-screen flex flex-col relative">
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-100 dark:bg-zinc-950 bg-[radial-gradient(#d4d4d8_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#27272a_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}