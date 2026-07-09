// app/page.tsx
import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

// Carregamento Assíncrono (Lazy Load) das seções abaixo da dobra
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const FeaturedProjectsSection = dynamic(() => import("@/components/sections/FeaturedProjectsSection"));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"));
const ClientsSection = dynamic(() => import("@/components/sections/ClientsSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));

export default function PortfolioSxuedits() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Header />
      <main className="w-full flex flex-col gap-32 lg:gap-40 py-20">
        <HeroSection /> 
        
        
        <AboutSection />
        <FeaturedProjectsSection />
        <PortfolioSection />
        <ClientsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}