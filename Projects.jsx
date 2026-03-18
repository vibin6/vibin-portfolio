import { useRef } from "react";
import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    id: "01",
    title: "MindSpace",
    category: "Mobile App",
    description:
      "A mental wellness companion designed for students — featuring mood tracking, breathing exercises, and journaling. Focused on reducing friction so users actually show up for themselves.",
    tags: ["UI/UX", "Mobile", "Figma", "Prototyping"],
    accent: "#d4a853",
  },
  {
    id: "02",
    title: "Flux Dashboard",
    category: "Web Platform",
    description:
      "A real-time analytics dashboard for startup teams. Built for clarity under pressure — complex data visualized with minimal cognitive load and a dark-mode-first design system.",
    tags: ["Web", "Dashboard", "Design System", "React"],
    accent: "#5b9bd5",
  },
  {
    id: "03",
    title: "Wandr",
    category: "Travel UX",
    description:
      "A travel planning app that makes itinerary building feel like daydreaming. Gesture-first interactions, offline-first architecture, and a visual language that feels like a postcard.",
    tags: ["UI/UX", "Mobile", "Motion", "Maps"],
    accent: "#8db87a",
  },
];

function ProjectCard({ project, delay, inView }) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full bg-[#0e0c0a] border border-[#1e1c17] rounded-sm overflow-hidden hover:border-[#2e2c27] transition-all duration-500 flex flex-col">
        {/* Top bar */}
        <div
          className="h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: project.accent }}
        />

        {/* Project preview area */}
        <div className="relative h-48 bg-[#0a0907] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accent}10, transparent 70%)`,
            }}
          />
          <div className="flex flex-col items-center gap-2 relative z-10">
            <span
              className="font-display text-7xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none"
              style={{ color: project.accent }}
            >
              {project.id}
            </span>
            <span className="text-[#2a2825] text-xs tracking-widest uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <h3 className="font-display text-2xl font-black text-[#f0ece4] mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-[#6a6460] text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-[#2a2825] text-[#5a5450] tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 group/btn"
            style={{ color: project.accent }}
          >
            <span>Case Study</span>
            <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel number="03" label="Selected Work" />
          <div className="flex flex-wrap items-end gap-6 justify-between">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight tracking-tight text-[#f0ece4]">
              Projects that{" "}
              <span className="text-[#d4a853] italic">matter.</span>
            </h2>
            <p className="text-[#5a5450] text-sm max-w-xs">
              A curated selection of design and development work — each solving
              a real human need.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={i * 120}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
