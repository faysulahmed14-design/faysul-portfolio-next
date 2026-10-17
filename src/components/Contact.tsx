import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-[#9aabff]" />,
      label: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-[#9aabff]" />,
      label: "Phone / WhatsApp",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-[#9aabff]" />,
      label: "LinkedIn Profile",
      value: "Faysul Ahmed | LinkedIn",
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-[#9aabff]" />,
      label: "GitHub Profile",
      value: "faysulahmed14-design",
      href: personalInfo.github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & CTA */}
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-widest text-[#92a8ff] font-semibold mb-2 block">
            08 — Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            Let&apos;s connect & <br />
            <span className="text-gradient">collaborate.</span>
          </h2>
          <p className="text-sm text-[#8e99ad] leading-relaxed mb-8">
            Whether you want to discuss software engineering, machine learning research, student leadership, or exciting career opportunities, feel free to reach out.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#607fff] to-[#9b65ff] shadow-xl shadow-[#607fff]/25 hover:shadow-[#607fff]/40 hover:-translate-y-1 transition-all"
          >
            <span>Send Me an Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: Contact Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7c96ff]/10 border border-[#7c96ff]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <small className="text-[11px] text-[#778399] block mb-0.5">
                  {item.label}
                </small>
                <b className="text-xs font-semibold text-white block truncate group-hover:text-[#92aaff] transition-colors">
                  {item.value}
                </b>
              </div>
            </a>
          ))}

          {/* Location Card spanning full width */}
          <div className="sm:col-span-2 glass-panel rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#6ee7b7]/10 border border-[#6ee7b7]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#6ee7b7]" />
            </div>
            <div>
              <small className="text-[11px] text-[#778399] block mb-0.5">
                Current Location
              </small>
              <b className="text-xs font-semibold text-white block">
                {personalInfo.location}
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
