import React, { useState } from "react";
import { NavTab } from "../types";
import { Menu, X, Shield, Sparkles } from "lucide-react";

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ currentTab, onTabChange, onOpenAudit, onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: Array<{ id: NavTab; label: string }> = [
    { id: "home", label: "Home" },
    { id: "e-commerce", label: "E-Commerce" },
    { id: "marketing", label: "Marketing" },
    { id: "creative", label: "Creative" },
    { id: "about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 w-full border-b border-white/15 bg-[#050505]/95 backdrop-blur-md transition-shadow">
      <div className="mx-auto flex h-full max-w-(--spacing-container-max) items-center justify-between px-5 md:px-[64px]">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange("home")}
          className="group flex cursor-pointer items-center gap-2.5"
          id="nav-logo"
        >
          <div className="flex h-9 w-9 items-center justify-center bg-orange-500 text-black font-display text-xl uppercase font-extrabold transition-transform group-hover:scale-105 shadow-md">
            A
          </div>
          <span className="font-display text-2xl uppercase tracking-tighter text-white">
            AgileSphere.
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all relative py-1.5 ${
                currentTab === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Cluster */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-orange-500 transition-colors px-3 py-2 cursor-pointer"
            id="nav-btn-contact"
          >
            Contact
          </button>
          <button
            onClick={onOpenAudit}
            className="flex items-center gap-1.5 bg-orange-500 text-black text-xs font-display uppercase tracking-widest px-5 py-2.5 rounded-none transition-all hover:bg-orange-600 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg shadow-orange-500/10"
            id="nav-btn-getstarted"
          >
            <Sparkles className="h-4 w-4 stroke-[2.5px]" />
            Free Audit
          </button>
        </div>

        {/* Mobile Hamburguer */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-none bg-neutral-900 border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            id="nav-hamburger"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/15 shadow-25xl transition-all md:hidden z-40 py-6 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsOpen(false);
                }}
                className={`text-left font-sans text-xs uppercase tracking-[0.2em] font-bold py-2 transition-colors ${
                  currentTab === item.id ? "text-orange-500" : "text-gray-300 hover:text-white"
                }`}
                id={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenContact();
                  setIsOpen(false);
                }}
                className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-orange-500 hover:bg-neutral-900 border border-white/10 transition-colors"
                id="nav-mobile-contact"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  onOpenAudit();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-1.5 bg-orange-500 text-black py-3 text-xs font-display uppercase tracking-widest font-extrabold transition-colors hover:bg-orange-600"
                id="nav-mobile-getstarted"
              >
                <Sparkles className="h-4 w-4" />
                Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
