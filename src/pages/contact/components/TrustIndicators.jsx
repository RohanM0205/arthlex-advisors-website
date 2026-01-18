import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const indicators = [
    {
      id: 1,
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'Guaranteed response within one business day'
    },
    {
      id: 2,
      icon: 'Shield',
      title: 'Secure Communication',
      description: 'End-to-end encrypted data transmission'
    },
    {
      id: 3,
      icon: 'Award',
      title: 'SEBI Registered',
      description: 'Certified and compliant advisory services'
    },
    {
      id: 4,
      icon: 'Users',
      title: '500+ Clients',
      description: 'Trusted by businesses across India'
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Why Choose Arthlex Advisors
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Your trust is our foundation. Here's what sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {indicators?.map((indicator) => (
            <div
              key={indicator?.id}
              className="text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon name={indicator?.icon} size={32} color="white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {indicator?.title}
              </h3>
              <p className="text-sm md:text-base text-white/80">
                {indicator?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;