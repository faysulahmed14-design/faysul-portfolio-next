"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050711]/80 backdrop-blur-xl border-b border-[#9db1dd]/15 shadow-2xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#home"
          className="flex items-center gap-3 font-bold tracking-tight text-white group"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6688ff] to-[#a66aff] flex items-center justify-center font-bold text-xs shadow-lg shadow-[#6688ff]/25 group-hover:scale-105 transition-transform">
            FA
          </span>
          <span className="text-base font-semibold group-hover:text-[#92aaff] transition-colors">
            {portfolioData.personalInfo.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs text-[#8e99ad]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 transition-all relative hover:text-white ${
                activeSection === link.href.substring(1)
                  ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-[#7c96ff] after:to-[#b16dff] after:rounded-full"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personalInfo.cvUrl}
            download="Faysul_Ahmed_CV.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-[#7c96ff]/30 text-[#dce3f2] bg-[#7c96ff]/10 hover:bg-[#7c96ff]/20 hover:border-[#7c96ff]/60 transition-all hover:-translate-y-0.5"
          >
            <span>CV</span>
            <Download className="w-3.5 h-3.5 text-[#9badff]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080b16]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-sm transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-[#92aaff] font-semibold"
                  : "text-[#8e99ad] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
