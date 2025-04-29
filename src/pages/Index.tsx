import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ToolsSection from "@/components/home/ToolsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index: React.FC = () => {
  return (
    <main className="bg-[rgba(254,255,240,1)] flex flex-col overflow-hidden items-stretch pb-24">
      <header className="flex w-full items-start gap-5 text-[rgba(12,12,12,1)] flex-wrap justify-between max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01d50add1dfc7c133f7cca25a6c033d4adcbcd90?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[0.66] object-contain w-[85px] shadow-[0px_8px_0px_rgba(190,191,180,1)] shrink-0 mt-[129px] max-md:mt-10"
        />
        <Navbar />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace5074691a3427cb9a75ecf45a5ce0dffda1857?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[1.2] object-contain w-[97px] shadow-[0px_8px_0px_rgba(190,191,180,1)] shrink-0"
        />
      </header>

      <Hero />
      <ToolsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
