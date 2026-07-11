import React from "react";
import { motion } from "motion/react";
import { Calendar, FileSpreadsheet, FileText, MessageSquare, HelpCircle, Mail } from "lucide-react";

export default function SocialProof() {
  const tools = [
    { name: "Google Calendar", icon: Calendar, color: "text-blue-500 bg-blue-50 border-blue-100" },
    { name: "Google Sheets", icon: FileSpreadsheet, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
    { name: "Notion", icon: FileText, color: "text-stone-700 bg-stone-50 border-stone-200" },
    { name: "WhatsApp Business", icon: MessageSquare, color: "text-green-500 bg-green-50 border-green-100" },
    { name: "Zendesk Helpdesk", icon: HelpCircle, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
    { name: "Secure Email", icon: Mail, color: "text-sky-500 bg-sky-50 border-sky-100" },
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-150 py-10" id="social-proof-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6" id="social-proof-title">
          Seamless Native Integrations & Workflows
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8" id="social-proof-badges">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow cursor-pointer`}
                id={`social-badge-${i}`}
              >
                <div className={`p-1 rounded-md ${tool.color} border`} id={`social-badge-icon-${i}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
