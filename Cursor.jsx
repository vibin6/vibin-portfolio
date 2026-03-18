import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${mouseX}px`;
        dot.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = `${ringX}px`;
        ring.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    const handleHover = () => ring.current?.classList.add("scale-[2.5]", "border-[#d4a853]");
    const handleLeave = () => ring.current?.classList.remove("scale-[2.5]", "border-[#d4a853]");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="hidden md:block fixed w-1.5 h-1.5 bg-[#d4a853] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-none"
      />
      <div
        ref={ring}
        className="hidden md:block fixed w-8 h-8 border border-[#f0ece4]/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
      />
    </>
  );
}
