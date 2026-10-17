/* eslint-disable @next/next/no-img-element */
import { FileCode2, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills, coreCompetencies, spokenLanguages } = portfolioData;

  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;

    if (iconName.startsWith("http")) {
      return (
        <img
          src={iconName}
          alt="tech logo"
          className="w-7 h-7 object-contain"
          loading="lazy"
        />
      );
    }

    if (iconName === "code") {
      return <FileCode2 className="w-7 h-7 text-[#7c96ff]" />;
    }

    if (iconName === "office") {
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <rect x="2" y="2" width="9.5" height="9.5" rx="2" fill="#f25022" />
          <rect x="12.5" y="2" width="9.5" height="9.5" rx="2" fill="#7fba00" />
          <rect x="2" y="12.5" width="9.5" height="9.5" rx="2" fill="#00a4ef" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="2" fill="#ffb900" />
        </svg>
      );
    }

    if (iconName === "ai") {
      return (
        <div className="w-7 h-7 rounded-lg bg-[#a855f7]/15 flex items-center justify-center text-[#c084fc]">
          <Sparkles className="w-5 h-5" />
        </div>
      );
    }

    return null;
  };

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          03 — Skills & Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Technical Proficiency & <span className="text-gradient">Tools.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3">
          Core programming languages, AI-assisted tools, and engineering competencies.
        </p>
      </div>

      {/* Grid of 10 tech cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between min-h-[148px] relative group"
          >
            <span className="absolute top-4 right-4 text-[10px] font-mono text-[#535f75]">
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              {renderIcon(skill.icon)}
            </div>

            <div>
              <strong className="text-sm font-semibold text-white block">
                {skill.name}
              </strong>
              <span className="text-[11px] text-[#758197] block mt-0.5">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Core Competencies Strip */}
      <div className="glass-panel rounded-2xl p-5 mb-3 flex flex-wrap items-center gap-4 text-xs text-[#8e99ad]">
        <span className="font-semibold text-white uppercase text-[10px] tracking-wider">
          Core Competencies:
        </span>
        {coreCompetencies.map((comp, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-white/90 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7c96ff]" />
            <span>{comp}</span>
          </div>
        ))}
      </div>

      {/* Spoken Languages Strip */}
      <div className="glass-panel rounded-2xl p-5 flex flex-wrap items-center gap-4 text-xs text-[#8e99ad]">
        <span className="font-semibold text-white uppercase text-[10px] tracking-wider">
          Spoken Languages:
        </span>
        {spokenLanguages.map((lang, idx) => (
          <div key={idx} className="px-3 py-1 rounded-xl bg-white/[0.03] border border-white/10 text-white/90">
            <strong className="font-semibold text-[#92a8ff]">{lang.name}:</strong>{" "}
            <span className="text-[#8e99ad]">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
