import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConfirmationSummary = ({ consultationData, onEdit, onConfirm }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const consultationTypes = {
    'tax-planning': 'Tax Planning & Optimization',
    'business-advisory': 'Business Advisory & Strategy',
    'compliance': 'Compliance & Regulatory Support',
    'startup-support': 'Startup Support & Structuring'
  };

  return (
    <div className="w-full space-y-6 md:space-y-8">
      <div className="bg-card rounded-lg border border-border p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Consultation Summary
          </h3>
          <Button variant="ghost" size="sm" onClick={onEdit} iconName="Edit2">
            Edit
          </Button>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Briefcase" size={24} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Consultation Type</p>
              <p className="text-base md:text-lg font-semibold text-foreground">
                {consultationTypes?.[consultationData?.consultationType]}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Calendar" size={24} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
              <p className="text-base md:text-lg font-semibold text-foreground">
                {formatDate(consultationData?.selectedDate)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {consultationData?.selectedTime} IST
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="User" size={24} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Contact Information</p>
              <p className="text-base md:text-lg font-semibold text-foreground">
                {consultationData?.formData?.fullName}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {consultationData?.formData?.email}
              </p>
              <p className="text-sm text-muted-foreground">
                {consultationData?.formData?.phone}
              </p>
            </div>
          </div>

          {consultationData?.formData?.companyName && (
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Building2" size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Company</p>
                <p className="text-base md:text-lg font-semibold text-foreground">
                  {consultationData?.formData?.companyName}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="MessageSquare" size={24} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Topic</p>
              <p className="text-base text-foreground">{consultationData?.formData?.topic}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-accent/10 rounded-lg border border-accent/20 p-4 md:p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
              What to Expect
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>You'll receive a confirmation email with calendar invite and video conferencing link</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>SMS reminder will be sent 24 hours before your consultation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>Preparation materials will be shared via email to maximize consultation value</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>Our advisor will review your information beforehand for a productive discussion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        size="lg"
        onClick={onConfirm}
        iconName="CheckCircle"
        iconPosition="left"
        fullWidth
        className="btn-conversion"
      >
        Confirm Consultation
      </Button>
    </div>
  );
};

export default ConfirmationSummary;