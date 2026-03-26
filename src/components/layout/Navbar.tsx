"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/components/language/language-provider";
import { copy, navSectionIds, type NavSectionId } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = copy[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  const navItems: { id: NavSectionId; label: string }[] = [
    { id: navSectionIds.executiveSummary, label: t.nav.executiveSummary },
    { id: navSectionIds.scope, label: t.nav.scope },
    { id: navSectionIds.options, label: t.nav.options },
    { id: navSectionIds.decision, label: t.nav.decision },
    { id: navSectionIds.timeline, label: t.nav.timeline },
    { id: navSectionIds.support, label: t.nav.support },
    { id: navSectionIds.nextSteps, label: t.nav.nextSteps },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const mid = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
          current = s.id;
        }
      });
      if (current) setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-2"
          : "bg-white/60 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => go(navSectionIds.executiveSummary)}>
          <span className="text-2xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            {t.brandName}
          </span>
          <span className="font-bold text-slate-500 text-sm">Sites</span>
        </div>

        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                "relative px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300",
                activeId === item.id
                  ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-blue-700 hover:bg-blue-50/80"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300",
              "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50",
              "hover:from-blue-100 hover:to-purple-100 hover:shadow-md"
            )}
          >
            <Globe size={16} className="text-blue-600" />
            <span className="text-blue-700">{lang === "ar" ? "English" : "العربية"}</span>
          </button>

          <button className="xl:hidden p-2 text-slate-700 rounded-xl hover:bg-slate-100" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(item.id)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-semibold text-start transition-colors",
                    activeId === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
