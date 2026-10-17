"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 py-8 bg-[#03050c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68758b]">
        <div>
          © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
        </div>
        <div className="text-center sm:text-left text-[#7d889a]">
          B.Sc in Software Engineering · Daffodil International University
        </div>
        <div className="font-mono text-[11px] text-[#7c96ff]">
          Next.js · Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
