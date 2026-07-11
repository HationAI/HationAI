import React from "react";
import Logo from "./Logo";

interface NavigationProps {
  onBookDemo: () => void;
}

export default function Navigation({ onBookDemo }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100"
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            id="logo-container"
          >
            <Logo size="md" />
            <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight ml-0.5">
              Hation
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8" id="nav-links">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-600 hover:text-slate-950 hover:underline hover:underline-offset-4 decoration-2 decoration-blue-600 transition-all cursor-pointer"
              id="nav-link-how-it-works"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-slate-600 hover:text-slate-950 hover:underline hover:underline-offset-4 decoration-2 decoration-blue-600 transition-all cursor-pointer"
              id="nav-link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-slate-600 hover:text-slate-950 hover:underline hover:underline-offset-4 decoration-2 decoration-blue-600 transition-all cursor-pointer"
              id="nav-link-faq"
            >
              FAQ
            </button>
          </div>

          {/* Call to Action Button */}
          <div id="nav-cta">
            <button
              onClick={onBookDemo}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              id="nav-book-demo-btn"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
