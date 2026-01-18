import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: 'Shield',
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparent and ethical advisory practices',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Target',
      title: 'Clarity & Precision',
      description: 'Simplifying complex financial matters with clear, actionable insights',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'TrendingUp',
      title: 'Long-Term Value',
      description: 'Focused on sustainable growth and strategic financial planning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: 'Users',
      title: 'Client-Centric',
      description: 'Your goals are our priority—personalized solutions for every client',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision and recommendation we make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
              <div className={`${value?.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5`}>
                <Icon name={value?.icon} size={32} className={value?.color} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value?.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;