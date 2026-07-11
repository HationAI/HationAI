import React from "react";
import { motion } from "motion/react";
import {
  Clock,
  CalendarCheck,
  FileSpreadsheet,
  Users,
  RefreshCw,
  Mail,
  BarChart3,
  BookOpen,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "24/7 Availability",
      desc: "Answers calls, chats, and texts after hours, on weekends, and during busy lunch breaks instantly.",
      icon: Clock,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Appointment Booking",
      desc: "Synchronizes slots, finds openings, and schedules meetings, consults, or appointments on auto-pilot.",
      icon: CalendarCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Pricing & Quotes",
      desc: "Answers complex pricing inquiries, packaging queries, discounts, and provides instant estimations dynamically.",
      icon: FileSpreadsheet,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Lead Qualification",
      desc: "Asks smart qualification queries to understand customer requirements, budgets, and urgency levels.",
      icon: Users,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Calendar Sync",
      desc: "Integrates natively with Google Calendar, Outlook, and popular CRM/scheduling platforms. Zero double bookings.",
      icon: RefreshCw,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      title: "Email Notifications",
      desc: "Delivers comprehensive booking summaries, lead qualification details, and transcript reviews straight to your inbox.",
      icon: Mail,
      color: "text-pink-600 bg-pink-50 border-pink-100",
    },
    {
      title: "Analytics Dashboard",
      desc: "Provides clean charts, call conversion metrics, customer acquisition progress, and full interaction logs.",
      icon: BarChart3,
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Custom Knowledge Base",
      desc: "Tailored to your business's precise hours, product catalog, location directions, and custom policies.",
      icon: BookOpen,
      color: "text-violet-600 bg-violet-50 border-violet-100",
    },
    {
      title: "Multi-location Support",
      desc: "Intelligently routes clients to their preferred business branches, regional zones, and team member calendars.",
      icon: MapPin,
      color: "text-red-600 bg-red-50 border-red-100",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powering Administrative Front Desk Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="features-title">
            Engineered to Power Front Desks Globally
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="features-subtitle">
            Every feature is fine-tuned to remove booking friction, answer customer concerns immediately, and increase your business's sales conversion.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="features-grid-bento">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 border border-slate-200/40 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-slate-200/80 transition-all flex flex-col gap-4"
                id={`feat-card-${idx}`}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${feat.color}`} id={`feat-icon-container-${idx}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5" id={`feat-title-${idx}`}>
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed" id={`feat-desc-${idx}`}>
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
