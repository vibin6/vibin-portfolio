import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Artworks from "./components/Artworks";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#f0ece4] min-h-screen font-body overflow-x-hidden">
      <Cursor />
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Artworks />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-[#4a4540] text-sm tracking-widest uppercase">
        © 2025 Vibin — Crafted with intention
      </footer>
    </div>
  );
}
