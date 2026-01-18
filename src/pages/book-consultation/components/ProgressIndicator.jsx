import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, steps }) => {
  return (
    <div className="w-full bg-card rounded-lg border border-border p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                  currentStep > index
                    ? 'bg-success text-success-foreground'
                    : currentStep === index
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {currentStep > index ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <Icon name={step?.icon} size={20} />
                )}
              </div>
              <span
                className={`text-xs md:text-sm font-medium text-center ${
                  currentStep >= index ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {step?.label}
              </span>
            </div>
            {index < steps?.length - 1 && (
              <div
                className={`h-0.5 flex-1 mx-2 transition-all ${
                  currentStep > index ? 'bg-success' : 'bg-muted'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;