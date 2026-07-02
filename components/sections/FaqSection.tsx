"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { faqs } from '@/data/content';
import { fadeUp } from '@/utils/animations';
import { bebas } from '@/utils/fonts';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full relative z-10 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <motion.div {...fadeUp} className="mb-14 text-center md:text-left">
          <h2 className={`${bebas.className} leading-[0.9] inline-block relative`}>
            <span className="text-6xl lg:text-[4.5rem] text-white [text-shadow:3px_3px_0_#dc2626] mr-3">PERGUNTAS </span>
            <span className="text-7xl lg:text-[5.0rem] bg-[radial-gradient(circle,#f50606_40%,transparent_60%)] bg-[length:4px_4px] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">FREQUENTES</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg">
            Ainda tem dúvidas? Entre em contato com nosso <a href="#" className="text-red-500 hover:text-white font-bold transition-colors">suporte</a>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === faq.id;
            
            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-red-600/50 bg-[#150a0a]' 
                    : 'border-white/5 bg-[#0f0f0f] hover:border-white/10'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={isOpen ? "text-red-500" : "text-zinc-600"} size={22} />
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={isOpen ? "text-red-500" : "text-zinc-600"} size={20} />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 flex gap-4 ml-[2px]">
                    <MessageSquare className="text-red-600 shrink-0 mt-1" size={18} />
                    <p className="text-zinc-400 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}