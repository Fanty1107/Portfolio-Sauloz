"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2 } from 'lucide-react';
import PaintTexture from '../ui/PaintTexture';
import { fadeUp } from '@/utils/animations';
import { bebas } from '@/utils/fonts';

export default function FeaturedProjectsSection() {
  const [isInteractive, setIsInteractive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (!isInteractive) {
      setIsInteractive(true);
      if (videoRef.current) {
        videoRef.current.muted = true; 
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <section id="projetos" className="w-full relative z-10 pt-10">
      <PaintTexture />

      <div className="max-w-[85rem] mx-auto px-6 w-full relative z-10">
        
        <motion.div {...fadeUp} className="mb-14 text-center">
          <h2 className={`${bebas.className} text-center leading-[0.9] inline-block relative`}>
            <span className="text-6xl lg:text-[4.5rem] text-white [text-shadow:3px_3px_0_#dc2626]">PROJETOS EM </span>
            <span className="text-7xl lg:text-[5.0rem] bg-[radial-gradient(circle,#f50606_40%,transparent_60%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">DESTAQUE</span>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
          </h2>
          <p className="text-zinc-500 mt-10 text-lg">O padrão de edição que redefiniu o mercado</p>
        </motion.div>

        <motion.div 
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }} 
          className="bg-gradient-to-br from-[#121212] to-[#050505] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center"
        >
          <div className="absolute top-0 right-0 w-32 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNkYzI2MjYiLz48L3N2Zz4=')] opacity-10"></div>

          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-500/30 text-red-500 rounded-full text-sm font-bold uppercase tracking-wider">
              <Zap size={18} fill="currentColor" /> by sxuEdits
            </div>
            <h3 className="text-4xl font-black text-white">Projetos Longform</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="bg-red-600 text-white rounded-full p-1.5 shadow-[0_0_10px_rgba(220,38,38,0.5)]"><CheckCircle2 size={20} /></div>
                <span className="text-zinc-300 text-base font-medium">Alta retenção comprovada</span>
              </li>
              <li className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="bg-red-600 text-white rounded-full p-1.5 shadow-[0_0_10px_rgba(220,38,38,0.5)]"><CheckCircle2 size={20} /></div>
                <span className="text-zinc-300 text-base font-medium">Sincronia perfeita com a música</span>
              </li>
            </ul>
          </div>

          <div className="flex-[1.2] w-full z-10">
            <div 
              className="relative w-full aspect-[16/10] group cursor-pointer -rotate-1 hover:rotate-0 transition-transform duration-500"
              onClick={handlePlayVideo}
            >
              <div className="absolute inset-0 border-2 border-red-600/40 rounded-3xl shadow-[0_0_40px_rgba(220,38,38,0.2)] pointer-events-none"></div>
              
              <div className="absolute inset-3 group-hover:inset-1 border-2 border-red-600 rounded-2xl overflow-hidden transition-all duration-300 ease-out bg-[#050505] z-10">
                <video 
                  ref={videoRef}
                  autoPlay={!isInteractive} 
                  loop={!isInteractive} 
                  muted={true} 
                  controls={isInteractive} 
                  playsInline 
                  className={`w-full h-full object-cover transition-all duration-300 scale-105 group-hover:scale-100 ${isInteractive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                  src="assets/long-1.mp4" 
                />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}