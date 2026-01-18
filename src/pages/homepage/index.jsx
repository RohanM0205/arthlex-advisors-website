import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import WhatsAppWidget from './components/WhatsAppWidget';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Arthlex Advisors - Strategic Financial Advisory & Tax Planning Services</title>
        <meta 
          name="description" 
          content="SEBI registered financial advisory firm offering strategic tax planning, business advisory, compliance management, and startup support. Your trusted growth partner for sustainable business success in India." 
        />
        <meta 
          name="keywords" 
          content="financial advisory, tax planning, business advisory, compliance management, startup support, SEBI registered, chartered accountant, India" 
        />
        <meta property="og:title" content="Arthlex Advisors - Strategic Financial Advisory Services" />
        <meta property="og:description" content="Transform complex financial landscapes into clear, actionable strategies for sustainable business success." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arthlexadvisors.com/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="main-content">
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <CTASection />
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Homepage;