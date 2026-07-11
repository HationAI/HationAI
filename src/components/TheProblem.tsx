import React from "react";
import { motion } from "motion/react";
import { PhoneMissed, Users, AlertTriangle, ArrowRight, ClipboardList, ShieldAlert, Ban, Building } from "lucide-react";

export default function TheProblem() {
  const stats = [
    {
      value: "25–35%",
      label: "Calls After Hours",
      desc: "of premium customer inquiries occur after your business has closed for the day.",
    },
    {
      value: "Up to 38%",
      label: "Calls Unanswered",
      desc: "of inbound business queries go unanswered during normal peak operating hours.",
    },
    {
      value: "90%+",
      label: "Voicemail Drop-off",
      desc: "of potential leads who reach a voicemail never leave a message, dialing a competitor instead.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100" id="the-problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5" id="problem-label">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
            <span>The Silent Revenue Leak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="problem-title">
            Every Missed Call Is a Lost Opportunity.
          </h2>
          <p className="mt-4 text-slate-600 text-base" id="problem-subtitle">
            While your staff handles on-site operations, customer service, and daily administration, your phone line is overflowing. Here is what is happening at most businesses.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20" id="problem-comparison">
          
          {/* Left Side: Receptionist Busy */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            id="problem-left-column"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold rounded-full mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>Overwhelmed Front Office</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Overflowing Front Desk</h3>
              <p className="text-sm text-slate-600 mb-6">
                Your team is full of human superheroes, but they can only be in one place at once. When multi-tasking hits its limits, the customer experience suffers.
              </p>
            </div>

            <div className="space-y-4" id="left-problem-items">
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <PhoneMissed className="w-4 h-4 animate-shake" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Phone Ringing Constantly</h4>
                  <p className="text-xs text-slate-500">Multiple callers ringing simultaneously while speaking to active customers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">In-Person Customer Waiting</h4>
                  <p className="text-xs text-slate-500">On-site visitors checking in, needing greeting and direct help.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Administrative Overload</h4>
                  <p className="text-xs text-slate-500">Entering data, processing paperwork, updating schedules, and handling logistics manually.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Phone goes unanswered */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950 text-slate-100 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-slate-800"
            id="problem-right-column"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950 text-red-400 border border-red-900 text-xs font-semibold rounded-full mb-4">
                <Ban className="w-3.5 h-3.5" />
                <span>The Unforgiving Market Reality</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unanswered Calls = Lost Sales</h3>
              <p className="text-sm text-slate-400 mb-6">
                Today’s customers expect instant, frictionless gratification. If your phone line is busy or rings out to voicemail, the cost is immediate.
              </p>
            </div>

            <div className="space-y-4 text-slate-300" id="right-problem-items">
              <div className="flex items-start gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-red-950 border border-red-900 flex items-center justify-center text-red-400 flex-shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Inquiry Goes Unanswered</h4>
                  <p className="text-xs text-slate-400">Calls either drop, get placed on hold indefinitely, or head straight to voicemail.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-red-950 border border-red-900 flex items-center justify-center text-red-400 flex-shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Lead Contacts Another Business</h4>
                  <p className="text-xs text-slate-400">Prospect immediately clicks the next available option in search results.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-red-950 border border-red-900 flex items-center justify-center text-red-400 flex-shrink-0">
                  <Ban className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">High-Value Client Permanently Lost</h4>
                  <p className="text-xs text-slate-400">Losing hundreds or thousands in potential customer lifetime value and recurring business.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-slate-100 pt-16" id="problem-statistics">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center bg-slate-50 border border-slate-100 rounded-xl p-5 hover:bg-white hover:shadow-md transition-all"
              id={`stat-card-${idx}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1" id={`stat-value-${idx}`}>
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-2" id={`stat-label-${idx}`}>
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed" id={`stat-desc-${idx}`}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
