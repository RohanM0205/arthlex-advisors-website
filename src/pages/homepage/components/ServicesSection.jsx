import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "Calculator",
      title: "Income Tax Advisory",
      description: "Strategic tax planning and compliance for individuals and businesses.",
      features: [
        "Tax planning & deductions",
        "Capital gains optimization",
        "Notices & scrutiny handling"
      ],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: "Briefcase",
      title: "Business Finance",
      description: "Comprehensive financial solutions for business growth and expansion.",
      features: [
        "Working capital loans",
        "Project funding",
        "Financial planning"
      ],
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: "FileCheck",
      title: "GST Services",
      description: "Complete GST compliance and optimization services.",
      features: [
        "Return filing",
        "Input tax credit optimization",
        "GST audits"
      ],
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: "TrendingUp",
      title: "Project Finance",
      description: "Specialized financing solutions for projects and expansions.",
      features: [
        "Term loans & subsidies",
        "Cash flow analysis",
        "DPR & financial modeling"
      ],
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive advisory solutions tailored to your unique needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => navigate('/services-hub')}>
              
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`${service?.iconBg} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={28} className={service?.iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service?.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {service?.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                onClick={(e) => {
                  e?.stopPropagation();
                  navigate('/book-consultation');
                }}>
                Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;