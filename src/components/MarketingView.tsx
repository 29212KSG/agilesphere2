import React, { useState } from "react";
import { AuditReportData } from "../types";
import { 
  Sparkles, Megaphone, CheckCircle, AlertTriangle, AlertCircle, 
  RefreshCw, BarChart2, Shield, Play, HelpCircle, Loader2, ArrowRight 
} from "lucide-react";

export default function MarketingView() {
  // Audit Form States
  const [brandName, setBrandName] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [url, setUrl] = useState("");
  const [industry, setIndustry] = useState("Fashion");
  const [competitors, setCompetitors] = useState("");
  const [challenge, setChallenge] = useState("Scaling organic reach and ad optimization");

  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<AuditReportData | null>(null);
  const [errorText, setErrorText] = useState("");
  const [loadingPhrase, setLoadingPhrase] = useState("Initializing database indices...");

  const loadingPhrases = [
    "Spinning up AgileSphere Audit Engine...",
    "Crawling catalog parameters & search index logs...",
    "Querying Gemini strategic knowledge graphs...",
    "Running structural SEO optimization audits...",
    "Formatting custom multi-point action steps..."
  ];

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim() || !brandDescription.trim()) {
      setErrorText("Please fill out both your brand name and general description.");
      return;
    }

    setIsLoading(true);
    setReport(null);
    setErrorText("");

    // Cycle descriptive loading phrases
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loadingPhrases.length;
      setLoadingPhrase(loadingPhrases[index]);
    }, 1800);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brandName,
          brandDescription,
          url,
          industry,
          competitors,
          challenge
        })
      });

      if (!response.ok) {
        throw new Error("Audit generation failed on proxy server.");
      }

      const data = await response.json();
      setReport(data);
    } catch (err) {
      console.error(err);
      setErrorText("Unable to generate AI Audit at this stage. Please check your credentials or retry.");
    } finally {
      clearInterval(interval);
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setReport(null);
    setErrorText("");
  };

  return (
    <div className="w-full bg-[#050505] text-white py-12 md:py-20" id="marketing-view-container">
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-none mb-4">
            <Megaphone className="h-4 w-4 text-orange-500" />
            <span className="font-display text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">{/* Space prefix */}
              Digital Marketing Hub
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white skew-text mb-4">
            PERFORMANCE MARKETING HUB
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
            Run ROI-maximizing campaigns. We combine search (SEM/SEO), targeted marketplace search amplification, and dynamic conversion funnels to drive hyper-growth organic traction.
          </p>
        </div>

        {/* AI AUDIT INTERACTIVE INTEGRATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form Panel: 5 Cols */}
          <div className="lg:col-span-12 xl:col-span-5 bg-[#0c0c0c] p-6 md:p-8 rounded-none border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-neutral-950 p-2 border border-white/10 rounded-none text-orange-500">
                <Sparkles className="h-5 w-5 fill-orange-500/10" />
              </div>
              <h3 className="font-display text-lg uppercase tracking-wider text-white">
                LIVE AUDIT QUESTIONNAIRE
              </h3>
            </div>

            <form onSubmit={handleRunAudit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Brand / Store Name *</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. LuxeWear Outfitters"
                  className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Store / Product Description *</label>
                <textarea 
                  rows={3}
                  value={brandDescription}
                  onChange={(e) => setBrandDescription(e.target.value)}
                  placeholder="Tell us what you sell, who your target audience is, and your general business archetype..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none resize-none placeholder-gray-700"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Website URL (Optional)</label>
                  <input 
                    type="url" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="luxewear.com"
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Primary Industry</label>
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-xs font-bold text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Fashion">Fashion &amp; Apparel</option>
                    <option value="Electronics">Consumer Electronics</option>
                    <option value="Home Decor">Home &amp; Kitchen</option>
                    <option value="FMCG">FMCG &amp; Retail</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Main Competitors</label>
                <input 
                  type="text" 
                  value={competitors}
                  onChange={(e) => setCompetitors(e.target.value)}
                  placeholder="e.g. Myntra brands, local competitors..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-sm font-semibold text-white focus:border-orange-500 focus:outline-none placeholder-gray-700"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Primary Growth Challenge</label>
                <select 
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 rounded-none px-3 py-2.5 text-xs font-bold text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Scaling organic reach and ad optimization">Improving Organic Rank &amp; SEO Coverage</option>
                  <option value="High CPC and declining Facebook Ad returns">High Facebook Ad Costs &amp; ROI Decline</option>
                  <option value="Low conversion and high checkout bounce rate">Cart Friction &amp; Customer Bounce</option>
                  <option value="Lack of product listings across Amazon and Flipkart">Cross-marketplace SKU synchronization</option>
                </select>
              </div>

              {errorText && (
                <div className="flex gap-2 bg-red-950/40 border border-red-500/30 p-3 rounded-none text-xs font-semibold text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorText}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-black font-display font-bold uppercase tracking-widest text-xs py-4.5 rounded-none shadow-lg shadow-orange-500/10 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:bg-neutral-800 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-black" />
                    <span>PARSING AUDIT PARAMETERS...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-black text-black" />
                    <span>RUN DIGITAL AUDIT</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Results Panel: 7 Cols */}
          <div className="lg:col-span-12 xl:col-span-7 bg-[#0c0c0c] p-6 md:p-8 rounded-none border border-white/10 shadow-2xl min-h-[480px] flex flex-col justify-center relative overflow-hidden">
            
            {/* Loading Overlay */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <Loader2 className="h-10 w-10 text-orange-500 animate-spin" />
                <h4 className="font-display uppercase tracking-wider text-white text-lg">AI CONFIGURATION MATRIX</h4>
                <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto font-light uppercase tracking-wider">
                  {loadingPhrase}
                </p>
                <div className="w-48 h-1 bg-neutral-950 rounded-none overflow-hidden border border-white/5">
                  <div className="h-full bg-orange-500 animate-pulse w-2/3" />
                </div>
              </div>
            )}

            {/* Default Placeholder */}
            {!isLoading && !report && (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto w-16 h-16 bg-neutral-950 border border-white/10 rounded-none flex items-center justify-center text-orange-500">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <h4 className="font-display uppercase tracking-wider text-white text-lg">DIAGNOSTIC REPORT AWAITS</h4>
                <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto leading-relaxed font-light">
                  Submit your brand attributes on the left. High-speed query endpoints integrated with <b>Gemini AI models</b> will evaluate your current conversion indices instantly.
                </p>
              </div>
            )}

            {/* Audit Report Generated View */}
            {!isLoading && report && (
              <div className="space-y-6 animate-fadeIn" id="ai-audit-report-body">
                
                {/* Header Metrics */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em]">AI DIAGNOSTIC CONSOLE</span>
                    <h4 className="font-display uppercase tracking-tight text-white text-2xl">
                      {brandName} Audit
                    </h4>
                  </div>
                  {/* Score badge & SEO level */}
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-950 border border-white/10 rounded-none px-4 py-2 text-center min-w-[100px]">
                      <span className="block text-[8px] uppercase font-bold text-gray-500 tracking-wider">Brand Score</span>
                      <span className="font-display text-xl font-black text-orange-500">{report.marketFitScore}/100</span>
                    </div>
                    <div className="bg-neutral-950 border border-white/10 rounded-none px-4 py-2 text-center min-w-[100px]">
                      <span className="block text-[8px] uppercase font-bold text-gray-500 tracking-wider">SEO Standing</span>
                      <span className={`font-display text-sm tracking-tight ${
                        report.seoRating === "Optimal" ? "text-emerald-500" :
                        report.seoRating === "Needs Attention" ? "text-orange-400" : "text-rose-500"
                      }`}>{report.seoRating?.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* AI Executive Summary */}
                <div>
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Executive Summary</h5>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed bg-neutral-950 p-4 rounded-none border border-white/10 italic font-light">
                    "{report.summary}"
                  </p>
                </div>

                {/* Checklist Vectors */}
                <div>
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Audited Recommendations</h5>
                  <div className="space-y-3">
                    {report.ecomChecklist?.map((vector, index) => (
                      <div key={index} className="flex gap-3 bg-neutral-950 border border-white/10 p-4 rounded-none">
                        <div className="shrink-0 mt-0.5">
                          {vector.status === "success" && <CheckCircle className="h-5 w-5 text-emerald-500" />}
                          {vector.status === "warning" && <AlertTriangle className="h-5 w-5 text-orange-500" />}
                          {vector.status === "error" && <AlertCircle className="h-5 w-5 text-rose-500" />}
                        </div>
                        <div>
                          <span className="block font-display text-xs uppercase text-white tracking-widest leading-none mb-1">
                            {vector.item}
                          </span>
                          <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
                            {vector.recommendation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sequential Action Plan */}
                <div>
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Tactical Integration Plan</h5>
                  <ol className="space-y-3">
                    {report.actionPlan?.map((stepStr, idx) => (
                      <li key={idx} className="flex gap-3 text-xs uppercase tracking-wider font-semibold">
                        <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-none bg-orange-500 text-black font-display font-black text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-gray-300 pt-0.5 leading-normal font-light">{stepStr}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Actions reset footer */}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Engine Active // Gemini Global</span>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 bg-neutral-950 font-display font-bold uppercase text-[10px] text-orange-500 hover:text-white hover:bg-neutral-900 border border-white/10 py-2.5 px-4 rounded-none transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset Audit
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
