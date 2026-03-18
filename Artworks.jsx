import { useRef } from "react";
import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";

const artworks = [
  {
    id: 1,
    title: "Urban Geometry",
    medium: "Pencil on Paper",
    color: "#1a1710",
    accent: "#d4a853",
    pattern: "grid",
  },
  {
    id: 2,
    title: "Portraits in Motion",
    medium: "Ink Study",
    color: "#0f1218",
    accent: "#5b9bd5",
    pattern: "lines",
  },
  {
    id: 3,
    title: "Nature Abstracted",
    medium: "Charcoal",
    color: "#121510",
    accent: "#8db87a",
    pattern: "organic",
  },
  {
    id: 4,
    title: "Architectural Study",
    medium: "Technical Drawing",
    color: "#140f0a",
    accent: "#c84b31",
    pattern: "box",
  },
];

// SVG pattern generators
function Pattern({ type, accent }) {
  if (type === "grid")
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40 + 20} x2="200" y2={i * 40 + 20} stroke={accent} strokeWidth="0.5" />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={`v${i}`} x1={i * 40 + 20} y1="0" x2={i * 40 + 20} y2="200" stroke={accent} strokeWidth="0.5" />
        ))}
        <circle cx="100" cy="100" r="40" stroke={accent} strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="15" fill={accent} fillOpacity="0.3" />
      </svg>
    );

  if (type === "lines")
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={i % 2 === 0 ? 0 : 30}
            y1={i * 25}
            x2={i % 2 === 0 ? 200 : 170}
            y2={i * 25 + 20}
            stroke={accent}
            strokeWidth="0.8"
          />
        ))}
        <ellipse cx="100" cy="100" rx="50" ry="70" stroke={accent} strokeWidth="1" fill="none" />
      </svg>
    );

  if (type === "organic")
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
        <path
          d="M 60 100 Q 80 40 100 70 Q 120 100 140 60 Q 160 30 180 80 Q 160 130 140 110 Q 120 90 100 130 Q 80 160 60 140 Q 40 120 60 100 Z"
          stroke={accent}
          strokeWidth="1"
          fill={accent}
          fillOpacity="0.15"
        />
        <circle cx="80" cy="80" r="8" fill={accent} fillOpacity="0.4" />
        <circle cx="130" cy="120" r="12" fill={accent} fillOpacity="0.2" />
      </svg>
    );

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
      <rect x="40" y="40" width="120" height="90" stroke={accent} strokeWidth="1" fill="none" />
      <rect x="60" y="40" width="20" height="90" stroke={accent} strokeWidth="0.5" fill="none" />
      <line x1="40" y1="70" x2="160" y2="70" stroke={accent} strokeWidth="0.5" />
      <rect x="70" y="105" width="30" height="25" stroke={accent} strokeWidth="0.8" fill={accent} fillOpacity="0.2" />
    </svg>
  );
}

function ArtCard({ art, delay, inView }) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer"
        style={{ backgroundColor: art.color }}
      >
        {/* Border */}
        <div className="absolute inset-0 border border-[#1e1c17] group-hover:border-[#2e2c27] transition-colors duration-500 z-10 rounded-sm" />

        {/* Pattern */}
        <div className="absolute inset-0 p-8">
          <Pattern type={art.pattern} accent={art.accent} />
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${art.accent}18, transparent 70%)`,
          }}
        />

        {/* Overlay — shows on hover */}
        <div className="absolute inset-0 bg-[#0a0907]/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3 z-20">
          <div
            className="w-10 h-px transition-all duration-300"
            style={{ backgroundColor: art.accent }}
          />
          <span className="text-[#f0ece4] font-display font-bold text-lg tracking-tight">
            {art.title}
          </span>
          <span className="text-[#8a8078] text-xs tracking-widest uppercase">
            {art.medium}
          </span>
          <button
            className="mt-2 px-5 py-2 border text-xs tracking-widest uppercase transition-all duration-300"
            style={{ borderColor: `${art.accent}60`, color: art.accent }}
          >
            View Piece
          </button>
        </div>
      </div>

      {/* Caption below */}
      <div className="mt-3 px-1">
        <div className="font-display text-[#f0ece4] font-semibold text-sm">
          {art.title}
        </div>
        <div className="text-[#4a4540] text-xs tracking-wider mt-0.5">
          {art.medium}
        </div>
      </div>
    </div>
  );
}

export default function Artworks() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="artworks" ref={ref} className="py-28 px-6 bg-[#080806]">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel number="04" label="Artworks" />
          <div className="flex flex-wrap items-end gap-6 justify-between">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight tracking-tight text-[#f0ece4]">
              Sketches &{" "}
              <span className="text-[#d4a853] italic">observations.</span>
            </h2>
            <p className="text-[#5a5450] text-sm max-w-xs">
              Drawing sharpens my design eye. These works are where ideas live
              before they become interfaces.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artworks.map((art, i) => (
            <ArtCard key={art.id} art={art} delay={i * 100} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
