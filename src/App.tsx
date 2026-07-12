/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import VideoDemo from "./components/VideoDemo";
import SocialProof from "./components/SocialProof";
import TheProblem from "./components/TheProblem";
import CostCalculator from "./components/CostCalculator";
import MeetAI from "./components/MeetAI";
import HowItWorks from "./components/HowItWorks";
import FeatureGrid from "./components/FeatureGrid";
import BeforeAfter from "./components/BeforeAfter";
import Roi from "./components/Roi";
import Faq from "./components/Faq";
import About from "./components/About";
import FinalCta from "./components/FinalCta";
import DemoModal from "./components/DemoModal";
import Logo from "./components/Logo";
import { Heart, Mail } from "lucide-react";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 antialiased font-sans">
      
      {/* Sticky minimal header */}
      <Navigation onBookDemo={openDemoModal} />

      {/* Hero Section */}
      <Hero onBookDemo={openDemoModal} />

      {/* Video Demonstration Section */}
      <VideoDemo />

      {/* Social Proof */}
      <SocialProof />

      {/* The Problem Comparison view */}
      <TheProblem />

      {/* Cost Calculator panel */}
      <CostCalculator onBookDemo={openDemoModal} />

      {/* Meet AI Receptionist visual dialogue walkthrough */}
      <MeetAI />

      {/* How it Works steps block */}
      <HowItWorks />

      {/* 12-card Feature Bento Grid */}
      <FeatureGrid />

      {/* Before/After comparison columns */}
      <BeforeAfter />

      {/* ROI Case Treatment value block */}
      <Roi />

      {/* FAQ interactive 12-question accordion list */}
      <Faq />

      {/* About mission-driven card block */}
      <About />

      {/* Final dark CTA layout */}
      <FinalCta onBookDemo={openDemoModal} />

      {/* Interactive Scheduling Overlay Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />

      {/* Vercel Speed Insights */}
      <SpeedInsights />

      {/* Clean Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900" id="global-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2" id="footer-logo-and-contact">
            <div className="flex items-center gap-1.5" id="footer-logo">
              <Logo size="sm" />
              <span className="font-display font-extrabold text-base text-white tracking-tight ml-0.5">
                Hation
              </span>
            </div>
            <a 
              href="mailto:hation.chatbot@gmail.com" 
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors duration-200 mt-1"
              id="footer-contact-email"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500 hover:text-blue-400" />
              <span>hation.chatbot@gmail.com</span>
            </a>
          </div>
          
          <div className="text-xs text-center md:text-left space-y-1" id="footer-copy">
            <p>© {new Date().getFullYear()} Hation Corp. All rights reserved.</p>
            <p className="text-slate-600">Secure, encrypted, enterprise-grade business communication software.</p>
          </div>

          <div className="text-xs flex items-center gap-1 text-slate-600" id="footer-credits">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for Modern Forward-Thinking Businesses</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
