import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfq96jah2H-e49_1H57N3goCboNw0Vgw1hyxs1LCFxIKLLhLA/viewform?usp=sharing&ouid=103729970888147869513";

  // If the URL is a Google Form URL, ensure we can make it look clean if possible
  const getEmbeddedUrl = (url: string) => {
    try {
      if (url.includes("docs.google.com/forms")) {
        // If it doesn't already have embedded=true, add or replace appropriately
        if (!url.includes("embedded=true")) {
          const separator = url.includes("?") ? "&" : "?";
          return `${url}${separator}embedded=true`;
        }
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  // Reset loading state when the modal opens
  useEffect(() => {
    if (isOpen) {
      setIframeLoading(true);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl h-[90vh] sm:h-[720px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 flex flex-col"
            id="modal-content"
          >
            {/* Modal Header */}
            <div className="bg-white px-6 py-5 border-b border-slate-100 flex items-center justify-between" id="modal-header">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 shadow-sm">
                  <Clock className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>Request Your Demo</span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100/80">
                      Walkthrough Request Form
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Quick 1-minute request form • Our team will follow up instantly
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close modal"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body: Form Frame */}
            <div className="flex-1 bg-slate-50 relative flex flex-col" id="modal-container-body">
              {/* FORM EMBED FRAME */}
              <div className="flex-1 w-full h-full relative" id="form-embed-container">
                {iframeLoading && (
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center space-y-3 z-20">
                    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs text-slate-500 font-bold tracking-wide animate-pulse">
                      Loading Live Request Form...
                    </p>
                  </div>
                )}

                <iframe
                  src={getEmbeddedUrl(DEFAULT_FORM_URL)}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-none"
                  onLoad={() => setIframeLoading(false)}
                  title="Schedule a demo or submit a request"
                  allow="geolocation; microphone; camera"
                  id="form-iframe"
                />
              </div>
            </div>

            {/* Modal Footer (Trust Badges / Action Points) */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" id="modal-footer">
              <div className="flex items-center gap-4 text-slate-600 font-semibold flex-wrap justify-center">
                <span className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">✓</span> No obligation to buy
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">✓</span> Guided live custom walkthrough
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">✓</span> Form responses handled securely
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">
                  Responses routed automatically
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
