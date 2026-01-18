import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <Icon name="MessageCircle" size={20} color="white" />
            <span className="text-sm md:text-base font-medium">We're Here to Help</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get in Touch with Our Expert Team
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            Whether you have questions about our services, need urgent assistance, or want to schedule a consultation, we're ready to provide the clarity and support you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;