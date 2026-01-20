import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OtherServiceModal = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative animate-fade-in-up">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <Icon name="X" size={22} />
        </button>

        <div className="p-8 space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Icon name={service.icon} size={32} className="text-blue-600" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3">
            {service.features.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={18} className="text-green-600 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={onBook}
              className="w-full bg-primary hover:bg-primary/90 rounded-xl"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServiceModal;
