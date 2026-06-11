import React, { useState } from "react";
import { Users, Info, Shield, HelpCircle, Mail, MapPin, Phone, Sparkles, Loader2, Check } from "lucide-react";

interface ServiceOption {
  id: string;
  label: string;
  category: string;
}

export default function AboutView() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [monthlyBudget, setMonthlyBudget] = useState("$3,000 - $10,000");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);
  const [errorText, setErrorText] = useState("");

  const serviceOptions: ServiceOption[] = [
    { id: "ecom-mgmt", label: "Domestic Store Management", category: "E-Commerce" },
    { id: "perf-ads", label: "Paid Search & Performance Ads", category: "Marketing" },
    { id: "seo-masters", label: "Keyword SEO & Audit Mastery", category: "Marketing" },
    { id: "web-dev", label: "Custom Interface & Web Apps", category: "Development" },
    { id: "brand-art", label: "Visual Identity & Style Guide", category: "Creative" }
  ];

  const handleServiceChange = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorText("Name and email are required to generate your proposal.");
      return;
    }

    setLoading(true);
    setErrorText("");
    setSuccessResponse(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          brandName,
          selectedServices,
          monthlyBudget,
          message
        })
      });

      if (!response.ok) {
        throw new Error("Contact submission failed on server.");
      }

      const resData = await response.json();
      setSuccessResponse(resData);
    } catch (err) {
      console.error(err);
      setErrorText("Submission error. Please ensure the dev server is active and retry.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setSuccessResponse(null);
    setName("");
    setEmail("");
    setBrandName("");
    setSelectedServices([]);
    setMessage("");
  };

  return (
    <div className="w-full bg-[#050505] text-white py-12 md:py-20" id="about-view-container">
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
        
        {/* Core Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-none">
              <Info className="h-4 w-4 text-orange-500" />
              <span className="font-display text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
                Our Heritage &amp; Mission
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white skew-text leading-tight">
              A PARTNER ENGINEERED <br />
              FOR VELOCITY
            </h1>
            <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed">
              AgileSphere was founded to bridge the gap between abstract creative branding and modular retail engineering. We combine data-driven tracking, deep SEO architecture, and custom cloud-sync interfaces to help brands scale with surgical precision.
            </p>

            {/* Three Pillar list */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-orange-500 text-black text-xs font-black font-display">✓</span>
                <p className="text-sm font-semibold text-gray-300">Complete architectural transparency — no fluff, just pure conversion logs.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-orange-500 text-black text-xs font-black font-display">✓</span>
                <p className="text-sm font-semibold text-gray-300">Dynamic inventory synchronizers with continuous BuyBox protection endpoints.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-orange-500 text-black text-xs font-black font-display">✓</span>
                <p className="text-sm font-semibold text-gray-300">Precision audience targeting leveraging high-density first-party cookie data hubs.</p>
              </div>
            </div>
          </div>

          {/* Pillars Decorative Right Panel */}
          <div className="bg-[#0c0c0c] text-white p-8 rounded-none border border-white/10 shadow-2xl flex flex-col justify-between min-h-[340px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/5 rounded-full blur-3xl" />
            
            <div className="space-y-4 relative z-10">
              <h3 className="font-display text-xl uppercase tracking-wider text-white">Our Core Metrics</h3>
              <p className="text-xs text-gray-400 font-light">Conversion parameters optimized dynamically.</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-2 border-orange-500 pl-3">
                  <span className="text-3xl font-display font-black text-white block tracking-tight">$12M+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Total Managed GMV</span>
                </div>
                <div className="border-l-2 border-white/30 pl-3">
                  <span className="text-3xl font-display font-black text-white block tracking-tight">99.4%</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">SLA Sync Accuracy</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest relative z-10 font-bold">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-orange-500" /> Asia Services Group</span>
              <span className="flex items-center gap-1"><Phone className="h-4 w-4 text-orange-500" /> SLA Desk Open</span>
            </div>
          </div>
        </div>

        {/* PROPOSAL BUILDER / LEAD CAPTURE FORM */}
        <div id="proposal-builder-section" className="pt-10 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-white skew-text mb-3">
              REQUEST GROWTH PROPOSAL
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-lg mx-auto">
              Establish parameters, check needed optimization channels, and our team will synthesize a custom pricing roadmap.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#0c0c0c] p-6 md:p-10 rounded-none border border-white/10 shadow-2xl relative">
            
            {/* Success Response Board */}
            {successResponse ? (
              <div className="space-y-6 text-center py-6 animate-fadeIn">
                <div className="w-14 h-14 bg-neutral-950 border border-emerald-500/30 text-emerald-500 rounded-none flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="font-display uppercase tracking-tight text-white text-2xl">
                  Proposal Logged Securely
                </h4>
                <p className="font-sans text-sm text-gray-300 max-w-sm mx-auto font-light">
                  {successResponse.message}
                </p>

                {/* Secure Receipt Box */}
                <div className="bg-neutral-950 border border-white/10 rounded-none p-4 max-w-xs mx-auto text-center font-mono text-sm">
                  <span className="block text-[9px] uppercase text-gray-500 font-bold tracking-widest mb-1">Receipt Hash</span>
                  <span className="text-orange-500 font-extrabold text-lg tracking-wider">{successResponse.receiptCode}</span>
                </div>

                {/* Chronology Next Steps */}
                <div className="max-w-md mx-auto text-left space-y-3 pt-4 border-t border-white/10">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Lead Onboarding Next Steps:</span>
                  {successResponse.nextSteps?.map((step: string, i: number) => (
                    <div key={i} className="flex gap-3 text-xs leading-normal font-semibold">
                      <span className="flex items-center justify-center w-5 h-5 bg-orange-500 text-black font-display font-black rounded-none text-xs shrink-0">{i+1}</span>
                      <span className="text-gray-300 pt-0.5 font-light">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleResetForm}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-display font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-none cursor-pointer"
                  >
                    Build New Proposal
                  </button>
                </div>
              </div>
            ) : (
              /* The actual interactive proposal form */
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Your Full Name *</label>
                    <input 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mukul Sharma"
                      className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Business Email *</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mukul@example.com"
                      className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Brand Name</label>
                    <input 
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="LuxeWear Premium"
                      className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Estimated Monthly budget</label>
                    <select
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(e.target.value)}
                      className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-xs font-bold text-white focus:border-orange-500 focus:outline-none cursor-pointer"
                    >
                      <option value="$1,000 - $3,000">SLA Tier 1: $1,000 - $3,000 / month</option>
                      <option value="$3,000 - $10,000">SLA Tier 2: $3,000 - $10,000 / month</option>
                      <option value="$10,000+">SLA Tier 3: $10,000+ / month</option>
                    </select>
                  </div>
                </div>

                {/* Multiselect Service options checkbox grid */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Select Desired Scale Channels</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="service-box-checkboxes">
                    {serviceOptions.map((opt) => {
                      const isChecked = selectedServices.includes(opt.id);
                      return (
                        <label 
                          key={opt.id}
                          className={`flex items-center gap-3 p-3 rounded-none border cursor-pointer select-none transition-all ${
                            isChecked 
                              ? "bg-neutral-900 border-orange-500 text-white font-bold" 
                              : "bg-[#141414] border-white/10 text-gray-300 hover:bg-[#1a1a1a]"
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => handleServiceChange(opt.id)}
                            className="rounded-none border-white/10 bg-neutral-950 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 h-4 w-4 cursor-pointer"
                          />
                          <div className="text-left">
                            <span className="block text-[9px] uppercase font-bold text-gray-500 tracking-wider leading-none mb-0.5">{opt.category}</span>
                            <span className="text-xs">{opt.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Additional requirements (Optional)</label>
                  <textarea 
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specific marketplace targets, category concerns, key competitors..."
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none resize-none placeholder-gray-700"
                  />
                </div>

                {errorText && (
                  <div className="bg-red-950/40 border border-red-500/30 p-3 rounded-none text-xs font-semibold text-red-400">
                    {errorText}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-display font-black uppercase tracking-widest text-xs py-4.5 rounded-none shadow-lg shadow-orange-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:bg-neutral-800 disabled:text-gray-500"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin text-black" />
                      <span>SUBMITTING PARAMS...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4.5 w-4.5 text-blackfill-black text-black" />
                      <span>TRANSMIT PROPOSAL REQUEST</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
