import Link from "next/link";
import type { ReactNode } from "react";
import NavBar from "../components/navbar";
import "./globals.css";
import { orbitron, exo2 } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Indie Gamer",
  template: "%s | Indie Gamer",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex flex-col min-h-screen px-4 py-2 bg-orange-50">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="py-3 text-xs text-center border-t">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
