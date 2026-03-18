import { useEffect, useRef } from "react";
import useInView from "../hooks/useInView";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#f0ece4 1px, transparent 1px), linear-gradient(90deg, #f0ece4 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Warm glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#d4a853]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#c84b31]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Pre-heading label */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-8 h-px bg-[#d4a853]" />
          <span className="text-[#d4a853] text-xs tracking-[0.25em] uppercase font-medium">
            Portfolio — 2025
          </span>
        </div>

        {/* Main name */}
        <h1
          className={`font-display text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-tight mb-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-[#f0ece4]">Vi</span>
          <span className="text-[#d4a853]">bin</span>
          <span className="text-[#f0ece4]">.</span>
        </h1>

        {/* Role */}
        <div
          className={`flex flex-wrap items-center gap-3 mb-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <span className="font-display text-[clamp(1rem,2.5vw,1.6rem)] text-[#8a8078] font-light tracking-wide">
            UI/UX Designer
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] mt-1" />
          <span className="font-display text-[clamp(1rem,2.5vw,1.6rem)] text-[#8a8078] font-light tracking-wide">
            Software Systems Student
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-[#5a5450] text-lg md:text-xl max-w-xl leading-relaxed mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          "Designing intuitive experiences with a blend of logic and art"
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group px-8 py-4 bg-[#d4a853] text-[#0a0a0a] font-semibold text-sm tracking-widest uppercase hover:bg-[#e8bc6a] transition-all duration-300 rounded-sm flex items-center gap-3"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 border border-[#f0ece4]/20 text-[#f0ece4] font-semibold text-sm tracking-widest uppercase hover:border-[#f0ece4]/60 hover:bg-[#f0ece4]/5 transition-all duration-300 rounded-sm"
          >
            Contact
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-0 right-0 hidden md:flex flex-col items-center gap-2 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <span className="text-[#4a4540] text-xs tracking-[0.2em] uppercase rotate-90 mb-4">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#4a4540] to-transparent" />
        </div>
      </div>

      {/* Floating number badge */}
      <div className="absolute top-1/2 right-6 md:right-16 -translate-y-1/2 hidden lg:flex flex-col items-end gap-2 opacity-10">
        <span className="font-display text-[10rem] font-black text-[#f0ece4] leading-none select-none">
          01
        </span>
      </div>
    </section>
  );
}
