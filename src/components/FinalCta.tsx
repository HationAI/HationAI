import React from "react";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

interface FinalCtaProps {
  onBookDemo: () => void;
}

export default function FinalCta({ onBookDemo }: FinalCtaProps) {
  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden" id="final-cta">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950/60 border border-blue-900/60 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider" id="final-badge">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>Secure Your Business Revenue Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto" id="final-title">
          Stop Losing Leads While Your Office Is Closed.
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" id="final-desc">
          Deploy Hation seamlessly. Let us handle after-hours inquiries, customer pre-qualification, and seamless appointment calendar bookings automatically.
        </p>

        <div className="pt-2 flex flex-col items-center justify-center gap-4" id="final-cta-btn-group">
          <button
            onClick={onBookDemo}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base sm:text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            id="final-cta-primary-btn"
          >
            <span>Book My Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Security / Compliance badges */}
        <div className="border-t border-slate-900 pt-8 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500 font-mono" id="final-trust-grid">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% HIPAA & GDPR Compliant</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <BadgeCheck className="w-4 h-4 text-emerald-500" />
            <span>Guaranteed Easy Setup</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <BadgeCheck className="w-4 h-4 text-emerald-500" />
            <span>Cancel Anytime, No Contracts</span>
          </div>
        </div>

      </div>
    </section>
  );
}
