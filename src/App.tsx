import React from 'react';
import { SiteAlert } from './components/SiteAlert';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { VideosSection } from './components/VideosSection';
import { CategoriesSection } from './components/CategoriesSection';
import { MerchSection } from './components/MerchSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { CreatorSection } from './components/CreatorSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white relative">
      <SiteAlert />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <StatsSection />
        <VideosSection />
        <CategoriesSection />
        <MerchSection />
        <JourneySection />
        <ContactSection />
        <CreatorSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

