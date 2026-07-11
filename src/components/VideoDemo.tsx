import React, { useState } from "react";
import { motion } from "motion/react";
import { PlayCircle, ShieldCheck, Mail, Database, Zap, FileVideo, Youtube } from "lucide-react";

export default function VideoDemo() {
  const [playMode, setPlayMode] = useState<"file" | "youtube">("youtube");

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100" id="video-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider" id="video-badge">
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Video of the Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" id="video-title">
            See Hation in Action
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base" id="video-subtitle">
            Watch a live walk-through of our intelligent receptionist handling a dynamic customer conversation, synchronizing databases, and automating notifications.
          </p>
        </div>

        {/* Video Wrapper & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" id="video-container">
          
          {/* Left Side: Video Player in a clean browser frame mockup */}
          <div className="lg:col-span-7 flex justify-center" id="video-player-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
              id="browser-frame-mockup"
            >
              {/* Browser bar with Mode Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full opacity-70" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-70" />
                  <div className="w-3 h-3 bg-green-500 rounded-full opacity-70" />
                  <div className="bg-slate-950 px-3 py-0.5 rounded text-[10px] text-slate-500 font-mono ml-4 select-none">
                    hation-demo.ai/play
                  </div>
                </div>

                {/* Player Mode Switcher */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 self-end sm:self-auto">
                  <button
                    onClick={() => setPlayMode("file")}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-md transition-all ${
                      playMode === "file"
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    title="Play uploaded MP4 file"
                    id="toggle-file-player"
                  >
                    <FileVideo className="w-3.5 h-3.5" />
                    <span>Uploaded Video</span>
                  </button>
                  <button
                    onClick={() => setPlayMode("youtube")}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-md transition-all ${
                      playMode === "youtube"
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    title="Play YouTube embed video"
                    id="toggle-youtube-player"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube Embed</span>
                  </button>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative aspect-video bg-slate-900" id="video-wrapper">
                {playMode === "file" ? (
                  <>
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      id="demo-native-video"
                      poster="/chatbot.jpg"
                    >
                      <source src="/hation_demo.mp4" type="video/mp4" />
                      <source src="/demo.mp4" type="video/mp4" />
                      <source src="/hation_demo.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Clear instructions overlay if video is not loaded yet */}
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm border border-slate-800/80 px-3 py-1.5 rounded-lg text-[10px] text-slate-400 font-mono flex items-center justify-between select-none pointer-events-none sm:text-xs">
                      <span>Playing: User Demo Video (hation_demo.mp4)</span>
                      <span className="text-blue-400">Upload to /public folder to play your own video</span>
                    </div>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/sduPEbEBBAs"
                    title="Hation Receptionist Video Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    id="demo-youtube-iframe"
                  ></iframe>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Highlight Features explained in the video */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8" id="video-details-column">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-950">Workflow Automation</h3>
              <p className="text-sm text-slate-500">
                Our conversational core does more than chat. It orchestrates a fully functional administrative workflow.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6" id="video-feature-items">
              
              <div className="flex gap-3 items-start" id="video-feat-1">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Instant Conversational AI</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Powered by custom-calibrated models that recognize context and details to answer natural-language queries.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start" id="video-feat-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Database & Google Sheets Sync</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Every contact lead, booking slot, and customer response is updated in real-time within your spreadsheet, CRM, or custom database.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start" id="video-feat-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Automated Email & SMS Follow-ups</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Immediately messages your staff with summaries and delivers text confirmations and calendar links to the client.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
