"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7c96ff]/30 bg-[#7c96ff]/10 text-[#92a8ff] text-xs font-semibold w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7c96ff] animate-ping" />
            <span>Co-Founder & Co-CTO · Axiora Software Labs</span>
          </div>

          <div className="text-[11px] tracking-widest uppercase font-mono text-[#6f7c91] mb-2">
            <span>01</span> DESIGN · DEVELOP · DELIVER
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Building digital <br />
            <span className="text-gradient">experiences that matter.</span>
          </h1>

          <p className="text-base text-[#8e99ad] max-w-xl leading-relaxed mb-6">
            Hi, I&apos;m <strong className="text-white font-semibold">{personalInfo.name}</strong>. Co-Founder & Co-CTO at{" "}
            <span className="text-white font-semibold underline decoration-[#7c96ff]/50 decoration-2 underline-offset-4">Axiora Software Labs</span> and a Software
            Engineering student at DIU. Passionate about leading scalable architecture, innovative digital solutions, and machine learning research.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#778399] mb-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c96ff]" />
              <span>Daffodil International University (CGPA 3.89)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b16dff]" />
              <span>Savar, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7]" />
              <span>Open to Opportunities</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#607fff] to-[#9b65ff] shadow-xl shadow-[#607fff]/25 hover:shadow-[#607fff]/40 hover:-translate-y-1 transition-all"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#dce3f2] bg-white/[0.03] border border-white/10 hover:border-[#7c96ff]/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all"
            >
              <span>Research Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#98a4ba] hover:text-white hover:border-[#7c96ff] hover:bg-[#7c96ff]/10 hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#98a4ba] hover:text-white hover:border-[#7c96ff] hover:bg-[#7c96ff]/10 hover:-translate-y-0.5 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#98a4ba] hover:text-white hover:border-[#7c96ff] hover:bg-[#7c96ff]/10 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#98a4ba] hover:text-white hover:border-[#7c96ff] hover:bg-[#7c96ff]/10 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Executive Photo & Floating Cards */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-[300px] sm:w-[350px] aspect-[3/4]">
            {/* Ambient Photo Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#315bff]/30 to-[#a943ff]/30 blur-2xl transform scale-105" />

            {/* Photo Container */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden border border-white/15 bg-[#0f1424] shadow-2xl shadow-black/80">
              <Image
                src={personalInfo.avatar}
                alt={`Portrait of ${personalInfo.name}`}
                fill
                priority
                sizes="(max-width: 768px) 300px, 350px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge Top Right */}
            <div className="absolute -top-3 -right-3 sm:-right-6 glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl shadow-black/50 border border-white/15 animate-bounce [animation-duration:5s]">
              <div className="w-8 h-8 rounded-xl bg-[#7c96ff]/15 flex items-center justify-center text-[#92a8ff]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <b className="text-xs block text-white font-semibold">Axiora Software Labs</b>
                <small className="text-[10px] text-[#9badff] font-medium">Co-Founder & Co-CTO</small>
              </div>
            </div>

            {/* Floating Badge Bottom Left */}
            <div className="absolute -bottom-4 -left-3 sm:-left-6 glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl shadow-black/50 border border-white/15">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7] shadow-[0_0_12px_#6ee7b7]" />
              <div>
                <b className="text-xs block text-white font-semibold">Available</b>
                <small className="text-[10px] text-[#758198]">For collaboration & roles</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
