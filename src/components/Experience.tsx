import Image from "next/image";
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
          Executive leadership, research execution, youth career development, and operational data management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => {
          const isExecutive = exp.badge === "Executive Leadership";

          return (
            <div
              key={idx}
              className={`glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden ${
                isExecutive
                  ? "border-[#7c96ff]/40 bg-gradient-to-br from-[#0c101d]/90 via-[#111730]/80 to-[#0c101d]/90 shadow-2xl shadow-[#7c96ff]/10"
                  : ""
              }`}
            >
              {isExecutive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c96ff]/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  {exp.logo ? (
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/15 p-1.5 flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${
                        exp.company.toLowerCase().includes("skill")
                          ? "bg-white border-white/40 shadow-black/30"
                          : "bg-black/90 border-[#7c96ff]/40 shadow-[#7c96ff]/25"
                      }`}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#7c96ff]/10 border border-[#7c96ff]/20 flex items-center justify-center text-[#92a8ff]">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  )}

                  {exp.badge && (
                    <span
                      className={`text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border ${
                        isExecutive
                          ? "bg-[#7c96ff]/20 border-[#7c96ff]/50 text-[#b7c7ff] shadow-sm shadow-[#7c96ff]/30"
                          : "bg-[#7c96ff]/15 border-[#7c96ff]/30 text-[#9badff]"
                      }`}
                    >
                      {exp.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>

                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="text-xs text-[#92a8ff] font-semibold">{exp.company}</span>
                  {exp.tagline && (
                    <span className="text-[11px] text-[#79869e] italic">— {exp.tagline}</span>
                  )}
                </div>

                <span className="inline-block text-[11px] text-[#79869e] bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full mb-4">
                  {exp.period}
                </span>

                <p className="text-xs text-[#8e99ad] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
