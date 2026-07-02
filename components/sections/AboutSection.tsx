"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeLeft, fadeRight } from '@/utils/animations';
import { bebas } from '@/utils/fonts';

export default function AboutSection() {
  return (
    <section id="sobre-mim" className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div {...fadeLeft} className="w-full lg:w-5/12 relative flex justify-center lg:justify-start">
        <div className="relative w-full max-w-sm aspect-square lg:-ml-12 rotate-2 hover:rotate-0 transition-transform duration-500">
          
          {/* --- DETALHE TRACEJADO: TOPO ESQUERDA --- */}
          <svg 
            width="80" height="80" viewBox="0 0 80 80" 
            className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)] z-0 pointer-events-none transition-all duration-500 group-hover:scale-110"
          >
            <path d="M 10 80 A 70 70 0 0 1 80 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 8" strokeLinecap="round" />
            <path d="M 30 80 A 50 50 0 0 1 80 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 8" strokeLinecap="round" />
          </svg>

          {/* --- DETALHE TRACEJADO: BASE DIREITA (Rotacionado 180 graus) --- */}
          <svg 
            width="80" height="80" viewBox="0 0 80 80" 
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 rotate-180 text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)] z-0 pointer-events-none transition-all duration-500 group-hover:scale-110"
          >
            <path d="M 10 80 A 70 70 0 0 1 80 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 8" strokeLinecap="round" />
            <path d="M 30 80 A 50 50 0 0 1 80 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 8" strokeLinecap="round" />
          </svg>

          {/* Borda Externa */}
          <div className="absolute inset-0 border-2 border-red-600/30 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.2)] pointer-events-none z-10"></div>
          
          {/* Container Interno (Imagem) */}
          <div className="absolute inset-3 border-2 border-red-600 rounded-xl overflow-hidden bg-[#111] z-20">
            <div className="relative w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1560972550-aad3c3765173?q=80&w=1000&auto=format&fit=crop" 
                alt="Personagem do Editor" 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover opacity-90 scale-110" 
              />
            </div>
          </div>

        </div>
      </motion.div>

      <motion.div {...fadeRight} className="w-full lg:w-7/12 space-y-6 lg:pl-10">
        <h2 className={`${bebas.className} flex flex-col leading-[0.9]`}>
          <span className="text-7xl lg:text-[4.5rem] bg-[radial-gradient(circle,#f50606_45%,transparent_40%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">SOBRE</span>
          <span className="text-6xl lg:text-[5.0rem] text-white [text-shadow:2px_2px_0_#dc2626]">MIM</span>
        </h2>
        <div className="space-y-5 text-zinc-400 text-lg md:text-xl leading-relaxed mt-4">
          <p>Sou um editor de vídeo obcecado em transformar conteúdo bruto em <strong className="text-white">experiências visuais e artisticas</strong>. Meu objetivo é garantir que o espectador não consiga tirar os olhos da tela.</p>
          <p>Cada projeto é tratado como uma obra única.</p>
        </div>
      </motion.div>
    </section>
  );
}