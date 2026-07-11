import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does it replace my receptionist?",
      a: "No. Hation is designed to support your existing team, not replace them. It handles overflow calls during busy hours, captures leads during lunch breaks, and answers customer inquiries 24/7 after hours. Your staff can focus fully on high-value, on-site customer hospitality.",
    },
    {
      q: "Can clients schedule appointments?",
      a: "Yes! Hation integrates directly with your scheduling calendar or CRM platform to read real-time openings, offer available slots to clients, and book them directly into your workflow.",
    },
    {
      q: "Can it answer pricing and service questions?",
      a: "Yes. During onboarding, we program your specific pricing packages, discounts, services, and product catalogs. The AI will answer price-related questions, explain options, and collect requirements for your staff.",
    },
    {
      q: "Can it transfer difficult conversations?",
      a: "Absolutely. If a customer asks a highly specific technical question or requests to speak with a human immediately, the AI politely takes their contact details, notes the request, and instantly alerts your office staff via secure email or SMS.",
    },
    {
      q: "Can it integrate with my scheduling software?",
      a: "Yes. We support direct native sync with major calendars, CRMs, and scheduling systems, including Google Calendar, Outlook, Calendly, Hubspot, and custom web appointment interfaces.",
    },
    {
      q: "How long is setup?",
      a: "Our team handles the entire technical setup and custom calibration. We can have your custom assistant fully calibrated and deployed on your website or phone line rapidly.",
    },
    {
      q: "Can I customize responses?",
      a: "Yes, completely. During onboarding, we feed the AI your specific business guidelines, FAQs, office policies, pricing catalogs, and custom brand voices to ensure it sounds exactly like a member of your local team.",
    },
    {
      q: "What happens if it doesn't know the answer?",
      a: "If a customer asks a question outside of its custom knowledge base, it will never make up information. Instead, it will say: 'That is a great question. Let me take your name and contact info, and I will have one of our team experts message you back with the answer shortly.'",
    },
    {
      q: "Is my customer data secure?",
      a: "Yes, absolutely. We treat customer data security with the highest priority. All chat transcripts, phone records, and scheduling fields are fully encrypted in transit and at rest, adhering strictly to modern privacy, security, and administrative safeguards.",
    },
    {
      q: "Does it work via phone and SMS?",
      a: "Yes! While this web-based demo illustrates the online chat workflow, our underlying conversational core can be deployed directly to your actual business phone numbers and automated SMS intake lines.",
    },
    {
      q: "What is the cost?",
      a: "We offer tailored subscription models based on your business's call volume, branch locations, and custom CRM needs. Book a free 10-minute demo, and we will prepare a personalized quote and direct ROI outline for your business.",
    },
    {
      q: "Can I run it only after hours?",
      a: "Yes. You have full administrative control. You can toggle Hation to run 24/7/365, only during after-hours, or purely as an automatic overflow assistant when your main telephone lines are already occupied.",
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider" id="faq-badge">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="faq-subtitle">
            Find quick, detailed answers on how Hation integrates, handles security, and automates administrative business work.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4" id="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-200"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <span className="text-sm sm:text-base font-bold">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/40 pt-3" id={`faq-answer-${idx}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
