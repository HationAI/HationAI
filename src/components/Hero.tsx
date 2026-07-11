import React from "react";
import { motion } from "motion/react";
import { Play, Shield, CalendarCheck, Clock, BadgeCheck, CheckCircle2, FileText, ChevronRight } from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden stripe-gradient py-16 md:py-28 border-b border-slate-100" id="hero-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 hover:bg-blue-100/60 border border-blue-100 text-blue-700 text-xs font-semibold rounded-full shadow-xs transition-colors duration-200 mb-6"
          id="hero-alert-badge"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span>Next-Gen Hation AI Receptionist</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-[1.1] max-w-2xl"
          id="hero-title"
        >
          Never Miss Another <br />
          <span className="text-blue-600 relative inline-block">
            Customer Call
            <span className="absolute bottom-1.5 left-0 w-full h-2 bg-blue-100/50 -z-10 rounded"></span>
          </span>{" "}
          Again.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-600 leading-relaxed max-w-xl mt-6"
          id="hero-description"
        >
          Your AI Receptionist answers every customer inquiry 24/7, books appointments, qualifies new leads, and supports your front office—so you stop losing revenue after hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 mt-8 flex flex-col items-center"
          id="hero-cta-group"
        >
          <button
            onClick={onBookDemo}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-base shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            id="hero-primary-btn"
          >
            <span>Book a Free Demo</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-slate-500 text-sm mt-4" id="hero-trust-indicators">
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
              <span className="font-medium text-slate-600">✓ Fully HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
              <span className="font-medium text-slate-600">✓ 24/7/365 active reception</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
              <span className="font-medium text-slate-600">✓ Fast and easy setup</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
