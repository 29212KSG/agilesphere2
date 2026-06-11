import React, { useState } from "react";
import { Brush, Sparkles, Check, PenTool, LayoutTemplate, Copy } from "lucide-react";

interface StyleModel {
  id: string;
  name: string;
  colors: string[];
  fontDisplay: string;
  fontBody: string;
  cardStyle: string;
  btnStyle: string;
  tagline: string;
}

export default function CreativeView() {
  const styles: StyleModel[] = [
    {
      id: "tech-minimal",
      name: "Swiss Tech / Minimalist",
      colors: ["#0F172A", "#6366F1", "#14B8A6"],
      fontDisplay: "Plus Jakarta Sans / Space Grotesk",
      fontBody: "Inter",
      cardStyle: "bg-black border border-white/15 rounded-none text-white",
      btnStyle: "bg-orange-500 text-black rounded-none font-bold uppercase",
      tagline: "Absolute architectural honesty. Pure layout scaling, dense metadata layouts, and subtle ambient shadows."
    },
    {
      id: "editorial",
      name: "Classic / Editorial Serif",
      colors: ["#1C1917", "#B45309", "#475569"],
      fontDisplay: "Playfair Display / Georgia",
      fontBody: "Lora / Merriweather",
      cardStyle: "bg-neutral-900 border border-orange-500/25 rounded-none text-white font-serif",
      btnStyle: "bg-orange-500 text-black rounded-none italic uppercase",
      tagline: "Elegant display typography, premium spacing, warm paper hues, and high-editorial contrast."
    },
    {
      id: "brutalist",
      name: "Bold / Tech-Mono Brutalist",
      colors: ["#000000", "#FACC15", "#00FF66"],
      fontDisplay: "JetBrains Mono / Fira Code",
      fontBody: "JetBrains Mono",
      cardStyle: "bg-black border-2 border-orange-500 rounded-none text-white font-mono",
      btnStyle: "bg-orange-500 text-black border border-black font-extrabold rounded-none uppercase",
      tagline: "Raw modular power. High-contrast solid borders, thick saturated fills, and code-aligned layouts."
    },
    {
      id: "vibrant",
      name: "Vibrant / Playful Modern",
      colors: ["#7C3AED", "#EC4899", "#F59E0B"],
      fontDisplay: "Outfit / Syne",
      fontBody: "Plus Jakarta Sans",
      cardStyle: "bg-[#111] border border-white/10 rounded-none text-white",
      btnStyle: "bg-orange-500 hover:bg-orange-600 text-black rounded-none font-bold uppercase",
      tagline: "Accessible energy. Soft pill shapes, neon-colored gradients, micro-fades, and high-impact micro-animations."
    }
  ];

  const [activeStyle, setActiveStyle] = useState<StyleModel>(styles[0]);
  const [copiedText, setCopiedText] = useState("");

  const handleCopyPalette = (colorStr: string) => {
    navigator.clipboard.writeText(colorStr);
    setCopiedText(colorStr);
    setTimeout(() => setCopiedText(""), 1500);
  };

  return (
    <div className="w-full bg-[#050505] text-white py-12 md:py-20" id="creative-view-container">
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px]">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-none mb-4">
            <Brush className="h-4 w-4 text-orange-500" />
            <span className="font-display text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              Bespoke Creative Solutions
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white skew-text mb-4">
            UI/UX &amp; BRAND DESIGN
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
            Crafting memorable digital canvases. We pair clean layout structures with modular design blocks and optimized tracking, ensuring your digital presence is distinct.
          </p>
        </div>

        {/* Dynamic Preset Tester Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Preset Selector Panel: 4 Cols */}
          <div className="lg:col-span-12 xl:col-span-4 bg-[#0c0c0c] p-6 md:p-8 rounded-none border border-white/10 shadow-2xl">
            <h3 className="font-display uppercase tracking-wider text-white text-lg mb-4 flex items-center gap-2">
              <LayoutTemplate className="h-5 w-5 text-orange-500" />
              Aesthetic Presets
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
              Toggle among our target sector aesthetic configurations and inspect how the simulated UI card shifts colors, corners, and fonts.
            </p>

            <div className="space-y-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style)}
                  className={`w-full text-left p-4 rounded-none border flex items-center justify-between transition-all cursor-pointer ${
                    activeStyle.id === style.id
                      ? "bg-neutral-900 border-orange-500 text-white font-bold"
                      : "bg-[#141414] border-white/10 text-gray-300 hover:bg-[#1a1a1a]"
                  }`}
                >
                  <div>
                    <span className="block text-xs uppercase font-display tracking-wider">
                      {style.name}
                    </span>
                    <div className="flex gap-1.5 mt-2">
                      {style.colors.map((c, i) => (
                        <span 
                          key={i} 
                          className="w-3 h-3 rounded-none border border-white/35 shrink-0" 
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                  {activeStyle.id === style.id && (
                    <Check className="h-4 w-4 text-orange-500 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Interactive Preview Screen: 8 Cols */}
          <div className="lg:col-span-12 xl:col-span-8 bg-[#0c0c0c] p-6 md:p-8 rounded-none border border-white/10 shadow-2xl min-h-[440px] flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider font-mono">SANDBOX PLATFORM v2.0</span>
                  <h4 className="font-display uppercase text-white text-base tracking-wide mt-1">Active Presets: {activeStyle.name}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Palette:</span>
                  <div className="flex gap-1">
                    {activeStyle.colors.map((colHex) => (
                      <button
                        key={colHex}
                        onClick={() => handleCopyPalette(colHex)}
                        title="Click to copy hex code"
                        className="relative group p-1.5 bg-neutral-950 border border-white/15 rounded-none hover:border-orange-500 transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span className="w-4 h-4 rounded-none border border-white/20 shrink-0" style={{ backgroundColor: colHex }} />
                        <span className="font-mono text-[9px] text-gray-400 font-semibold">{colHex}</span>
                        {copiedText === colHex && (
                          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[9px] px-1.5 py-0.5 rounded-none font-bold uppercase tracking-wider font-mono">
                            COPIED!
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Render dynamic Style Card with selected style metrics */}
              <div className={`p-8 transition-all duration-300 ${activeStyle.cardStyle}`} id="dynamic-simulation-card">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-orange-500 block mb-3 font-mono">
                  AGILESPHERE ARCHETYPE PREVIEW
                </span>
                
                <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 leading-tight">
                  Design rules drive commercial velocity.
                </h4>
                
                <p className="text-sm leading-relaxed mb-6 font-light max-w-xl">
                  {activeStyle.tagline}
                </p>

                {/* Simulated UI components */}
                <div className="flex flex-wrap gap-3 items-center">
                  <button className={`px-5 py-2.5 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-90 cursor-pointer ${activeStyle.btnStyle}`}>
                    Primary Action
                  </button>
                  <button className="px-5 py-2.5 text-[10px] tracking-widest uppercase border border-white/25 text-white bg-transparent hover:bg-white hover:text-black rounded-none cursor-pointer">
                    Secondary Link
                  </button>
                  <span className="text-[10px] border border-white/10 bg-neutral-950 px-2 py-1 font-mono text-gray-400 font-bold uppercase shrink-0">
                    SLA v1.4
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Layout Spec details */}
            <div className="border-t border-white/10 pt-5 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-950 p-3.5 border border-white/10 rounded-none">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block mb-0.5">DISPLAY TYPOGRAPHY</span>
                <span className="font-display uppercase text-sm font-semibold text-white tracking-wide">{activeStyle.fontDisplay}</span>
              </div>
              <div className="bg-neutral-950 p-3.5 border border-white/10 rounded-none">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block mb-0.5">BODY TYPOGRAPHY</span>
                <span className="font-mono text-sm font-semibold text-white">{activeStyle.fontBody}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
