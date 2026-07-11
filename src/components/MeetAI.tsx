import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserCheck, CalendarCheck, HelpCircle, Check, Smartphone, CheckSquare } from "lucide-react";

export default function MeetAI() {
  const conversation = [
    { sender: "customer", text: "Hi, do you have any appointments available tomorrow?" },
    { sender: "ai", text: "Yes! We have openings for consultations and service bookings. Would you like to schedule one?" },
    { sender: "customer", text: "Tomorrow afternoon works." },
    { sender: "ai", text: "We have 2:30 PM available. Shall I reserve that slot for you?" },
    { sender: "customer", text: "Yes please, my name is Alex Mercer." },
    { sender: "ai", text: "Done Alex! You are confirmed for tomorrow at 2:30 PM. I've sent a calendar link and SMS confirmation. See you then! ✓" },
  ];

  // Auto loop the conversation
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= conversation.length) {
          return 1; // reset loop with delay
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: "Answers Instantly", desc: "No hold times. No busy signals. Inquiries answered in less than 2 seconds, 24/7." },
    { title: "Books Appointments", desc: "Integrates directly with your scheduling software (Google Calendar, Calendly, CRMs) to book appointments." },
    { title: "Qualifies Leads", desc: "Gathers customer needs, interest levels, contact details, and requirements before scheduling." },
    { title: "Handles Complex FAQs", desc: "Answers business policies, service offerings, parking details, pricing plans, and more." },
    { title: "Works 24/7/365", desc: "Operates nights, weekends, holidays, and peak hours when your human staff is busy." },
    { title: "Escalates When Needed", desc: "Flags high-priority requests or urgent customer inquiries, instantly messaging your team." },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100" id="meet-receptionist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3" id="meet-badge">
            Meet the Team Member Who Never Sleeps.
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="meet-title">
            Your Virtual Front Desk Office Assistant
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="meet-subtitle">
            More than a simple chat system. It’s an intelligent administrative assistant trained specifically to optimize your front office operations.
          </p>
        </div>

        {/* Features Grid (Simulator Removed) */}
        <div className="max-w-6xl mx-auto" id="meet-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="features-bento-grid">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all flex gap-3.5"
                id={`feature-card-${feat.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
