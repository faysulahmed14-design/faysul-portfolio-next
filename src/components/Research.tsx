import { Microscope, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Research() {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          05 — Research Collaborations
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Machine Learning & <span className="text-gradient">Research.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3 max-w-2xl">
          Ongoing academic inquiries applying artificial intelligence, time-series forecasting, and predictive modeling to healthcare and decision science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {research.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-[11px] font-semibold text-[#c996ff] bg-[#b16dff]/15 border border-[#b16dff]/30 px-3 py-1 rounded-full">
                  {item.domain}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#b16dff]/10 flex items-center justify-center text-[#c996ff]">
                  <Microscope className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-[#8e99ad] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#9badff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
