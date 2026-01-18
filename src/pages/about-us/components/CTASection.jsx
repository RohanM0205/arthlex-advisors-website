import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/book-consultation');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 text-white">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            <Icon name="Sparkles" size={16} className="md:w-5 md:h-5" />
            <span>Ready to Transform Your Financial Future?</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Let's Build Your Success Story Together
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join 500+ businesses and individuals who trust Arthlex Advisors for strategic financial guidance. Schedule your consultation today and experience the difference expert advisory makes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6">
            <Button
              variant="default"
              size="lg"
              onClick={handleBookConsultation}
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
            >
              Book Free Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactUs}
              iconName="Phone"
              iconPosition="left"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-8 md:pt-12">
            <div className="flex flex-col items-center space-y-2 md:space-y-3">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Clock" size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">24-48 Hours</div>
                <div className="text-xs md:text-sm opacity-80">Response Time</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 md:space-y-3">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Shield" size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">100%</div>
                <div className="text-xs md:text-sm opacity-80">Confidential</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 md:space-y-3">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Award" size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">No Obligation</div>
                <div className="text-xs md:text-sm opacity-80">Free Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;