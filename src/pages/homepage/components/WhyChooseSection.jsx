import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const WhyChooseSection = () => {
  const navigate = useNavigate();

  const strengths = [
    {
      icon: 'Shield',
      title: 'Trusted Expertise',
      description: 'SEBI registered with 15+ years of proven advisory excellence',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Target',
      title: 'Strategic Clarity',
      description: 'Transform complex financial challenges into clear actionable strategies',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'Users',
      title: 'Client-Centric',
      description: '500+ satisfied clients trust us for long-term financial guidance',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: 'TrendingUp',
      title: 'Growth Focused',
      description: 'Sustainable solutions aligned with your business objectives',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: 'Award',
      title: 'Compliance Excellence',
      description: 'Stay ahead of regulations with proactive advisory support',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: 'Lightbulb',
      title: 'Insight-Driven Advisory',
      description: 'Modern, research-backed insights tailored to today’s evolving financial landscape',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
    
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Arthlex Advisors
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your growth partner, not just your compliance provider
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths?.map((strength, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className={`${strength?.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={strength?.icon} size={28} className={strength?.color} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {strength?.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {strength?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;