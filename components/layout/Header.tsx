"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { dict } from "@/data/content";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const t = dict[lang].header;

  // Estado para controlar se o menu de idiomas está aberto ou fechado
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Função para trocar o idioma apenas se o usuário clicar no idioma diferente do atual
  const handleSelectLang = (targetLang: "pt" | "en") => {
    if (lang !== targetLang) toggleLang();
    setIsLangMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rotate-45 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
        <span className="text-xl font-black text-white tracking-wider ml-2">
          SXU<span className="text-red-600">EDITS</span>
        </span>
      </div>

      <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-widest text-zinc-400">
        <a
          href="#inicio"
          className="cursor-pointer hover:text-red-500 transition-colors"
        >
          {t.home}
        </a>
        <a
          href="#sobre-mim"
          className="cursor-pointer hover:text-red-500 transition-colors"
        >
          {t.about}
        </a>
        <a
          href="#projetos"
          className="cursor-pointer hover:text-red-500 transition-colors"
        >
          {t.projects}
        </a>
        <a
          href="#clientes"
          className="cursor-pointer hover:text-red-500 transition-colors"
        >
          {t.clients}
        </a>
        <a
          href="#faq"
          className="cursor-pointer hover:text-red-500 transition-colors"
        >
          {t.faq}
        </a>
      </nav>

      <div className="flex items-center gap-4">
        {/* --- NOVO COMPONENTE DE IDIOMA (DROPDOWN) --- */}
        <div
          className="relative"
          onMouseEnter={() => setIsLangMenuOpen(true)}
          onMouseLeave={() => setIsLangMenuOpen(false)}
        >
          {/* Botão Principal */}
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors bg-white/5 px-3 py-2 rounded-full border border-white/10 hover:border-white/20"
          >
            <Globe size={16} className="text-zinc-400" />
            <span className="text-xs font-bold tracking-wider">
              {lang === "pt" ? "PT" : "EN"}
            </span>
            <ChevronDown
              size={14}
              className={`text-zinc-500 transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Menu de Opções que cai (Dropdown) */}
          <AnimatePresence>
            {isLangMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-36 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(220,38,38,0.15)]"
              >
                <div className="flex flex-col p-1.5">
                  <button
                    onClick={() => handleSelectLang("pt")}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lang === "pt"
                        ? "text-white bg-red-600/20 border border-red-600/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    🇧🇷 PT-BR
                  </button>
                  <button
                    onClick={() => handleSelectLang("en")}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lang === "en"
                        ? "text-white bg-red-600/20 border border-red-600/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    🇺🇸 EN-US
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href="https://linktr.ee/saulooz"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hidden sm:inline-block border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-2 rounded-md font-bold transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.2)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
        >
          {t.contact}
        </Link>
      </div>
    </motion.header>
  );
}
