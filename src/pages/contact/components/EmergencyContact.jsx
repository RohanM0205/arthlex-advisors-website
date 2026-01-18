import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      id: 1,
      title: 'Tax Notice Emergency',
      description: 'Received an urgent tax notice or assessment order?',
      phone: '+91 98765 43210',
      available: '24/7 Emergency Hotline'
    },
    {
      id: 2,
      title: 'Compliance Deadline',
      description: 'Critical compliance deadline approaching?',
      phone: '+91 98765 43211',
      available: 'Mon-Sun: 8:00 AM - 10:00 PM'
    }
  ];

  const handleEmergencyCall = (phone) => {
    window.location.href = `tel:${phone?.replace(/\s/g, '')}`;
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-destructive/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          <div className="flex items-start space-x-4 mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Icon name="AlertCircle" size={24} className="text-destructive" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Emergency Contact
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                For urgent matters requiring immediate attention, use our emergency contact lines
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {emergencyContacts?.map((contact) => (
              <div
                key={contact?.id}
                className="border border-border rounded-lg p-4 md:p-6 hover:border-destructive transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {contact?.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {contact?.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Phone" size={18} className="text-destructive" />
                  <span className="text-base md:text-lg font-bold text-foreground">
                    {contact?.phone}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {contact?.available}
                  </span>
                </div>

                <Button
                  variant="destructive"
                  onClick={() => handleEmergencyCall(contact?.phone)}
                  iconName="Phone"
                  iconPosition="left"
                  fullWidth
                >
                  Call Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 bg-muted rounded-lg p-4 md:p-6">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  What Qualifies as an Emergency?
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Tax notices with immediate response deadlines, regulatory authority summons, compliance violations requiring urgent action, or any situation where delay could result in penalties or legal consequences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;