import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyClientsChoose = () => {
  const reasons = [
    {
      icon: 'ShieldCheck',
      title: 'Trusted Expertise',
      description:
        'Our team brings deep expertise in taxation, compliance, and financial advisory, ensuring accurate and reliable guidance.'
    },
    {
      icon: 'Users',
      title: 'Client-Centric Approach',
      description:
        'We understand that every client is unique. Our solutions are customized to match your financial goals and business needs.'
    },
    {
      icon: 'TrendingUp',
      title: 'Strategic Financial Growth',
      description:
        'We focus on long-term financial planning and growth strategies, not just short-term compliance.'
    },
    {
      icon: 'Clock',
      title: 'Timely & Transparent Service',
      description:
        'Clear communication, transparent processes, and timely delivery are at the core of everything we do.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Icon name="Star" size={16} />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Clients Choose Arthlex Advisors
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We help individuals and businesses navigate complex financial decisions
            with confidence, clarity, and compliance.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center
                         hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon name={reason.icon} size={26} color="white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsChoose;
