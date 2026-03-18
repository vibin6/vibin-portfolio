import { useState } from "react";

const links = ["About", "Projects", "Artworks", "Skills", "Contact"];

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#ffffff08]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight text-[#f0ece4] hover:text-[#d4a853] transition-colors duration-300"
        >
          VB.
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-[#8a8078] hover:text-[#f0ece4] text-sm tracking-widest uppercase transition-colors duration-300 relative group"
              >
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#d4a853] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block px-5 py-2 border border-[#d4a853]/40 text-[#d4a853] text-sm tracking-widest uppercase hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-all duration-300 rounded-sm"
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 pb-6 gap-5 bg-[#0d0d0d]/95 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-[#8a8078] hover:text-[#f0ece4] text-sm tracking-widest uppercase transition-colors w-full text-left"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
