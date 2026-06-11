import React, { useState } from "react";
import { SERVICES, PROCESS_STEPS, TESTIMONIALS, INDUSTRIES } from "../data";
import { NavTab, Testimonial } from "../types";
import { 
  Store, Megaphone, Palette, Search, GitBranch, Rocket, 
  TrendingUp, Smartphone, Shirt, Home, ShoppingBag, ArrowRight, Star, Quote, ChevronRight, CheckCircle, ShieldAlert 
} from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export default function HomeView({ onTabChange, onOpenAudit, onOpenContact }: HomeViewProps) {
  const [hoveredVertical, setHoveredVertical] = useState<string | null>(null);

  // Helper to map string to lucide icons
  const renderIcon = (iconName: string, className: string = "h-6 w-6") => {
    switch (iconName) {
      case "Storefront": return <Store className={className} />;
      case "Megaphone": return <Megaphone className={className} />;
      case "Brush": return <Palette className={className} />;
      case "Search": return <Search className={className} />;
      case "GitBranch": return <GitBranch className={className} />;
      case "Rocket": return <Rocket className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      default: return <Store className={className} />;
    }
  };

  const renderIndustryIcon = (id: string, className: string = "h-9 w-9") => {
    switch (id) {
      case "electronics": return <Smartphone className={className} />;
      case "fashion": return <Shirt className={className} />;
      case "home-kitchen": return <Home className={className} />;
      case "fmcg": return <ShoppingBag className={className} />;
      default: return <ShoppingBag className={className} />;
    }
  };

  return (
    <div className="w-full relative bg-[#050505] text-white" id="home-view-container">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-[#050505]" id="hero-section">
        <div className="absolute inset-0 -z-10 bg-radial-gradient from-orange-500/5 via-transparent to-transparent opacity-70" />
        
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-none mb-8 border border-white/10" id="hero-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="font-sans text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] leading-none">
              Now Managing Over 100+ Premium Brands
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.4em] mb-4 text-orange-500 font-bold">DIGITAL GROWTH EXPERTS</div>

          {/* New Bold Typography Heading */}
          <h1 className="font-display text-5xl md:text-8xl lg:text-[7.5rem] uppercase tracking-tighter text-white skew-text leading-[0.9] mb-8 max-w-5xl mx-auto" id="hero-heading">
            SCALE WITH <br className="hidden md:inline" />
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px white" }}>PRECISION</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed" id="hero-subtitle">
            AgileSphere is your dedicated partner for end-to-end e-commerce management, high-impact digital marketing, and bespoke creative solutions designed for rapid commercial scale.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" id="hero-ctas">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto bg-orange-500 text-black font-display font-bold uppercase tracking-widest text-xs px-8 py-4.5 rounded-none shadow-lg shadow-orange-500/10 hover:bg-orange-600 transition-all duration-200 active:scale-95 cursor-pointer"
              id="hero-btn-primary"
            >
              Get Free Audit
            </button>
            <button
              onClick={() => onTabChange("e-commerce")}
              className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-display font-bold uppercase tracking-widest text-xs px-8 py-4.5 rounded-none hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
              id="hero-btn-secondary"
            >
              View Case Studies
            </button>
          </div>
        </div>

        {/* Hero Dashboard Floating Asset */}
        <div className="mt-16 md:mt-20 mx-auto max-w-[1000px] px-5 relative" id="hero-dashboard-mock">
          <div className="rounded-none overflow-hidden shadow-2xl border border-white/10 bg-[#0f0f0f] p-1.5 transition-all duration-300">
            <img 
              alt="Digital Growth Strategy Dashboard" 
              className="w-full h-auto aspect-video object-cover" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6R50Fq98c0-0ZejJCg-aFShI16pugXjYYMEJyOJfzjDq1alF8MGOX8ulvvwJ4hm8Jyh0iWEGRfKbo6QEi_tevE_cNSCz08LuclFkDX7-0H2GBeJff5aY2UgrIrkhyH_GmM-hkErXoyAy5pAlT0kOkImWXImC6ZoN2U3o2RpTnLDiDwk-tkVJxoNP5LdpddmbTsTQx6nZKRzBkicA4JZUtsATXu-jBHSV4O0Ipr1MnMF8LvlYG08lQgoVAPMhrbh3ENA0-itdKs4"
            />
          </div>
          {/* Decorative gradients surrounding */}
          <div className="absolute -top-8 -right-8 w-44 h-44 bg-orange-500/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-neutral-500/5 rounded-full blur-3xl -z-10" />
        </div>
      </section>

      {/* 2. LOGO BAR */}
      <section className="py-12 border-y border-white/10 bg-[#0a0a0a]" id="brand-logos-carousel">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <p className="text-center font-sans font-bold text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-8">
            Powering Growth Across Major Platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:opacity-100 transition-all duration-300">
            <span className="font-display text-3xl uppercase tracking-tighter text-white">AMAZON</span>
            <span className="font-display text-3xl uppercase tracking-tighter text-white">FLIPKART</span>
            <span className="font-display text-3xl uppercase tracking-tighter text-white font-light text-transparent" style={{ WebkitTextStroke: "1px white" }}>MEESHO</span>
            <span className="font-display text-3xl uppercase tracking-tighter text-white">NYKAA</span>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED GROWTH SOLUTIONS */}
      <section className="py-20 md:py-32 bg-[#050505]" id="solutions-section">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mb-3">SYSTEM PARAMETERS</span>
            <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight mb-4 skew-text">
              INTEGRATED SOLUTIONS
            </h2>
            <p className="font-sans text-sm text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
              We combine technical execution with critical content design to drive measurable organic conversion for your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="solutions-grid">
            {SERVICES.map((s) => {
              const bgClass = s.isDark 
                ? "bg-neutral-900 border border-white/15 text-white" 
                : "bg-[#0b0b0b] text-white border border-white/10 hover:border-white/25";
              
              const iconContainerClass = s.isDark
                ? "bg-orange-500 text-black"
                : "bg-neutral-900 text-orange-500 border border-white/10 group-hover:bg-orange-500 group-hover:text-black";

              return (
                <div 
                  key={s.id}
                  className={`group p-8 rounded-none transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${bgClass}`}
                  id={`solution-card-${s.id}`}
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-none flex items-center justify-center mb-6 transition-all duration-300 ${iconContainerClass}`}>
                      {renderIcon(s.icon, "h-6 w-6 stroke-[2px]")}
                    </div>

                    {/* Content */}
                    <h3 className={`font-display text-2xl uppercase mb-3 tracking-tight ${s.isDark ? "text-orange-500" : "text-white"}`}>
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm mb-6 leading-relaxed text-gray-400 font-light">
                      {s.description}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-3 mb-8">
                      {s.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-gray-300">
                          <CheckCircle className={`h-4 w-4 shrink-0 ${s.isDark ? "text-orange-500" : "text-orange-400"}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic Tab Switch anchor based on service type */}
                  <button
                    onClick={() => {
                      if (s.id === "domestic-mgmt") onTabChange("e-commerce");
                      else if (s.id === "digital-marketing") onTabChange("marketing");
                      else onTabChange("creative");
                    }}
                    className={`inline-flex items-center gap-2 font-display uppercase tracking-widest text-xs font-bold text-left ${
                      s.isDark ? "text-orange-500 hover:text-white" : "text-gray-300 hover:text-orange-500"
                    } group/link transition-colors cursor-pointer w-fit`}
                  >
                    <span>{s.linkText}</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GROWTH METRICS CONTAINER */}
      <section className="py-20 md:py-24 bg-black border-y border-white/10 relative overflow-hidden" id="growth-metrics">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl -mr-40 -mt-40" />
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" id="metrics-grid">
            
            <div className="space-y-2 transition-transform hover:scale-[1.02]">
              <div className="font-display text-6xl md:text-8xl text-orange-500 tracking-tight leading-none">100+</div>
              <h4 className="font-display text-sm uppercase tracking-widest text-gray-300">Brands Managed</h4>
              <p className="font-sans text-xs text-gray-500">Trusted by global market leaders</p>
            </div>

            <div className="space-y-2 transition-transform hover:scale-[1.02]">
              <div className="font-display text-6xl md:text-8xl text-white tracking-tight leading-none">50%</div>
              <h4 className="font-display text-sm uppercase tracking-widest text-gray-300">Avg. Sales Growth</h4>
              <p className="font-sans text-xs text-gray-500">Data-driven optimization results</p>
            </div>

            <div className="space-y-2 transition-transform hover:scale-[1.02]">
              <div className="font-display text-6xl md:text-8xl text-orange-500 tracking-tight leading-none">24/7</div>
              <h4 className="font-display text-sm uppercase tracking-widest text-gray-300">Expert Support</h4>
              <p className="font-sans text-xs text-gray-500">Round-the-clock expert monitoring</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PROCESS */}
      <section className="py-20 md:py-32 bg-[#050505]" id="process-section">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mb-3">EXECUTION CORE</span>
            <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight mb-4 skew-text">
              STRATEGIC DESIGN PROCESS
            </h2>
            <p className="font-sans text-sm text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
              A proven brutalist framework engineered to scale client presence with speed and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative" id="process-grid">
            {PROCESS_STEPS.map((p, idx) => (
              <div key={idx} className="text-center flex flex-col items-center bg-[#0a0a0a] p-8 rounded-none border border-white/10 hover:border-orange-500 transition-colors" id={`process-step-${p.step}`}>
                {/* Icon Container */}
                <div className="w-16 h-16 bg-neutral-900 border border-white/10 rounded-none flex items-center justify-center mb-6">
                  {renderIcon(p.icon, "h-6 w-6 text-orange-500")}
                </div>
                {/* Heading */}
                <h4 className="font-display text-lg uppercase tracking-wider text-white mb-2">
                  {p.step}. {p.title}
                </h4>
                {/* Description */}
                <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-[200px] font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT SUCCESS STORIES */}
      <section className="py-20 md:py-28 bg-[#090909] border-y border-white/10" id="testimonials-section">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mb-3">TRUST RATIO</span>
            <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight mb-4 skew-text">
              CLIENT BENCHMARKS
            </h2>
            <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto font-light">
              Validated milestones accomplished by active retail brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-[#050505] p-8 rounded-none border border-white/10 shadow-sm flex flex-col justify-between hover:border-white/20 transition-all"
                id={`testimonial-card-${t.id}`}
              >
                <div>
                  {/* Top user profile header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-neutral-900 border border-white/10 text-orange-500 rounded-none flex items-center justify-center font-bold font-display text-lg uppercase">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-display uppercase text-white text-base tracking-wide">{t.brand}</div>
                      <div className="font-sans text-[10px] text-gray-500 uppercase tracking-widest">{t.category}</div>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="font-sans text-gray-300 text-sm leading-relaxed italic mb-6 font-light">
                    "{t.text}"
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-orange-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY EXPERTISE */}
      <section className="py-20 md:py-32 bg-[#050505]" id="expertise-section">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mb-3">INDUSTRIES LOADED</span>
            <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight mb-4 skew-text">
              MARKET DOMAIN MATRIX
            </h2>
            <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto font-light">
              Engineered ecosystems ready for various domestic markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="expertise-grid">
            {INDUSTRIES.map((ind) => {
              const isHovered = hoveredVertical === ind.id;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setHoveredVertical(ind.id)}
                  onMouseLeave={() => setHoveredVertical(null)}
                  className={`group p-8 rounded-none border text-center transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                    isHovered 
                      ? "bg-orange-500 text-black border-orange-500 shadow-xl" 
                      : "bg-[#0b0b0b] border-white/10 text-white hover:bg-[#0f0f0f]"
                  }`}
                  id={`expertise-box-${ind.id}`}
                >
                  <div className={`mb-4 transition-transform duration-300 ${isHovered ? "scale-110 text-black" : "text-orange-500 group-hover:scale-105"}`}>
                    {renderIndustryIcon(ind.id, "h-10 w-10")}
                  </div>
                  <h4 className="font-display uppercase text-base tracking-wider">
                    {ind.label}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. READY TO GROW BOTTOM CTA CARD - RAW BOLD ORANGE */}
      <section className="py-12 md:py-20 bg-[#050505]" id="bottom-cta-section">
        <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
          <div className="relative bg-orange-500 text-black rounded-none p-10 md:p-20 overflow-hidden shadow-2xl text-center" id="bottom-cta-card">
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-900 font-extrabold block mb-4">SCALE ADVISORY</span>
              <h2 className="font-display text-4xl md:text-7xl uppercase text-black tracking-tighter leading-none mb-6 skew-text">
                READY TO GROW?
              </h2>
              <p className="font-sans text-sm text-black font-semibold max-w-lg mx-auto mb-10 leading-relaxed">
                Take the initial step to overhaul your domestic catalog conversion. Let our modeling agents parse your metrics and design your immediate technical strategy.
              </p>
              <button
                onClick={onOpenContact}
                className="bg-black hover:bg-neutral-900 text-white text-xs font-display uppercase tracking-widest font-extrabold px-10 py-5 rounded-none transition-all duration-300 active:scale-95 cursor-pointer shadow-xl"
                id="bottom-cta-btn"
              >
                REQUEST ESCALATION
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
