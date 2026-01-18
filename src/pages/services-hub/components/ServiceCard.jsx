import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, featured = false }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const element = document.getElementById(service?.id);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookConsultation = () => {
    navigate('/book-consultation', { state: { selectedService: service?.id } });
  };

  return (
    <div className={`bg-card rounded-lg p-6 md:p-8 transition-all hover:shadow-lg ${featured ? 'border-2 border-primary' : 'border border-border'}`}>
      {featured && (
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          <Icon name="Star" size={14} />
          <span>Most Popular</span>
        </div>
      )}
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${featured ? 'bg-primary text-primary-foreground' : 'bg-secondary/10 text-secondary'}`}>
          <Icon name={service?.icon} size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{service?.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground">{service?.shortDescription}</p>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {service?.keyFeatures?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={handleLearnMore}
          iconName="ArrowDown"
          iconPosition="right"
          fullWidth
          className="sm:flex-1"
        >
          Learn More
        </Button>
        <Button
          variant="default"
          onClick={handleBookConsultation}
          iconName="Calendar"
          iconPosition="left"
          fullWidth
          className="sm:flex-1 btn-conversion"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;