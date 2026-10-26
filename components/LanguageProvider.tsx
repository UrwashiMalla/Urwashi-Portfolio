"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  LANGUAGES,
  translate,
  type Lang,
} from "@/lib/i18n";

type LanguageCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const Ctx = createContext<LanguageCtx | null>(null);

const STORAGE_KEY = "portfolio-lang";

export const LANG_BOOT_SCRIPT = `(function(){try{var l=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});var ok=${JSON.stringify(LANGUAGES)};if(l&&ok.indexOf(l)>-1){document.documentElement.lang=l;}else{document.documentElement.lang="en";}}catch(e){}})();`;

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof document !== "undefined") {
      const domLang = document.documentElement.lang as Lang;
      if (LANGUAGES.includes(domLang)) return domLang;
    }
    return DEFAULT_LANG;
  });

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const t = useCallback((path: string) => translate(path, lang), [lang]);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLanguage(): LanguageCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    return {
      lang: DEFAULT_LANG,
      setLang: () => {},
      t: (path) => translate(path, DEFAULT_LANG),
    };
  }
  return ctx;
}
