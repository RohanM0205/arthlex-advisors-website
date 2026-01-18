import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessMessage = ({ consultationData }) => {
  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-6 md:space-y-8 py-8 md:py-12">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={48} className="text-success" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Consultation Confirmed!
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Your consultation has been successfully scheduled
        </p>
      </div>
      <div className="bg-card rounded-lg border border-border p-6 md:p-8 text-left">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Icon name="Calendar" size={20} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="text-base font-semibold text-foreground">
                {formatDate(consultationData?.selectedDate)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={20} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="text-base font-semibold text-foreground">
                {consultationData?.selectedTime} IST
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={20} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Confirmation sent to</p>
              <p className="text-base font-semibold text-foreground">
                {consultationData?.formData?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-accent/10 rounded-lg border border-accent/20 p-4 md:p-6">
        <div className="flex items-start space-x-3 text-left">
          <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
              Next Steps
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-accent">1.</span>
                <span>Check your email for the calendar invite and video conferencing link</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">2.</span>
                <span>Review the preparation materials we've sent to maximize consultation value</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">3.</span>
                <span>You'll receive an SMS reminder 24 hours before your consultation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">4.</span>
                <span>Join the video call 5 minutes early to ensure smooth connection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <Button
          variant="default"
          size="lg"
          onClick={() => navigate('/homepage')}
          iconName="Home"
          iconPosition="left"
        >
          Back to Home
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate('/services-hub')}
          iconName="Briefcase"
          iconPosition="left"
        >
          Explore Services
        </Button>
      </div>
      <div className="pt-6 md:pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          Need to reschedule or have questions?
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/contact')}
          iconName="MessageCircle"
          iconPosition="left"
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;