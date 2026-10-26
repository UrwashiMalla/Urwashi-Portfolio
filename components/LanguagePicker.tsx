"use client";

import { LANGUAGES, type Lang } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

const LABELS: Record<Lang, string> = {
  en: "EN",
  hi: "Hinglish",
};

export default function LanguagePicker({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-ink-2/60 backdrop-blur-sm border border-ink-3 ${className}`}
      role="group"
      aria-label={t("picker.language")}
    >
      {LANGUAGES.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            data-cursor="hover"
            aria-pressed={active}
            className={`px-2.5 h-6 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
              active
                ? "bg-ice-100 text-background"
                : "text-ice-300 hover:text-ice-50"
            }`}
          >
            {LABELS[code] ?? code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
