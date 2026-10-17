import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personalInfo, stats } = portfolioData;

  const details = [
    { num: "01", label: "Full Name", value: personalInfo.name },
    { num: "02", label: "Institution", value: personalInfo.institution },
    { num: "03", label: "Program", value: "B.Sc in Software Engineering" },
    { num: "04", label: "Location", value: personalInfo.location },
    { num: "05", label: "Email", value: personalInfo.email },
    { num: "06", label: "Phone", value: personalInfo.phone },
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
          01 — Personal Profile
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Curious mind. <span className="text-gradient">Practical builder.</span>
        </h2>
        <p className="text-sm text-[#8e99ad] mt-3 max-w-2xl">
          Turning coursework, real-world problems, and innovative concepts into impactful software and research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: Bio & Stats */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#607fff] to-[#9965ff] flex items-center justify-center font-bold text-sm text-white mb-6 shadow-lg shadow-[#607fff]/25">
              FA
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Personal Profile</h3>
            <p className="text-sm text-[#8e99ad] leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
          </div>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.025] border border-white/10 text-center"
              >
                <b className="text-xl sm:text-2xl font-bold text-white block mb-1">
                  {stat.value}
                </b>
                <span className="text-[11px] text-[#737f94] block leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Quick Info List */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-center gap-5">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 pb-4 ${
                idx !== details.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="text-xs text-[#7f96ff] font-mono">{item.num}</span>
              <div className="min-w-[85px]">
                <small className="text-[11px] text-[#758197] block">{item.label}</small>
              </div>
              <div className="text-xs sm:text-sm font-medium text-white flex-1 break-words">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
