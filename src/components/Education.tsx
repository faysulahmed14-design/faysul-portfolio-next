import { GraduationCap, Mail, Phone, Quote } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const { education, references } = portfolioData;

  return (
    <section id="education" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Education List */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
              07 — Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Committed to <span className="text-gradient">Academic Excellence.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border-l-4 border-l-[#7c96ff] border-y border-r border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-[#7c96ff]" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-xs text-[#92a8ff] font-medium mb-2">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap items-center justify-between text-xs text-[#79869e] pt-2 border-t border-white/5">
                  <span>{edu.period}</span>
                  <span className="font-semibold text-[#6ee7b7]">
                    {edu.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Quote & References */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quote Card */}
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
            <Quote className="w-10 h-10 text-[#7c96ff]/20 absolute top-6 right-6 pointer-events-none" />
            <p className="italic text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-4">
              &ldquo;The best way to predict the future is to create it.&rdquo;
            </p>
            <small className="text-xs text-[#8291a9] font-mono block">
              — Peter Drucker
            </small>
          </div>

          {/* Academic References */}
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="text-xs uppercase tracking-wider text-[#92a8ff] font-semibold mb-5 block">
              Academic References
            </h3>

            <div className="space-y-4">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <h4 className="text-sm font-bold text-white mb-0.5">{ref.name}</h4>
                  <div className="text-[11px] text-[#92a8ff] mb-2">{ref.role}</div>
                  <div className="text-[11px] text-[#8e99ad] space-y-1">
                    <div>{ref.institution}</div>
                    <a
                      href={`mailto:${ref.email}`}
                      className="flex items-center gap-1.5 text-[#b3c5ff] hover:underline"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{ref.email}</span>
                    </a>
                    {ref.phone && (
                      <div className="flex items-center gap-1.5 text-[#8e99ad]">
                        <Phone className="w-3 h-3" />
                        <span>{ref.phone}</span>
                      </div>
                    )}
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
