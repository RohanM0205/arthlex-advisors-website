import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, featured = false }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const element = document.getElementById(service?.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookConsultation = () => {
    navigate('/book-consultation', {
      state: { selectedService: service?.id }
    });
  };

  return (
    <div
      className={`
        relative bg-white rounded-2xl p-6 md:p-8 border
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${featured ? 'border-primary shadow-lg' : 'border-border'}
      `}
    >
      {/* Premium highlight for featured */}
      {featured && (
        <div className="absolute -top-3 right-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-primary text-primary-foreground text-xs font-semibold shadow-md">
            <Icon name="Star" size={14} />
            Recommended
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`
            w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
            ${featured
              ? 'bg-primary text-primary-foreground'
              : 'bg-primary/10 text-primary'}
          `}
        >
          <Icon name={service?.icon} size={26} />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
            {service?.title}
          </h3>
          <p className="mt-1 text-sm md:text-base text-muted-foreground">
            {service?.shortDescription}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-5" />

      {/* Key Features */}
      <div className="space-y-3 mb-8">
        {service?.keyFeatures?.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1">
              <Icon
                name="CheckCircle"
                size={16}
                className="text-green-600"
              />
            </div>
            <span className="text-sm md:text-base text-foreground leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={handleLearnMore}
          iconName="ArrowDown"
          iconPosition="right"
          fullWidth
          className="sm:flex-1"
        >
          Explore Details
        </Button>

        <Button
          variant="default"
          onClick={handleBookConsultation}
          iconName="Calendar"
          iconPosition="left"
          fullWidth
          className="sm:flex-1 btn-conversion"
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
