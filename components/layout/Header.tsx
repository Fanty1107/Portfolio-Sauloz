"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rotate-45 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
        <span className="text-xl font-black text-white tracking-wider ml-2">SXU<span className="text-red-600">EDITS</span></span>
      </div>
      
      <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-widest text-zinc-400">
        <a href="#inicio" className="cursor-pointer hover:text-red-500 transition-colors">INÍCIO</a>
        <a href="#sobre-mim" className="cursor-pointer hover:text-red-500 transition-colors">SOBRE</a>
        <a href="#projetos" className="cursor-pointer hover:text-red-500 transition-colors">PROJETOS</a>
        <a href="#clientes" className="cursor-pointer hover:text-red-500 transition-colors">CLIENTES</a>
        <a href="#faq" className="cursor-pointer hover:text-red-500 transition-colors">FAQ</a>
      </nav>

      <Link 
        href="https://linktr.ee/saulooz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer inline-block border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-2 rounded-md font-bold transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.2)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
      >
        CONTATO
      </Link>
    </motion.header>
  );
}