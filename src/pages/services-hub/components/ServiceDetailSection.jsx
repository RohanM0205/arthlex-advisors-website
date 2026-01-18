import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceDetailSection = ({ service }) => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/book-consultation', { state: { selectedService: service?.id } });
  };

  return (
    <section id={service?.id} className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Icon name={service?.icon} size={14} />
              <span>{service?.category}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              {service?.title}
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {service?.detailedDescription}
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">What We Deliver</h3>
              {service?.deliverables?.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg">
                  <Icon name="CheckCircle2" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{deliverable?.title}</h4>
                    <p className="text-sm text-muted-foreground">{deliverable?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ideal For</h3>
              <div className="flex flex-wrap gap-2">
                {service?.idealFor?.map((audience, index) => (
                  <span key={index} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            <Button
              variant="default"
              onClick={handleBookConsultation}
              iconName="Calendar"
              iconPosition="left"
              size="lg"
              className="btn-conversion"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
              <Image
                src={service?.image}
                alt={service?.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;