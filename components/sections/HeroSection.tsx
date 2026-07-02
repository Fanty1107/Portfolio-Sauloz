"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PaintTexture from '../ui/PaintTexture';
import AnimatedButton from '../ui/AnimatedButton';
import { fadeLeft } from '@/utils/animations';
import { bebas } from '@/utils/fonts';

export default function HeroSection() {
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
    <section id="inicio" className="max-w-[95rem] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative min-h-[70vh]">
      <PaintTexture />
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <motion.div {...fadeLeft} className="w-full lg:w-[42%] space-y-7 z-10 lg:pl-10">
        <h1 className={`${bebas.className} flex flex-col gap-2 leading-[0.9] tracking-wide`}>
          <span className="text-6xl lg:text-[5.5rem] text-white [text-shadow:3px_3px_0_#dc2626]">SAULO EDITOR</span>
          <span className="text-7xl lg:text-[7.5rem] bg-[radial-gradient(circle,#f50606_40%,transparent_40%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">ESTÉTICA</span>
          <span className="text-5xl lg:text-[5.5rem] text-white [text-shadow:3px_3px_0_#dc2626] mt-4">NÍVEL EXTREMO</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed mt-6">
          Edições que quebram o padrão. Dinamismo, retenção absoluta e uma estética visual única para criadores de conteúdo que buscam o topo do mercado.
        </p>
        <div className="pt-4">
          <AnimatedButton href="#projetos" text="Ver Projetos" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="w-full lg:w-[58%] relative flex justify-end z-10 lg:-mr-10"
      >
        <motion.div 
          animate={isInteractive ? { y: 0 } : { y: [0, -20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
          whileHover={{ y: 0, transition: { duration: 0.3 } }} 
          className="relative w-full lg:w-[90%] aspect-video group cursor-pointer"
          onClick={handlePlayVideo}
        >
          {/* Borda Externa Estática */}
          <div className="absolute inset-0 border-2 border-red-600/40 rounded-3xl shadow-[0_0_40px_rgba(220,38,38,0.2)] pointer-events-none"></div>
          
          {/* Borda Interna Animada (Sempre reage ao Hover, mesmo tocando) */}
          <div className="absolute inset-3 group-hover:inset-1 border-2 border-red-600 rounded-2xl overflow-hidden transition-all duration-300 ease-out bg-[#050505] z-10">
            <video 
              ref={videoRef}
              autoPlay={!isInteractive} 
              loop={!isInteractive} 
              muted={true} 
              controls={isInteractive}
              playsInline 
              className={`w-full h-full object-cover transition-all duration-300 scale-105 group-hover:scale-100 ${isInteractive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} 
              src="/assets/long-1.mp4" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}