"use client";

import React from "react";
import { useLanguage } from "@/components/language/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={cn("no-print flex items-center rounded-2xl border border-border bg-white/70", className)}>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "px-4 py-2 text-sm font-semibold rounded-2xl transition-colors",
          lang === "en" ? "bg-gradient-primary text-white" : "text-foreground hover:bg-muted/60"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "px-4 py-2 text-sm font-semibold rounded-2xl transition-colors",
          lang === "ar" ? "bg-gradient-primary text-white" : "text-foreground hover:bg-muted/60"
        )}
        aria-pressed={lang === "ar"}
      >
        العربية
      </button>
    </div>
  );
}

