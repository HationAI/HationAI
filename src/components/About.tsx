import React from "react";
import { HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden" id="about-card">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl" />
          
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3 font-mono">
            Our Core Mission
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto leading-snug" id="about-title">
            We believe every customer deserves an immediate response, whether they reach out at 2 PM or 2 AM.
          </h2>
          
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto" id="about-description">
            Our mission is to help businesses capture every customer opportunity while dramatically reducing the daily telephone workload and stress on human front-desk reception teams.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono" id="about-footer">
            <Eye className="w-4 h-4 text-slate-400" />
            <span>Integrity • Accessibility • Security First</span>
          </div>
        </div>
      </div>
    </section>
  );
}
