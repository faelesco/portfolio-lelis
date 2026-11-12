import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PORTFOLIO_DATA } from "./components/constants/portfolio";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: PORTFOLIO_DATA.meta.title,
    template: "%s · Raphael Lelis",
  },
  description: PORTFOLIO_DATA.meta.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':true);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geist.variable} flex min-h-dvh flex-col bg-white font-sans text-zinc-900 antialiased selection:bg-accent selection:text-white dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <div id="conteudo" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
