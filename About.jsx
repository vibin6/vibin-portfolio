import { useRef } from "react";
import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";

const stats = [
  { value: "3+", label: "Years of Design" },
  { value: "15+", label: "Projects" },
  { value: "∞", label: "Sketches" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SectionLabel number="02" label="About Me" />
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight tracking-tight text-[#f0ece4] mb-6">
              Logic meets{" "}
              <span className="text-[#d4a853] italic">artistry.</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8a8078] text-lg leading-relaxed mb-5">
              I'm a Software Systems student with a deep passion for UI/UX
              design. I approach every digital challenge as both an engineer and
              a visual thinker — mapping systems, then breathing life into them
              with purposeful design.
            </p>
            <p className="text-[#6a6460] text-base leading-relaxed mb-8">
              Beyond screens, I'm a sketch artist. Drawing trains my eye for
              proportion, contrast, and storytelling — instincts that feed
              directly into how I craft interfaces. I believe the best designs
              are felt before they're understood.
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {["Problem Solver", "Sketch Artist", "Systems Thinker", "Creative"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-[#2a2520] text-[#8a8078] text-xs tracking-widest uppercase rounded-full hover:border-[#d4a853]/50 hover:text-[#d4a853] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Stats + Visual */}
        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* Decorative block */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm bg-[#111009] border border-[#1e1c17] overflow-hidden flex items-center justify-center relative">
              {/* Abstract shapes */}
              <div className="absolute top-6 left-6 w-24 h-24 border border-[#d4a853]/20 rounded-full" />
              <div className="absolute top-10 left-10 w-12 h-12 bg-[#d4a853]/10 rounded-full" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border border-[#f0ece4]/5 rounded-full" />
              <div className="absolute bottom-0 right-0 w-40 h-1 bg-gradient-to-l from-[#d4a853]/30 to-transparent" />
              <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-[#d4a853]/30 to-transparent" />

              <div className="text-center relative z-10">
                <div className="font-display text-7xl font-black text-[#d4a853]/20 select-none">
                  VB
                </div>
                <p className="text-[#4a4540] text-xs tracking-widest uppercase mt-2">
                  Design · Code · Art
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px mt-px bg-[#1a1815]">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#0e0c0a] p-5 text-center hover:bg-[#121008] transition-colors"
                >
                  <div className="font-display text-3xl font-black text-[#d4a853] mb-1">
                    {value}
                  </div>
                  <div className="text-[#4a4540] text-xs tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
