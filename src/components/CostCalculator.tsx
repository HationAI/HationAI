import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ArrowRight, TrendingDown, Landmark, Sparkles } from "lucide-react";

interface CostCalculatorProps {
  onBookDemo: () => void;
}

export default function CostCalculator({ onBookDemo }: CostCalculatorProps) {
  const [missedLeads, setMissedLeads] = useState(10);
  const [lifetimeValue, setLifetimeValue] = useState(2000);

  const annualLoss = missedLeads * lifetimeValue * 12;

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-900 relative overflow-hidden" id="cost-calculator">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950 text-blue-400 border border-blue-900 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider" id="calc-badge">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" id="calc-title">
            What Are Missed Calls Costing Your Business?
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base" id="calc-subtitle">
            Most business owners underestimate how much missed revenue escapes their voicemail every month. Adjust the parameters below to calculate your numbers.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" id="calc-container">
          
          {/* Sliders Area */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl" id="calc-sliders-panel">
            
            {/* Slider 1: Missed Leads */}
            <div className="space-y-3" id="slider-1-group">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-300" htmlFor="slider-missed-leads">
                  Missed Leads Per Month
                </label>
                <span className="text-2xl font-extrabold text-white font-mono">{missedLeads}</span>
              </div>
              
              <input
                id="slider-missed-leads"
                type="range"
                min="1"
                max="50"
                step="1"
                value={missedLeads}
                onChange={(e) => setMissedLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 Lead</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
                <span>50 Leads</span>
              </div>
            </div>

            {/* Slider 2: Average Lifetime Value */}
            <div className="space-y-3" id="slider-2-group">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-300" htmlFor="slider-lifetime-value">
                  Average Customer Lifetime Value (LTV)
                </label>
                <span className="text-2xl font-extrabold text-blue-400 font-mono">{formatCurrency(lifetimeValue)}</span>
              </div>
              
              <input
                id="slider-lifetime-value"
                type="range"
                min="500"
                max="5000"
                step="100"
                value={lifetimeValue}
                onChange={(e) => setLifetimeValue(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$500</span>
                <span>$1,000</span>
                <span>$2,000</span>
                <span>$3,000</span>
                <span>$4,000</span>
                <span>$5,000</span>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                LTV accounts for recurring purchases, consulting packages, services, or contracts over a typical lifecycle.
              </p>
            </div>

          </div>

          {/* Results Area */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-900/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden" id="calc-results-panel">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl" />
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-950 border border-red-900/40 text-red-400 text-[10px] font-bold rounded uppercase tracking-wider">
                <TrendingDown className="w-3 h-3" />
                <span>Lost Revenue</span>
              </div>
              
              <h3 className="text-slate-400 text-sm font-semibold tracking-wider uppercase font-mono">
                Potential Annual Revenue Lost
              </h3>
              
              {/* Dynamic Animated Text Indicator */}
              <div className="py-2">
                <motion.span
                  key={annualLoss}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight block font-mono"
                  id="calc-annual-loss-text"
                >
                  {formatCurrency(annualLoss)}
                </motion.span>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4" id="calc-results-desc">
                If Hation recovers just <span className="text-emerald-400 font-semibold">one missed lead per month</span> at your LTV of {formatCurrency(lifetimeValue)}, your business generates an additional <span className="text-emerald-400 font-semibold">{formatCurrency(lifetimeValue * 12)}</span> in annual revenue.
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-950">
              <button
                onClick={onBookDemo}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                id="calc-book-demo-btn"
              >
                <span>Recover this Revenue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <div className="text-center text-[10px] text-slate-500 mt-3 flex items-center justify-center gap-1 font-mono">
                <Sparkles className="w-3 h-3 text-yellow-500" />
                <span>Recovering 90%+ of after-hours missed leads.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
