import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureDetailModal = ({ feature, onClose, onBook }) => {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative animate-fade-in-up">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <Icon name="X" size={22} />
        </button>

        <div className="p-8 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Icon name="Info" size={32} className="text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-center">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-center leading-relaxed">
            {feature.description}
          </p>

          {/* CTA */}
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
  );
};

export default FeatureDetailModal;
