"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "pt" | "en";

interface LangContextData {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextData>({} as LangContextData);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Tenta pegar a preferência salva pelo usuário
    const saved = localStorage.getItem("@sxuedits:lang");
    if (saved) {
      setLang(saved as Lang);
    } else {
      // 2. Se for a primeira visita, identifica o idioma do navegador!
      const browserLang = navigator.language.toLowerCase();
      const detected = browserLang.includes("en") ? "en" : "pt";
      setLang(detected);
      localStorage.setItem("@sxuedits:lang", detected);
    }
    setIsLoaded(true);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    localStorage.setItem("@sxuedits:lang", newLang);
  };

  // Evita piscar o idioma errado no carregamento
  if (!isLoaded) return <div className="min-h-screen bg-[#0a0a0a]"></div>;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
