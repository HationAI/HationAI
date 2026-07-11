import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Settings } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfq96jah2H-e49_1H57N3goCboNw0Vgw1hyxs1LCFxIKLLhLA/viewform?usp=sharing&ouid=103729970888147869513";
  
  const [currentUrl, setCurrentUrl] = useState(() => {
    return localStorage.getItem("hation_form_url") || DEFAULT_FORM_URL;
  });
  const [tempUrl, setTempUrl] = useState(currentUrl);

  // Keep tempUrl in sync with currentUrl if it changes
  useEffect(() => {
    setTempUrl(currentUrl);
  }, [currentUrl]);

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

  const handleSaveSettings = () => {
    const trimmed = tempUrl.trim();
    if (trimmed) {
      localStorage.setItem("hation_form_url", trimmed);
      setCurrentUrl(trimmed);
      setIframeLoading(true);
      setShowSettings(false);
    }
  };

  const handleResetSettings = () => {
    localStorage.removeItem("hation_form_url");
    setCurrentUrl(DEFAULT_FORM_URL);
    setIframeLoading(true);
    setShowSettings(false);
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
                {/* Settings Toggle Button */}
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                    showSettings
                      ? "bg-blue-50 text-blue-600 border-blue-200 shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
                  }`}
                  id="modal-settings-btn"
                >
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Connect My Form</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Settings Expandable Panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="bg-slate-50 border-b border-slate-100 overflow-hidden"
                  id="modal-settings-panel"
                >
                  <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                        Integrate Your Custom Request Form
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Input your custom Google Form or other calendar scheduling URL below to route appointments directly.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                      <div className="relative flex-1 min-w-[200px] sm:w-80">
                        <input
                          type="text"
                          value={tempUrl}
                          onChange={(e) => setTempUrl(e.target.value)}
                          placeholder="https://docs.google.com/forms/..."
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-800 font-medium transition-all shadow-xs"
                          id="settings-form-input"
                        />
                      </div>
                      <button
                        onClick={handleSaveSettings}
                        className="px-4 py-2 text-xs bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
                        id="settings-save-btn"
                      >
                        Apply Form
                      </button>
                      {currentUrl !== DEFAULT_FORM_URL && (
                        <button
                          onClick={handleResetSettings}
                          className="px-3 py-2 text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all font-semibold cursor-pointer"
                          id="settings-reset-btn"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
                  src={getEmbeddedUrl(currentUrl)}
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
