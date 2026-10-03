"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { dict } from "@/data/content";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-white/5 py-12 mt-10 bg-black text-center text-zinc-600 text-sm">
      <p className="font-medium tracking-widest uppercase">
        {dict[lang].footer}
      </p>
    </footer>
  );
}
