import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
              <Icon name="MessageCircle" size={40} color="white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's Discuss Your Requirements
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation to explore how we can help you achieve your financial goals with strategic clarity and expert guidance.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/book-consultation')}
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl px-10 py-6 text-lg font-semibold">
              Book Free Consultation
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-white/80 pt-4">
            <Icon name="Shield" size={16} className="inline mr-2" />
            No obligation • Confidential discussion • Expert guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;