import React from "react";
import { motion } from "motion/react";
import { DollarSign, Landmark, PiggyBank, Scale, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";

export default function Roi() {
  const cases = [
    {
      title: "Premium Service Booking",
      value: "$4,000+",
      desc: "Recovering just a single premium service agreement pays for the software for multiple months.",
      icon: DollarSign,
      color: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      title: "Standard Service Retainer",
      value: "$5,000+",
      desc: "Capturing a single long-term client retainer pays for almost an entire year of administrative coverage.",
      icon: TrendingUp,
      color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    },
    {
      title: "Consultation / Booking",
      value: "$1,500+",
      desc: "Even standard consultation bookings cover the small setup costs within the first week of deployment.",
      icon: Landmark,
      color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100" id="roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold rounded-full mb-3" id="roi-badge">
            <PiggyBank className="w-3.5 h-3.5" />
            <span>Unmatched Financial Return</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="roi-title">
            One New Customer Often Pays for the Entire System.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="roi-subtitle">
            Hation isn’t a cost—it’s a dynamic revenue generator. See the math on typical high-value client acquisitions rescued by immediate response.
          </p>
        </div>

        {/* Case Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12" id="roi-cards-grid">
          {cases.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-slate-200/60 transition-all flex flex-col justify-between"
                id={`roi-card-${idx}`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${cs.color}`} id={`roi-icon-${idx}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{cs.title}</h3>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono mb-3" id={`roi-value-${idx}`}>{cs.value}</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-3 mt-3">
                  {cs.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
