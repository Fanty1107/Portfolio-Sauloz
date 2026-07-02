"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '@/data/content';
import { fadeUp } from '@/utils/animations';
import { bebas } from '@/utils/fonts';

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
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
    <div 
      className="relative w-full max-w-[340px] mx-auto aspect-[9/16] group cursor-pointer"
      onClick={handlePlayVideo}
    >
      <div className="absolute -top-3 left-4 bg-red-600 text-white font-bold text-xs md:text-sm px-4 py-1 rounded shadow-lg z-30 tracking-wider">
        {item.tag}
      </div>

      {/* Borda externa */}
      <div className="absolute inset-0 border-2 border-red-600/40 rounded-[1.5rem] shadow-[0_0_30px_rgba(220,38,38,0.1)] pointer-events-none transition-colors duration-300 group-hover:border-red-600/70"></div>

      {/* Borda Interna que expande */}
      <div className="absolute inset-2 group-hover:inset-1 border-2 border-red-600 rounded-2xl overflow-hidden transition-all duration-300 ease-out bg-[#050505] z-10">
        <video 
          ref={videoRef}
          autoPlay={!isInteractive} 
          loop={!isInteractive} 
          muted={true}
          controls={isInteractive}
          playsInline 
          preload="none"
          className={`w-full h-full object-cover transition-all duration-300 scale-105 group-hover:scale-100 ${isInteractive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
          src={item.videoUrl} 
        />
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full relative z-10 pt-10">
      <div className="max-w-[85rem] mx-auto px-6 w-full">
        
        <motion.div {...fadeUp} className="mb-14 text-center">
          <h2 className={`${bebas.className} text-center leading-[0.9] inline-block relative`}>
            <span className="text-6xl lg:text-[4.5rem] text-white [text-shadow:3px_3px_0_#dc2626]">MAIS </span>
            <span className="text-7xl lg:text-[5.0rem] bg-[radial-gradient(circle,#f50606_40%,transparent_60%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">PORTFÓLIO</span>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
          </h2>
        </motion.div>

        {/* O grid mantém os 3 vídeos alinhados lado a lado no PC e empilhados no celular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" as const }} 
              className="flex flex-col items-center w-full"
            >
              <PortfolioCard item={item} />
              
              <div className="mt-8 text-center">
                <h4 className="text-6xl lg:text-[1.0rem] text-white [text-shadow:1px_2px_0_#dc2626]">{item.title}</h4>
                <p className="text-6xl lg:text-[0.9rem] text-white [text-shadow:1px_2px_0_#dc2626]">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}