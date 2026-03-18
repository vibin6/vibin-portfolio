import { useRef } from "react";
import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";

const skills = [
  { name: "UI/UX Design", level: 90, icon: "◈" },
  { name: "Figma", level: 88, icon: "◉" },
  { name: "Wireframing", level: 85, icon: "⊞" },
  { name: "Prototyping", level: 82, icon: "◎" },
  { name: "React", level: 75, icon: "⟨⟩" },
  { name: "Problem Solving", level: 95, icon: "◆" },
];

const tools = [
  "Figma", "Adobe XD", "Illustrator", "Photoshop",
  "React", "JavaScript", "HTML/CSS", "Git",
  "Notion", "Miro", "Framer", "Procreate",
];

function SkillBar({ skill, delay, inView }) {
  return (
    <div
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-[#d4a853] font-mono text-sm">{skill.icon}</span>
          <span className="text-[#c0bab2] text-sm font-medium tracking-wide">
            {skill.name}
          </span>
        </div>
        <span className="text-[#4a4540] font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-px bg-[#1a1815] w-full relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#d4a853] to-[#d4a853]/40 transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section id="skills" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div
        className={`mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionLabel number="05" label="Skills" />
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight tracking-tight text-[#f0ece4]">
          Tools of the{" "}
          <span className="text-[#d4a853] italic">craft.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Skill bars */}
        <div className="space-y-7">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={i * 80}
              inView={inView}
            />
          ))}
        </div>

        {/* Right — tools cloud + quote */}
        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#0e0c0a] border border-[#1e1c17] rounded-sm p-8 mb-6">
            <p className="text-[#4a4540] text-xs tracking-widest uppercase mb-5">
              Tools I Use
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-[#141210] border border-[#242220] text-[#8a8078] text-xs rounded-sm hover:border-[#d4a853]/30 hover:text-[#d4a853] transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Philosophy quote */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853] to-transparent" />
            <p className="text-[#6a6460] text-base leading-relaxed italic">
              "The best design tool is empathy. Everything else is just software."
            </p>
            <p className="text-[#3a3830] text-xs tracking-widest uppercase mt-3">
              — Vibin's Design Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
