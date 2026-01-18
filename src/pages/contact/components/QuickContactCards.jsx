import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickContactCards = ({ onWhatsAppClick, onEmailClick, onCallClick }) => {
  const contactMethods = [
    {
      id: 1,
      icon: 'MessageSquare',
      title: 'WhatsApp Chat',
      description: 'Get instant responses to your queries',
      action: 'Start Chat',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      buttonVariant: 'success',
      onClick: onWhatsAppClick
    },
    {
      id: 2,
      icon: 'Mail',
      title: 'Email Us',
      description: 'Detailed inquiries and document sharing',
      action: 'Send Email',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      buttonVariant: 'default',
      onClick: onEmailClick
    },
    {
      id: 3,
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak directly with our advisors',
      action: 'Call Now',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      buttonVariant: 'secondary',
      onClick: onCallClick
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`${method?.color} rounded-lg p-6 md:p-8 transition-all hover:shadow-md`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full ${method?.color} flex items-center justify-center mb-4 md:mb-6`}>
                <Icon name={method?.icon} size={24} className={method?.iconColor} />
              </div>
              
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                {method?.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                {method?.description}
              </p>
              
              <Button
                variant={method?.buttonVariant}
                onClick={method?.onClick}
                iconName="ArrowRight"
                iconPosition="right"
                fullWidth
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContactCards;