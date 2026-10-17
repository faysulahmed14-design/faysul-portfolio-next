import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faysulahmed.vercel.app"),
  title: "Faysul Ahmed | Software Engineer & Researcher",
  description: "Faysul Ahmed — Software Engineering Student at Daffodil International University. Developer, Machine Learning Researcher, and Scout Leader.",
  keywords: [
    "Faysul Ahmed",
    "Software Engineer",
    "Daffodil International University",
    "CampusNova",
    "Machine Learning Research",
    "Portfolio",
    "Web Developer"
  ],
  authors: [{ name: "Faysul Ahmed" }],
  openGraph: {
    title: "Faysul Ahmed | Software Engineer & Researcher",
    description: "Building digital experiences that matter with code, AI and hardware.",
    url: "https://faysulahmed.vercel.app",
    siteName: "Faysul Ahmed Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 1060,
        alt: "Faysul Ahmed"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050711] text-[#f7f8ff] antialiased selection:bg-[#7c96ff]/30 selection:text-white">
        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#315bff]/15 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#a943ff]/15 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#6ee7b7]/10 rounded-full blur-[130px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
