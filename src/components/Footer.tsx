import React from "react";
import { NavTab } from "../types";
import { Shield, Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const marketplaces = ["Amazon.in", "Flipkart Seller", "Meesho Hub", "Nykaa Partner"];
  const services = [
    { label: "Domestic Account Management", tab: "e-commerce" },
    { label: "Digital Performance Ads", tab: "marketing" },
    { label: "Creative & Brand Design", tab: "creative" },
    { label: "Real-Time AI Audit Tool", tab: "marketing" }
  ];
  const company = [
    { label: "Our Heritage", tab: "about" },
    { label: "Strategic Process Matrix", tab: "home" },
    { label: "Partner Success Stories", tab: "home" },
    { label: "Request Growth Proposal", tab: "about" }
  ];

  return (
    <footer className="bg-[#080808] text-gray-400 border-t border-white/10 py-16 md:py-24" id="applet-footer">
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px] grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left main brand column: 4 cols */}
        <div className="md:col-span-12 lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onTabChange("home")}>
            <div className="flex h-9 w-9 items-center justify-center bg-orange-500 text-black font-display text-xl uppercase font-extrabold shadow-md">
              A
            </div>
            <span className="font-display text-2xl uppercase tracking-tighter text-white">
              AgileSphere.
            </span>
          </div>
          <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm font-light">
            AgileSphere is your dedicated strategic expansion partner, helping high-impact retail brands scale their domestic marketplace presence, paid ad efficiency, and design language with absolute precision.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-300 uppercase tracking-widest bg-black p-3.5 border border-white/10 w-fit">
            <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
            <span>Live Server Active</span>
          </div>
        </div>

        {/* Column 2: Marketplaces - 2 cols */}
        <div className="md:col-span-4 lg:col-span-2 space-y-4">
          <h5 className="font-display font-bold text-orange-500 text-[10px] uppercase tracking-[0.2em] skew-text">
            Marketplaces
          </h5>
          <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {marketplaces.map((m, idx) => (
              <li key={idx} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <span>{m}</span>
                <ExternalLink className="h-3 w-3 opacity-40 shrink-0 text-orange-500" />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services - 3 cols */}
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <h5 className="font-display font-bold text-orange-500 text-[10px] uppercase tracking-[0.2em] skew-text">
            Services
          </h5>
          <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {services.map((item, idx) => (
              <li 
                key={idx} 
                onClick={() => onTabChange(item.tab as NavTab)}
                className="hover:text-white hover:underline decoration-orange-500 transition-colors cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company / About - 3 cols */}
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <h5 className="font-display font-bold text-orange-500 text-[10px] uppercase tracking-[0.2em] skew-text">
            Structure
          </h5>
          <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {company.map((item, idx) => (
              <li 
                key={idx} 
                onClick={() => onTabChange(item.tab as NavTab)}
                className="hover:text-white hover:underline decoration-orange-500 transition-colors cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Sub-footer copyright section */}
      <div className="mx-auto max-w-(--spacing-container-max) px-5 md:px-[64px] mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
        <p className="text-gray-500 font-semibold">
          © {new Date().getFullYear()} AgileSphere Ltd. All rights scaled. Crafted with server-side AI-fidelity.
        </p>
        <div className="flex gap-6 font-semibold uppercase tracking-wider text-gray-500">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Matrix</span>
          <span className="hover:text-white cursor-pointer transition-colors">SLA Disclosures</span>
          <span className="hover:text-white cursor-pointer transition-colors">Digital Code</span>
        </div>
      </div>
    </footer>
  );
}
