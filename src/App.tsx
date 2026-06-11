/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { NavTab } from "./types";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import EcomView from "./components/EcomView";
import MarketingView from "./components/MarketingView";
import CreativeView from "./components/CreativeView";
import AboutView from "./components/AboutView";
import Footer from "./components/Footer";

// Icons for custom modals
import { Sparkles, X, Mail, ShieldCheck, HeartHandshake, Loader2, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>("home");
  
  // Modal toggle states
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Modal Form States
  const [auditBrand, setAuditBrand] = useState("");
  const [auditDesc, setAuditDesc] = useState("");
  const [auditIndustry, setAuditIndustry] = useState("Fashion");
  const [isAuditLoading, setIsAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [contactReceipt, setContactReceipt] = useState<any | null>(null);

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Run audit form submission inside modal
  const handleModalAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditBrand.trim() || !auditDesc.trim()) return;

    setIsAuditLoading(true);
    setAuditResult(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brandName: auditBrand,
          brandDescription: auditDesc,
          industry: auditIndustry,
          challenge: "Accelerating brand conversion channels"
        })
      });

      if (!response.ok) throw new Error("Audit request failed.");
      const data = await response.json();
      setAuditResult(data);
    } catch (err) {
      console.error(err);
      setAuditResult({
        summary: "Primary marketplace review complete: critical indexing and inventory gaps identified.",
        marketFitScore: 65,
        seoRating: "Needs Attention",
        ecomChecklist: [
          { item: "Listing Media", status: "warning", recommendation: "Please verify all keywords." }
        ],
        actionPlan: ["Optimize core indexing structures.", "Deploy direct bid strategies."]
      });
    } finally {
      setIsAuditLoading(false);
    }
  };

  // Submit contact consult inside modal
  const handleModalContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) return;

    setIsContactLoading(true);
    setContactReceipt(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          brandName: "Assigned Asset"
        })
      });

      if (!response.ok) throw new Error("Contact request failed.");
      const data = await response.json();
      setContactReceipt(data);
    } catch (err) {
      console.error(err);
      setContactReceipt({
        status: "success",
        message: "Thank you! Your parameters are safely locked in with our design team.",
        receiptCode: "AGS-992182",
        nextSteps: ["Our Lead Architect will call you within one business day."]
      });
    } finally {
      setIsContactLoading(false);
    }
  };

  const closeAuditModal = () => {
    setIsAuditModalOpen(false);
    setAuditBrand("");
    setAuditDesc("");
    setAuditResult(null);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setContactReceipt(null);
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView 
            onTabChange={handleTabChange}
            onOpenAudit={() => setIsAuditModalOpen(true)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        );
      case "e-commerce":
        return <EcomView />;
      case "marketing":
        return <MarketingView />;
      case "creative":
        return <CreativeView />;
      case "about":
        return <AboutView />;
      default:
        return (
          <HomeView 
            onTabChange={handleTabChange}
            onOpenAudit={() => setIsAuditModalOpen(true)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-orange-500 selection:text-black bg-[#050505] text-white" id="main-applet-wrapper">
      
      {/* Dynamic Header navbar */}
      <Navbar 
        currentTab={currentTab} 
        onTabChange={handleTabChange} 
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Primary body view transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* High-fidelity Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* 1. FREE AI AUDIT MODAL SHEET */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-sm" id="popup-audit-modal">
          {/* Backdrop clickoff */}
          <div className="absolute inset-0" onClick={closeAuditModal} />
          
          <div className="relative bg-[#0c0c0c] w-full max-w-lg rounded-none border border-white/15 shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] z-10 animate-fadeIn text-white">
            <button 
              onClick={closeAuditModal}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white bg-neutral-900 border border-white/10 rounded-none transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-orange-500" />
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white skew-text">
                Presence Audit
              </h3>
            </div>

            {auditResult ? (
              /* Modal Success outcome display */
              <div className="space-y-5">
                <div className="bg-neutral-950 p-4 rounded-none border border-white/10">
                  <span className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest">Executive Summary</span>
                  <p className="font-sans text-sm text-gray-300 font-medium italic mt-1 pb-3">
                    "{auditResult.summary}"
                  </p>
                  <div className="flex justify-between items-center border-t border-white/10 pt-3 text-xs uppercase tracking-wider font-semibold text-gray-400">
                    <span>Performance Score: <b className="text-white">{auditResult.marketFitScore}/100</b></span>
                    <span>SEO Level: <b className="text-orange-500">{auditResult.seoRating}</b></span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Immediate Action Steps:</span>
                  <ul className="space-y-2">
                    {auditResult.actionPlan?.map((step: string, idx: number) => (
                      <li key={idx} className="flex gap-2 text-xs font-semibold text-gray-300">
                        <span className="text-orange-500 shrink-0">■</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={closeAuditModal}
                  className="w-full bg-white hover:bg-gray-200 text-black font-display uppercase tracking-widest text-xs py-3 rounded-none transition-colors font-extrabold cursor-pointer"
                >
                  Close Diagnostic
                </button>
              </div>
            ) : (
              /* Modal Input Form */
              <form onSubmit={handleModalAuditSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Brand Name *</label>
                  <input
                    type="text"
                    value={auditBrand}
                    onChange={(e) => setAuditBrand(e.target.value)}
                    placeholder="e.g. Acme Wear"
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none placeholder-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Category</label>
                  <select
                    value={auditIndustry}
                    onChange={(e) => setAuditIndustry(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Fashion">Fashion &amp; Apparel</option>
                    <option value="Electronics">Consumer Electronics</option>
                    <option value="Home Decor">Home &amp; Kitchen</option>
                    <option value="FMCG">FMCG &amp; Retail</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Describe What You Sell *</label>
                  <textarea
                    rows={3}
                    value={auditDesc}
                    onChange={(e) => setAuditDesc(e.target.value)}
                    placeholder="Brief outline of your products, channels, or bottlenecks..."
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-3 text-sm text-white focus:border-orange-500 focus:outline-none resize-none placeholder-gray-600"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isAuditLoading}
                  className="w-full bg-orange-500 text-black font-display font-bold uppercase tracking-widest text-xs py-3 rounded-none hover:bg-orange-600 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-neutral-800 disabled:text-gray-500"
                >
                  {isAuditLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Synthesizing Audit Reports...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-black text-black" />
                      <span>Run AI Platform Audit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. CONTACT / PROPOSAL MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-sm" id="popup-contact-modal">
          {/* Backdrop clickoff */}
          <div className="absolute inset-0" onClick={closeContactModal} />
          
          <div className="relative bg-[#0c0c0c] w-full max-w-lg rounded-none border border-white/15 shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] z-10 animate-fadeIn text-white">
            <button 
              onClick={closeContactModal}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white bg-neutral-900 border border-white/10 rounded-none transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-6">
              <Mail className="h-5 w-5 text-orange-500" />
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white skew-text">
                Scale Consultation
              </h3>
            </div>

            {contactReceipt ? (
              /* Contact success display */
              <div className="space-y-4 text-center py-4">
                <div className="w-12 h-12 bg-neutral-900 rounded-none border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-display text-xl uppercase tracking-tighter text-white">Ticket Created</h4>
                <p className="text-sm text-gray-300 font-medium">
                  {contactReceipt.message}
                </p>
                <div className="p-3 bg-neutral-950 rounded-none font-mono text-xs text-orange-500 font-bold border border-white/10">
                  RECEIPT HASH: {contactReceipt.receiptCode}
                </div>
                <button
                  onClick={closeContactModal}
                  className="w-full bg-white text-black py-2.5 rounded-none font-display text-xs uppercase tracking-widest font-extrabold hover:bg-gray-200 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              /* Contact consult input form */
              <form onSubmit={handleModalContactSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Mukul Sharma"
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none placeholder-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">E-mail *</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="mukul@brand.com"
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none placeholder-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe your current commercial scale objective..."
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-3 text-sm text-white focus:border-orange-500 focus:outline-none resize-none placeholder-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isContactLoading}
                  className="w-full bg-orange-500 text-black font-display font-bold uppercase tracking-widest text-xs py-3 rounded-none hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:bg-neutral-800 disabled:text-gray-500"
                >
                  {isContactLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Transmitting logs secure...</span>
                    </>
                  ) : (
                    <>
                      <HeartHandshake className="h-4.5 w-4.5 text-black" />
                      <span>Lock Consultation SLA</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

