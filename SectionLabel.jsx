export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[#d4a853] text-xs font-mono tracking-widest">
        {number}
      </span>
      <span className="w-8 h-px bg-[#d4a853]" />
      <span className="text-[#8a8078] text-xs tracking-[0.25em] uppercase">
        {label}
      </span>
    </div>
  );
}
