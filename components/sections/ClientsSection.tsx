"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import { clients } from '@/data/content';
import { fadeUp } from '@/utils/animations';
import { bebas } from '@/utils/fonts';
import Image from 'next/image';

export default function ClientsSection() {
  const [loopWidth, setLoopWidth] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const isDragging = useRef(false);
  const hasSetInitialPosition = useRef(false);

  // Garante uma margem de segurança gigante (20.000px)
  const estimatedWidth = clients.length * 150; 
  const COPIES = Math.max(20, Math.ceil(20000 / estimatedWidth));
  const MIDDLE_COPY = Math.floor(COPIES / 2);
  
  const duplicatedClients = Array.from({ length: COPIES }).flatMap(() => clients);

  useEffect(() => {
    const measure = () => {
      if (marqueeRef.current) {
        const width = marqueeRef.current.scrollWidth / COPIES;
        setLoopWidth(width);

        if (!hasSetInitialPosition.current && width > 0) {
          baseX.set(-width * MIDDLE_COPY);
          hasSetInitialPosition.current = true;
        }
      }
    };
    
    measure();
    const timeout = setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timeout);
    };
  }, [COPIES, MIDDLE_COPY, baseX]);

  useAnimationFrame(() => {
    if (!loopWidth || !hasSetInitialPosition.current) return;
    
    let currentX = baseX.get();
    
    if (!isDragging.current) {
      currentX -= 0.8; 
      
      const offset = ((currentX % loopWidth) - loopWidth) % loopWidth;
      const wrapped = offset - (loopWidth * MIDDLE_COPY);
      
      if (Math.abs(currentX - wrapped) >= loopWidth) {
        baseX.set(wrapped);
        return;
      }
      
      baseX.set(currentX);
    }
  });

  return (
    <section id="clientes" className="py-10 relative z-10 overflow-hidden">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className={`${bebas.className} text-center leading-[0.9] inline-block relative`}>
          <span className="text-6xl lg:text-[4.5rem] text-white [text-shadow:3px_3px_0_#dc2626]">CLIENTES QUE JÁ </span>
           <span className="text-7xl lg:text-[5.0rem] bg-[radial-gradient(circle,#f50606_40%,transparent_60%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">ATENDI</span>
        </h2>
        <p className="text-zinc-500 mt-6 text-lg">Clique para acessar o canal ou arraste para os lados</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden py-10 flex cursor-grab active:cursor-grabbing select-none"
      >
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

        <motion.div
          ref={marqueeRef}
          className="flex gap-10 px-4 w-max"
          style={{ x: baseX }}
          drag="x"
          dragMomentum={false} /* <-- A SOLUÇÃO: Corta a inércia insana ao soltar o mouse/dedo */
          dragElastic={0} /* <-- Remove o efeito "elástico" para maior precisão */
          onDragStart={() => (isDragging.current = true)}
          onDragEnd={() => {
            setTimeout(() => (isDragging.current = false), 100);
          }}
        >
          {duplicatedClients.map((client, index) => (
            <Link
              key={`${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              onClick={(e) => {
                if (isDragging.current) e.preventDefault();
              }}
              className="flex flex-col items-center gap-4 group shrink-0"
            >
              <div className={`relative w-28 h-28 rounded-full p-1 bg-zinc-800/50 border-2 border-transparent transition-all duration-300 shadow-xl group-hover:scale-105 group-hover:-translate-y-2 ${client.color} ${client.glow}`}>
                <div className="relative w-full h-full rounded-full">
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 112px, 112px"
                    draggable={false}
                    className="object-cover rounded-full border-[3px] border-transparent group-hover:border-[#0a0a0a] transition-all pointer-events-none"
                  />
                </div>
              </div>
              <span className="text-base font-bold text-zinc-500 group-hover:text-white transition-colors tracking-wide">
                {client.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}