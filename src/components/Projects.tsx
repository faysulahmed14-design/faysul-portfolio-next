import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          04 — Projects & Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Projects I&apos;ve <span className="text-gradient">Engineered.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3 max-w-2xl">
          Full-stack software applications, hardware robotics, and forensic terminal systems designed to solve practical problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <article
            key={proj.id}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col group relative"
          >
            {/* Number badge */}
            <span className="absolute top-4 right-4 text-xs font-mono text-[#66738b] z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Visual Header / Screenshot */}
            <div className="h-64 sm:h-72 p-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#101a36]/60 to-[#070b14]">
              {proj.image ? (
                <div
                  className={`w-[94%] h-[92%] rounded-2xl overflow-hidden border border-white/15 relative shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#7c96ff]/50 ${
                    proj.id === "neoventis" ? "bg-white" : "bg-[#0d1124]"
                  }`}
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      proj.id === "neoventis"
                        ? "object-cover object-top"
                        : proj.id === "obstacle-robot"
                        ? "object-cover object-center"
                        : "object-cover object-top"
                    }`}
                  />
                </div>
              ) : (
                /* Terminal Mockup for C-Detective */
                <div className="w-[88%] p-5 rounded-2xl border border-white/10 bg-[#0d0e1c]/90 shadow-2xl font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/70">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#7c96ff]" />
                      <span>C-Detective Terminal</span>
                    </div>
                    <span className="text-[10px] text-[#a778ff]">[SYS READY]</span>
                  </div>
                  <div className="py-4 space-y-2">
                    <div className="text-[#6ee7b7]">&gt; CASE_RECORD #104 PARSED</div>
                    <div className="text-white/60">Suspect Profiling: Active algorithms</div>
                    <div className="text-white/60">Data Persistence: C File Handling (Binary/Text)</div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8da2ff] font-semibold block mb-1">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-xs text-[#8e99ad] leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-3 py-1 rounded-lg border border-[#7c96ff]/20 bg-[#7c96ff]/10 text-[#b7c4ff] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/80 hover:text-[#92aaff] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                <Link
                  href={proj.live || "#contact"}
                  className="flex items-center gap-1 text-[#7c96ff] hover:text-[#b16dff] transition-colors ml-auto"
                >
                  <span>Project Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
