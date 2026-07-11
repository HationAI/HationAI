import React from "react";
import { motion } from "motion/react";
import { XCircle, CheckCircle, Smartphone, HelpCircle, Activity, Skull, Trophy } from "lucide-react";

export default function BeforeAfter() {
  const withoutItems = [
    { text: "Missed calls ringing out to voicemail constantly", desc: "No backup after-hours or during busy operational hours." },
    { text: "Relying on voicemail messages that are rarely left", desc: "Leads click the next competitor instead of leaving a recording." },
    { text: "Stressed, busy team facing workload burnout", desc: "Forced to juggle phone calls, customer requests, and daily tasks." },
    { text: "Losing high-value leads to local competitors", desc: "Missing out on premium service bookings or high-ticket contracts." },
    { text: "Manual scheduling and delayed call-backs", desc: "Calling people back hours or days later only to find they booked elsewhere." },
  ];

  const afterItems = [
    { text: "Every inquiry answered instantly, 24/7/365", desc: "No hold times, no busy lines. Customers receive support in 2 seconds." },
    { text: "Frictionless appointments booked on auto-pilot", desc: "Direct integration writes bookings straight into your calendar." },
    { text: "Happy, focused team handling in-person operations", desc: "No more phone ringing pressure; lets staff focus on on-site hospitality." },
    { text: "More high-value clients secured after hours", desc: "Capture high-LTV leads while your business is closed." },
    { text: "Frictionless booking synced instantly with your workflow", desc: "Your Google Calendar, CRMs, and scheduling calendars update live." },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100" id="before-after">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3" id="ba-badge">
            A New Standard for Business Admin
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="ba-title">
            Transforming Your Front Desk Operations
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="ba-subtitle">
            Say goodbye to missed customer calls and administrative friction. See how Hation upgrades your daily workflow.
          </p>
        </div>

        {/* Side by Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" id="ba-grid">
          
          {/* Column WITHOUT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 space-y-6"
            id="ba-without-column"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950 uppercase tracking-wide">WITHOUT Hation</h3>
                <p className="text-xs text-slate-500">Traditional, overflow-prone manual scheduling</p>
              </div>
            </div>

            <div className="space-y-6" id="ba-without-list">
              {withoutItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start" id={`ba-without-item-${idx}`}>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.text}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column AFTER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-slate-950 text-slate-100 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6"
            id="ba-after-column"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-900 flex items-center justify-center text-blue-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wide">AFTER Hation</h3>
                <p className="text-xs text-blue-400">Fully automated, 24/7 modern front office</p>
              </div>
            </div>

            <div className="space-y-6" id="ba-after-list">
              {afterItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start" id={`ba-after-item-${idx}`}>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{item.text}</h4>
                    <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
