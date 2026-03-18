import { useRef, useState } from "react";
import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-[#080806]">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel number="06" label="Contact" />
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight tracking-tight text-[#f0ece4]">
            Let's build{" "}
            <span className="text-[#d4a853] italic">something.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8a8078] text-lg leading-relaxed mb-10">
              I'm open to design collaborations, freelance projects, and
              conversations about creativity. Reach out — I respond thoughtfully.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="mailto:vibin@example.com"
                className="group flex items-center gap-5 p-5 bg-[#0e0c0a] border border-[#1e1c17] rounded-sm hover:border-[#d4a853]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#2a2825] rounded-sm text-[#d4a853] group-hover:bg-[#d4a853] group-hover:text-[#0a0a0a] transition-all duration-300">
                  @
                </div>
                <div>
                  <div className="text-[#4a4540] text-xs tracking-widest uppercase mb-1">
                    Email
                  </div>
                  <div className="text-[#c0bab2] text-sm group-hover:text-[#f0ece4] transition-colors">
                    vibin@example.com
                  </div>
                </div>
                <span className="ml-auto text-[#3a3830] group-hover:text-[#d4a853] group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-5 p-5 bg-[#0e0c0a] border border-[#1e1c17] rounded-sm hover:border-[#5b9bd5]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#2a2825] rounded-sm text-[#5b9bd5] font-bold text-sm group-hover:bg-[#5b9bd5] group-hover:text-[#0a0a0a] transition-all duration-300">
                  in
                </div>
                <div>
                  <div className="text-[#4a4540] text-xs tracking-widest uppercase mb-1">
                    LinkedIn
                  </div>
                  <div className="text-[#c0bab2] text-sm group-hover:text-[#f0ece4] transition-colors">
                    linkedin.com/in/vibin
                  </div>
                </div>
                <span className="ml-auto text-[#3a3830] group-hover:text-[#5b9bd5] group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            </div>

            {/* Availability badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-[#8db87a] rounded-full animate-ping opacity-60" />
                <div className="w-2 h-2 bg-[#8db87a] rounded-full relative" />
              </div>
              <span className="text-[#5a7050] text-xs tracking-widest uppercase">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[#4a4540] text-xs tracking-widest uppercase mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-[#0e0c0a] border border-[#1e1c17] text-[#f0ece4] placeholder-[#3a3830] px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[#4a4540] text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full bg-[#0e0c0a] border border-[#1e1c17] text-[#f0ece4] placeholder-[#3a3830] px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#d4a853] text-[#0a0a0a] font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-[#e8bc6a] transition-all duration-300 relative overflow-hidden group"
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    sent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  ✓ Message Sent!
                </span>
                <span
                  className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                    sent ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
