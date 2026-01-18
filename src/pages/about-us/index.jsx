import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="main-content flex-1">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <CertificationsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;