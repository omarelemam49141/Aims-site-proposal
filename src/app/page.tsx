"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, Layers, Monitor, Server, Database, Clock, Calendar,
  CheckCircle2, XCircle, ChevronLeft, ChevronRight, Headphones, BookOpen,
  Wrench, FileText, Palette, Code2, TestTube2, Rocket, Star, Zap
} from "lucide-react";

import { LanguageProvider, useLanguage } from "@/components/language/language-provider";
import { Navbar } from "@/components/layout/Navbar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { copy, navSectionIds } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const stagger = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
};

/* ─────────────── HERO ─────────────── */
function HeroSection() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section id={navSectionIds.executiveSummary} className="scroll-mt-24 relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-emerald-300/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full shadow-sm"
          >
            <Star size={16} className="text-amber-500" />
            {t.proposalTitle}
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.15] text-slate-900 tracking-tight">
            {lang === "ar" ? (
              <>
                إعادة تصميم موقع{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AIMS</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-slate-600 font-bold">بهوية حديثة وتجربة استثنائية</span>
              </>
            ) : (
              <>
                Redesigning the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AIMS</span>
                {" "}Website
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-slate-600 font-bold">Modern Identity, Exceptional Experience</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.proposalSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo(navSectionIds.options)}
              className="flex items-center gap-2 px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow"
            >
              {t.heroCtaPrimary}
              <Arrow size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo(navSectionIds.timeline)}
              className="flex items-center gap-2 px-8 py-4 text-lg font-bold border-2 border-slate-200 text-slate-700 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              {t.heroCtaSecondary}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex justify-center"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-slate-400">
              <ArrowDown size={28} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stat boxes */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { value: "25", label: lang === "ar" ? "صفحة" : "Pages", icon: <Layers size={20} /> },
            { value: "7", label: lang === "ar" ? "قوالب فريدة" : "Unique Templates", icon: <Palette size={20} /> },
            { value: "13", label: lang === "ar" ? "شريك" : "Partners", icon: <Star size={20} /> },
            { value: lang === "ar" ? "RTL" : "RTL", label: lang === "ar" ? "ثنائي اللغة" : "Bilingual", icon: <FileText size={20} /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={stagger.item}
              className="bg-white/70 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 text-center hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── SCOPE ─────────────── */
function ScopeSection() {
  const { lang } = useLanguage();
  const t = copy[lang].sections.scope;
  const s = copy[lang];

  const templateGroups = lang === "ar"
    ? [
        { icon: <Rocket size={24} />, title: "صفحة الهبوط", count: 1, color: "from-blue-500 to-blue-600", desc: "قالب فريد بأقسام متعددة" },
        { icon: <FileText size={24} />, title: "صفحات أساسية", count: 4, color: "from-purple-500 to-purple-600", desc: "عن الشركة، الشهادات، الوظائف، تواصل" },
        { icon: <Layers size={24} />, title: "خدمات وأقسام", count: 7, color: "from-emerald-500 to-emerald-600", desc: "قوالب قابلة لإعادة الاستخدام" },
        { icon: <Star size={24} />, title: "صفحات الشركاء", count: 13, color: "from-amber-500 to-amber-600", desc: "قالب مشترك واحد + 13 عنصر محتوى" },
      ]
    : [
        { icon: <Rocket size={24} />, title: "Landing Page", count: 1, color: "from-blue-500 to-blue-600", desc: "Unique template with multiple sections" },
        { icon: <FileText size={24} />, title: "Core Pages", count: 4, color: "from-purple-500 to-purple-600", desc: "About, Certifications, Careers, Contact" },
        { icon: <Layers size={24} />, title: "Services & Divisions", count: 7, color: "from-emerald-500 to-emerald-600", desc: "Reusable templates" },
        { icon: <Star size={24} />, title: "Partner Pages", count: 13, color: "from-amber-500 to-amber-600", desc: "1 shared template + 13 content entries" },
      ];

  return (
    <section id={navSectionIds.scope} className="scroll-mt-24 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading badge={s.nav.scope} title={t.title} subtitle={t.intro} badgeColor="purple" />

        <motion.div
          variants={stagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {templateGroups.map((g, i) => (
            <motion.div key={i} variants={stagger.item}>
              <GlassCard delay={0} className="h-full text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white shadow-lg mb-4`}>
                  {g.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-1">{g.count}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{g.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{g.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-6 text-center"
        >
          <p className="text-slate-700 font-medium text-lg leading-relaxed">{t.currentPagesNote}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── OPTIONS ─────────────── */
function OptionsSection() {
  const { lang } = useLanguage();
  const t = copy[lang].sections.options;
  const s = copy[lang];

  const options = [
    { data: t.optionA, key: "A", icon: <Monitor size={28} />, color: "blue", recommended: false },
    { data: t.optionB, key: "B", icon: <Server size={28} />, color: "purple", recommended: true },
    { data: t.optionC, key: "C", icon: <Database size={28} />, color: "amber", recommended: false },
  ];

  const colorStyles: Record<string, { gradient: string; bg: string; border: string; text: string }> = {
    blue: { gradient: "from-blue-500 to-blue-600", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
    purple: { gradient: "from-purple-500 to-purple-600", bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
    amber: { gradient: "from-amber-500 to-amber-600", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
  };

  return (
    <section id={navSectionIds.options} className="scroll-mt-24 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading badge={s.nav.options} title={t.title} subtitle={t.description} badgeColor="blue" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {options.map((opt, i) => {
            const cs = colorStyles[opt.color];
            return (
              <motion.div
                key={opt.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={cn(
                  "relative bg-white/90 backdrop-blur-sm border-2 rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col",
                  opt.recommended
                    ? "border-purple-400 shadow-lg shadow-purple-500/10 scale-[1.02] z-10"
                    : "border-slate-200/80 hover:border-slate-300"
                )}
              >
                {opt.recommended && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                    <span className="px-5 py-1.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg shadow-purple-500/30">
                      {lang === "ar" ? "الخيار الأفضل" : "Recommended"}
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center text-white shadow-lg mb-5`}>
                  {opt.icon}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-snug">{opt.data.title}</h3>

                <div className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-xl ${cs.bg} border ${cs.border} mb-5`}>
                  <Clock size={16} className={cs.text} />
                  <span className={`font-bold ${cs.text}`}>{opt.data.timeline}</span>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {opt.data.includes.map((inc, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 text-[15px] leading-relaxed">{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className={`${cs.bg} border ${cs.border} rounded-xl p-4 mt-auto`}>
                  <p className="text-sm font-semibold ${cs.text} leading-relaxed">{opt.data.goodFor}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CMS vs APIs COMPARISON ─────────────── */
function DecisionSection() {
  const { lang } = useLanguage();
  const t = copy[lang].sections.decision;
  const s = copy[lang];

  const rows = lang === "ar"
    ? [
        { label: "زمن التطوير", cms: "أقل بكثير", api: "أطول بكثير", cmsWin: true },
        { label: "تكلفة التطوير", cms: "أقل", api: "أعلى (~70-80%)", cmsWin: true },
        { label: "لوحة إدارة جاهزة", cms: "مدمجة ومصقولة", api: "تحتاج بناء من الصفر", cmsWin: true },
        { label: "أمان النظام", cms: "منتج ناضج ومُختبر", api: "مسؤوليتك بالكامل", cmsWin: true },
        { label: "صيانة مستقبلية", cms: "فريق CMS يصون الأساس", api: "أنت تصون كل شيء", cmsWin: true },
        { label: "منطق أعمال مخصص", cms: "محدود نسبياً", api: "مرونة كاملة", cmsWin: false },
        { label: "تكامل داخلي عميق", cms: "يحتاج plugins أو webhooks", api: "مرونة كاملة", cmsWin: false },
      ]
    : [
        { label: "Development time", cms: "Much shorter", api: "Much longer", cmsWin: true },
        { label: "Development cost", cms: "Lower", api: "Higher (~70-80%)", cmsWin: true },
        { label: "Admin panel", cms: "Built-in & polished", api: "Build from scratch", cmsWin: true },
        { label: "Security posture", cms: "Mature & battle-tested", api: "Your responsibility", cmsWin: true },
        { label: "Future maintenance", cms: "CMS team maintains core", api: "You maintain everything", cmsWin: true },
        { label: "Custom business logic", cms: "Limited", api: "Full flexibility", cmsWin: false },
        { label: "Deep internal integration", cms: "Plugins / webhooks", api: "Full flexibility", cmsWin: false },
      ];

  return (
    <section id={navSectionIds.decision} className="scroll-mt-24 py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading badge={s.nav.decision} title={t.title} subtitle={t.lead} badgeColor="green" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-center font-bold text-sm border-b border-slate-100">
            <div className="p-4 text-slate-500">{lang === "ar" ? "العامل" : "Factor"}</div>
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-x border-slate-100">
              CMS (Strapi)
            </div>
            <div className="p-4 text-slate-600">{lang === "ar" ? "APIs مخصصة" : "Custom APIs"}</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn("grid grid-cols-3 text-center text-sm border-b border-slate-50", i % 2 === 0 ? "bg-slate-50/50" : "")}
            >
              <div className="p-4 font-semibold text-slate-700 text-start px-6">{row.label}</div>
              <div className={cn("p-4 border-x border-slate-100 font-medium", row.cmsWin ? "text-emerald-700 bg-emerald-50/30" : "text-slate-600")}>
                <span className="flex items-center justify-center gap-2">
                  {row.cmsWin && <CheckCircle2 size={14} className="text-emerald-500" />}
                  {row.cms}
                </span>
              </div>
              <div className={cn("p-4 font-medium", !row.cmsWin ? "text-blue-700 bg-blue-50/30" : "text-slate-500")}>
                <span className="flex items-center justify-center gap-2">
                  {!row.cmsWin && <CheckCircle2 size={14} className="text-blue-500" />}
                  {row.cmsWin && <XCircle size={14} className="text-slate-300" />}
                  {row.api}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── VISUAL TIMELINE ─────────────── */
function TimelineSection() {
  const { lang } = useLanguage();
  const t = copy[lang].sections.timeline;
  const s = copy[lang];

  const milestones = lang === "ar"
    ? [
        { icon: <Palette size={20} />, title: "نظام التصميم", days: "3-5", desc: "الألوان، الخطوط، هيكل الصفحة، RTL", color: "from-pink-500 to-rose-500" },
        { icon: <Code2 size={20} />, title: "المكونات المشتركة", days: "3-4", desc: "الهيدر، الفوتر، الكروت، أنماط الحركات", color: "from-blue-500 to-cyan-500" },
        { icon: <Rocket size={20} />, title: "Landing + القوالب الأساسية", days: "7-10", desc: "صفحة الهبوط + الصفحات الأساسية", color: "from-purple-500 to-violet-500" },
        { icon: <Layers size={20} />, title: "القوالب المتكررة", days: "6-8", desc: "الخدمات، الأقسام، الشركاء", color: "from-emerald-500 to-green-500" },
        { icon: <Server size={20} />, title: "ربط CMS / API", days: "6-10", desc: "تكامل البيانات ومعاينة المحتوى", color: "from-amber-500 to-orange-500" },
        { icon: <TestTube2 size={20} />, title: "اختبارات QA", days: "3-5", desc: "RTL، المتجاوبية، تحقق الإدمن", color: "from-red-500 to-pink-500" },
      ]
    : [
        { icon: <Palette size={20} />, title: "Design System", days: "3-5", desc: "Colors, fonts, page structure, RTL", color: "from-pink-500 to-rose-500" },
        { icon: <Code2 size={20} />, title: "Shared Components", days: "3-4", desc: "Header, footer, cards, animation patterns", color: "from-blue-500 to-cyan-500" },
        { icon: <Rocket size={20} />, title: "Landing + Core Templates", days: "7-10", desc: "Home page + core unique pages", color: "from-purple-500 to-violet-500" },
        { icon: <Layers size={20} />, title: "Reusable Templates", days: "6-8", desc: "Services, divisions, partners", color: "from-emerald-500 to-green-500" },
        { icon: <Server size={20} />, title: "CMS / API Integration", days: "6-10", desc: "Data wiring and content preview", color: "from-amber-500 to-orange-500" },
        { icon: <TestTube2 size={20} />, title: "QA & Testing", days: "3-5", desc: "RTL, responsive, admin flow", color: "from-red-500 to-pink-500" },
      ];

  return (
    <section id={navSectionIds.timeline} className="scroll-mt-24 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading badge={s.nav.timeline} title={t.title} badgeColor="amber" />

        {/* Assumptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-6 mb-14 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md shrink-0">
              <Zap size={20} />
            </div>
            <ul className="space-y-2 text-amber-800 text-[15px]">
              {t.assumptions.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1 shrink-0">&#9679;</span>
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Visual timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute start-6 md:start-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-amber-300 md:-translate-x-1/2" />

          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex items-start gap-6 mb-10",
                  "md:items-center",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Dot */}
                <div className="absolute start-6 md:start-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white shadow-lg ring-4 ring-white`}>
                    {m.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className={cn("ms-20 md:ms-0 md:w-[calc(50%-40px)]", isEven ? "md:me-auto md:pe-8" : "md:ms-auto md:ps-8")}>
                  <GlassCard className="!p-5" hoverLift={false} delay={0}>
                    <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
                      <h4 className="font-extrabold text-slate-900 text-lg">{m.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${m.color} text-white shadow-sm`}>
                        {m.days} {lang === "ar" ? "يوم" : "days"}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SUPPORT PACKAGES ─────────────── */
function SupportSection() {
  const { lang } = useLanguage();
  const t = copy[lang].sections.support;
  const s = copy[lang];

  const iconMap = [<Wrench size={24} key="w" />, <BookOpen size={24} key="b" />, <Headphones size={24} key="h" />];
  const colorMap = ["from-blue-500 to-blue-600", "from-purple-500 to-purple-600", "from-emerald-500 to-emerald-600"];

  return (
    <section id={navSectionIds.support} className="scroll-mt-24 py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading badge={s.nav.support} title={t.title} subtitle={t.packagesTitle} badgeColor="purple" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white/90 backdrop-blur-sm border-2 border-slate-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[i]} flex items-center justify-center text-white shadow-lg mb-5`}>
                {iconMap[i]}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{pkg.name}</h3>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 font-bold text-sm mb-5 w-fit">
                <Calendar size={14} />
                {pkg.durationPlaceholder}
              </div>

              <ul className="space-y-3 flex-1">
                {pkg.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-[15px] leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function FooterSection() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden relative no-print">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AIMS</span>
          <span className="font-bold text-white/60">Sites</span>
        </div>
        <p className="text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
          {lang === "ar"
            ? "نساعدك في بناء حضور رقمي يليق بعلامتك التجارية."
            : "We help you build a digital presence worthy of your brand."}
        </p>
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} AIMS Sites.{" "}
          {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── MAIN PAGE ─────────────── */
function ProposalContent() {
  return (
    <div className="min-h-full bg-background text-foreground selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ScopeSection />
        <OptionsSection />
        <DecisionSection />
        <TimelineSection />
        <SupportSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default function ProposalPage() {
  return (
    <LanguageProvider>
      <ProposalContent />
    </LanguageProvider>
  );
}
