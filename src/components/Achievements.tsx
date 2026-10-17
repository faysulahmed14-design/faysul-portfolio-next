import { Trophy, Globe, Award, Code2, Users, Rocket, Tent, Keyboard, Handshake } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-5 h-5 text-[#f59e0b]" />;
      case "globe":
        return <Globe className="w-5 h-5 text-[#38bdf8]" />;
      case "award":
        return <Award className="w-5 h-5 text-[#6ee7b7]" />;
      case "code":
        return <Code2 className="w-5 h-5 text-[#818cf8]" />;
      case "handshake":
        return <Handshake className="w-5 h-5 text-[#f472b6]" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-[#fb923c]" />;
      case "tent":
        return <Tent className="w-5 h-5 text-[#a3e635]" />;
      case "keyboard":
        return <Keyboard className="w-5 h-5 text-[#c084fc]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#38bdf8]" />;
      default:
        return <Award className="w-5 h-5 text-[#6ee7b7]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          06 — Achievements & Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Honors, Scholarships & <span className="text-gradient">Community Impact.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3 max-w-2xl">
          Recognition of leadership, scouting milestones, competitive programming, and extracurricular contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              {getIcon(item.icon)}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#8e99ad] leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
