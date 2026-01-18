import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationTypeCard = ({ 
  type, 
  isSelected, 
  onSelect, 
  icon, 
  title, 
  description, 
  duration, 
  features 
}) => {
  return (
    <button
      onClick={() => onSelect(type)}
      className={`w-full p-4 md:p-6 rounded-lg border-2 transition-all text-left ${
        isSelected
          ? 'border-primary bg-primary/5 shadow-md'
          : 'border-border hover:border-primary/50 hover:shadow-sm'
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
          }`}
        >
          <Icon name={icon} size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Clock" size={14} className="text-muted-foreground" />
            <span className="text-xs md:text-sm text-muted-foreground">{duration}</span>
          </div>
          <ul className="space-y-1.5">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon
                  name="Check"
                  size={14}
                  className={`mt-0.5 flex-shrink-0 ${
                    isSelected ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <span className="text-xs md:text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
};

export default ConsultationTypeCard;