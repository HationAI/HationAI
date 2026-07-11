import React from "react";
import { motion } from "motion/react";
import { Send, Cpu, Calendar, Bell, ArrowRight, Laptop, Sparkles, CheckSquare, RefreshCw } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Customer Reaches Out",
      desc: "A customer visits your website or clicks a link after business hours to schedule an appointment or book a service.",
      icon: Laptop,
      bullets: ["Web chat widget", "SMS text prompt", "Social channel links"],
      color: "border-blue-100 bg-blue-50/20 text-blue-600",
    },
    {
      step: "02",
      title: "AI Answers Naturally",
      desc: "Hation immediately answers in seconds. Handles pricing verification, hours, and treatment costs.",
      icon: Cpu,
      bullets: ["Pricing checks", "Service descriptions", "Urgent escalation"],
      color: "border-indigo-100 bg-indigo-50/20 text-indigo-600",
    },
    {
      step: "03",
      title: "Appointment Booked",
      desc: "AI collects contact info, customer needs, and slots in the preferred business calendar time.",
      icon: Calendar,
      bullets: ["Name, Phone, Email", "Preferred times", "Staff assignment"],
      color: "border-purple-100 bg-purple-50/20 text-purple-600",
    },
    {
      step: "04",
      title: "Staff Notified",
      desc: "Your team arrives in the morning to an updated calendar, complete stats, and clear email logs.",
      icon: Bell,
      bullets: ["CRM updated", "Secure email confirmation", "SMS customer receipt"],
      color: "border-emerald-100 bg-emerald-50/20 text-emerald-600",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-1">
            <RefreshCw className="w-4 h-4 animate-spin-slow text-blue-500" />
            <span>Fully Automated Lead Acquisition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="how-title">
            Simple 4-Step Customer Journey
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="how-subtitle">
            How Hation intercepts missed calls, automates complex customer scheduling, and delivers qualified bookings straight into your local calendar.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative" id="how-grid">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-slate-200/60 transition-all group flex flex-col justify-between"
                id={`how-step-card-${idx}`}
              >
                {/* Visual connectors for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-2.5 z-10" id={`connector-${idx}`}>
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}

                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5" id={`how-header-${idx}`}>
                    <span className="font-mono text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/20 transition-colors">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Sub Bullet details */}
                <div className="border-t border-slate-100 pt-4 space-y-2 mt-auto" id={`how-bullets-${idx}`}>
                  {item.bullets.map((bull, bidx) => (
                    <div key={bidx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{bull}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
