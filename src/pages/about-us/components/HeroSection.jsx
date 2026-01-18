import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            <Icon name="Users" size={16} />
            <span>About Arthlex Advisors</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your Trusted Financial Partner
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building confidence through clarity in complex financial landscapes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;