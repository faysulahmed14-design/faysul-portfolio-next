import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          02 — Work Experience
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Professional & <span className="text-gradient">Practical Experience.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3 max-w-2xl">
          Hands-on roles in research execution, youth career development, and operational data management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#7c96ff]/10 flex items-center justify-center text-[#92a8ff]">
                  <Briefcase className="w-5 h-5" />
                </div>
                {exp.badge && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#7c96ff]/15 border border-[#7c96ff]/30 text-[#9badff]">
                    {exp.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-1">{exp.title}</h3>
              <span className="text-xs text-[#92a8ff] font-medium block mb-2">{exp.company}</span>
              <span className="inline-block text-[11px] text-[#79869e] bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full mb-4">
                {exp.period}
              </span>

              <p className="text-xs text-[#8e99ad] leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
