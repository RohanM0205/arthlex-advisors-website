import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessMessage = ({ consultationData }) => {
  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const categoryTitle =
    consultationData?.selectedCategory?.title || '—';

  const serviceTitle =
    consultationData?.selectedService || '—';

  const email =
    consultationData?.formData?.email || '—';

  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-6 md:space-y-8 py-10">

      {/* SUCCESS ICON */}
      <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={48} className="text-success" />
      </div>

      {/* TITLE */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Consultation Confirmed
        </h2>
        <p className="text-muted-foreground">
          Thank you for booking with Arthlex Advisors
        </p>
      </div>

      {/* SUMMARY */}
      <div className="bg-card rounded-xl border p-6 text-left space-y-4">

        <SummaryItem
          icon="Calendar"
          label="Preferred Date"
          value={formatDate(consultationData?.selectedDate)}
        />

        <SummaryItem
          icon="Layers"
          label="Service Category"
          value={categoryTitle}
        />

        <SummaryItem
          icon="Tag"
          label="Selected Service"
          value={serviceTitle}
        />

        <SummaryItem
          icon="Mail"
          label="Confirmation Email"
          value={email}
        />

      </div>

      {/* NEXT STEPS */}
      <div className="bg-muted/40 rounded-xl border p-5 text-left">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="Info" size={18} className="text-primary" />
          What Happens Next
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Our team will contact you to confirm the consultation time</li>
          <li>• You may receive a follow-up call for clarification</li>
          <li>• Please check your email for further instructions</li>
        </ul>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <Button
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

      {/* SUPPORT */}
      <div className="pt-6 border-t">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/contact')}
          iconName="MessageCircle"
          iconPosition="left"
        >
          Need help? Contact Support
        </Button>
      </div>
    </div>
  );
};

/* Reusable summary row */
const SummaryItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon name={icon} size={18} className="text-primary mt-1" />
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  </div>
);

export default SuccessMessage;
