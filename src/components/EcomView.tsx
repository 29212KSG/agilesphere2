import React, { useState, useMemo } from "react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { 
  Building, TrendingUp, DollarSign, Users, Sparkles, Check, 
  ArrowRight, ShieldAlert, Award, ChevronDown, ChevronUp, BarChart3, RotateCw 
} from "lucide-react";

export default function EcomView() {
  const [revenue, setRevenue] = useState<number>(35000);
  const [conversionRate, setConversionRate] = useState<number>(1.8);
  const [platform, setPlatform] = useState<string>("Amazon");
  const [adSpendRatio, setAdSpendRatio] = useState<number>(15);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  // Revenue computations
  const calculations = useMemo(() => {
    // AgileSphere promises an average conversion rate lift multiplier of 1.45x (caps at 8%)
    const proposedConversion = Math.min(8.0, Number((conversionRate * 1.45).toFixed(2)));
    
    // Traffic simulated based on AOV (Assume average order value of $45)
    const aov = 45;
    const currentOrders = revenue / aov;
    const simulatedTraffic = currentOrders / (conversionRate / 100);
    
    // New orders based on proposed conversion rate
    const proposedOrders = simulatedTraffic * (proposedConversion / 100);
    const proposedRevenue = Math.round(proposedOrders * aov);
    const incrementalRevenue = Math.max(0, proposedRevenue - revenue);
    
    // Monthly management retainer fee (simulated client tier)
    const retainerFee = 2450;
    const monthlyROI = incrementalRevenue > 0 
      ? Number(((incrementalRevenue - retainerFee) / retainerFee * 100).toFixed(0))
      : 0;

    return {
      proposedConversion,
      proposedRevenue,
      incrementalRevenue,
      monthlyROI,
      retainerFee
    };
  }, [revenue, conversionRate, platform]);

  const toggleCaseStudy = (id: string) => {
    if (expandedCaseStudy === id) {
      setExpandedCaseStudy(null);
    } else {
      setExpandedCaseStudy(id);
    }
  };

  return (
    <div className="w-full bg-[#050505] text-white py-12 md:py-20" id="ecom-view-container">
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-none mb-4">
            <Building className="h-4 w-4 text-orange-500" />
            <span className="font-display text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              Domestic Account Management
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white skew-text mb-4">
            E-COMMERCE GROWTH CORE
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
            Dominate domestic marketplaces. We manage catalog health, continuous buybox protection, inventory stock alerts, and high-conversion copy across search interfaces with absolute surgical metrics.
          </p>
        </div>

        {/* 1. INTERACTIVE CALCULATOR */}
        <div className="bg-[#0c0c0c] rounded-none p-6 md:p-10 border border-white/10 shadow-2xl mb-16" id="revenue-growth-calculator">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Input Slider Controls */}
            <div className="flex-1 space-y-6">
              <div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Growth ROI Engine
                </span>
                <h3 className="font-display text-2xl uppercase tracking-tighter text-white">
                  CALCULATE YOUR MARKETPLACE POTENTIAL
                </h3>
              </div>

              {/* Slider 1: Monthly sales */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider">
                  <label className="font-sans font-bold text-gray-300">Current Monthly Sales</label>
                  <span className="font-mono font-bold text-orange-500 text-base">
                    ${revenue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full select-none accent-orange-500 cursor-pointer"
                  aria-label="Current Monthly Sales slider"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                  <span>$5,000</span>
                  <span>$100,050</span>
                  <span>$250,000+</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider">
                  <label className="font-sans font-bold text-gray-300">Current Listing Conversion</label>
                  <span className="font-mono font-bold text-orange-500 text-base">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full select-none accent-orange-500 cursor-pointer"
                  aria-label="Current Listing Conversion Slider"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                  <span>0.5% (Low)</span>
                  <span>2.5% (Avg)</span>
                  <span>5.0% (High)</span>
                </div>
              </div>

              {/* Input 3: Target Platform & Ad Ratio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-[10px] text-gray-400 uppercase tracking-widest">Primary Marketplace</label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2 text-xs font-semibold text-white focus:border-orange-500 focus:outline-none"
                    aria-label="Primary Marketplace selection"
                  >
                    <option value="Amazon">Amazon India</option>
                    <option value="Flipkart">Flipkart</option>
                    <option value="Meesho">Meesho Seller Hub</option>
                    <option value="Nykaa">Nykaa Premium</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-sans font-bold text-[10px] text-gray-400 uppercase tracking-widest">Avg. Ad Spend Ratio ({adSpendRatio}%)</label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={adSpendRatio}
                    onChange={(e) => setAdSpendRatio(Number(e.target.value))}
                    className="w-full select-none accent-orange-500 h-9 cursor-pointer"
                    aria-label="Average Ad Spend Ratio slider"
                  />
                </div>
              </div>
            </div>

            {/* Simulated Live Results Card */}
            <div className="w-full lg:w-[360px] bg-neutral-900 text-white p-6 rounded-none border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden" id="growth-engine-summary">
              
              <div>
                <h4 className="font-display text-[11px] font-bold text-orange-500 tracking-[0.2em] uppercase mb-4">
                  AGILESPHERE SIMULATOR
                </h4>
                
                {/* Proposed Stats list */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                    <span className="text-gray-400">Listing Conversion</span>
                    <span className="font-mono text-xs font-bold text-white">
                      {conversionRate}% → <b className="text-orange-500">{calculations.proposedConversion}%</b>
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                    <span className="text-gray-400">Optimized Monthly Store</span>
                    <span className="font-mono text-sm font-bold text-white">
                      ${calculations.proposedRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                    <span className="text-orange-500 font-bold">New Growth Revenue</span>
                    <span className="font-mono text-base font-extrabold text-orange-500">
                      +${calculations.incrementalRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Big ROI value */}
                <div className="text-center bg-black/40 rounded-none p-4 border border-white/10 mb-6">
                  <span className="block text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-1">Estimated Retainer ROI</span>
                  <span className="font-display text-5xl font-extrabold text-white tracking-tight leading-none">
                    {calculations.monthlyROI}%
                  </span>
                  <span className="block text-[10px] text-gray-500 mt-2 uppercase tracking-wider">Based on standard Retainer</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                  *Computations assume standard item category listing multiplier, SKU availability, and keyword search target conversion uplift.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CASE STUDIES ACCORDION SECTION */}
        <div id="case-studies-accordion">
          <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mb-2">VALIDATED HISTORY</span>
          <h3 className="font-display text-2xl md:text-4xl uppercase text-white tracking-tight mb-8 skew-text">
            CASE STUDIES & BENCHMARKS
          </h3>

          <div className="space-y-4">
            {CASE_STUDIES.map((study) => {
              const isExpanded = expandedCaseStudy === study.id;
              return (
                <div 
                  key={study.id}
                  className="bg-[#0c0c0c] rounded-none border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
                  id={`case-study-block-${study.id}`}
                >
                  {/* Top Accordion Trigger header */}
                  <button
                    onClick={() => toggleCaseStudy(study.id)}
                    className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="inline-flex items-center justify-center bg-neutral-900 text-orange-500 border border-white/10 px-3 py-1.5 rounded-none text-xs font-bold uppercase tracking-wider">
                        {study.metrics}
                      </span>
                      <h4 className="font-display uppercase tracking-wide text-lg text-white">
                        {study.client} — {study.category}
                      </h4>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Body Details transition */}
                  {isExpanded && (
                    <div className="border-t border-white/10 p-6 md:p-8 bg-neutral-950">
                      <div className="flex flex-col lg:flex-row gap-8 text-white">
                        {/* Summary & text details */}
                        <div className="flex-1 space-y-4">
                          <h5 className="font-display uppercase text-orange-500 text-xl tracking-tight">
                            {study.title}
                          </h5>

                          <div>
                            <span className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1">The Challenge</span>
                            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                              {study.challenge}
                            </p>
                          </div>

                          <div>
                            <span className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1">Scale Strategy</span>
                            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                              {study.solution}
                            </p>
                          </div>

                          <div>
                            <span className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1">The Growth Outcome</span>
                            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                              {study.outcome}
                            </p>
                          </div>
                        </div>

                        {/* Image Showcase */}
                        <div className="w-full lg:w-[320px]">
                          <div className="rounded-none overflow-hidden border border-white/10 bg-neutral-900 shadow-xl">
                            <img 
                              src={study.image} 
                              alt={`${study.client} showcase`} 
                              referrerPolicy="no-referrer"
                              className="w-full h-48 object-cover" 
                            />
                            <div className="p-4 text-center border-t border-white/10 bg-neutral-950">
                              <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">{study.metricsLabel}</span>
                              <span className="block font-display text-2xl uppercase tracking-tighter text-orange-500">{study.metrics}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
