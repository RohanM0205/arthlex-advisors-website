import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceRecommendationEngine = ({ services }) => {
  const navigate = useNavigate();
  const [businessStage, setBusinessStage] = useState('');
  const [primaryGoals, setPrimaryGoals] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const businessStageOptions = [
    { value: 'startup', label: 'Startup / Early Stage' },
    { value: 'growth', label: 'Growth Stage' },
    { value: 'established', label: 'Established Business' },
    { value: 'individual', label: 'Individual / Professional' }
  ];

  const goalOptions = [
    { id: 'tax-optimization', label: 'Minimize tax liability' },
    { id: 'compliance', label: 'Ensure regulatory compliance' },
    { id: 'growth-strategy', label: 'Strategic business growth' },
    { id: 'structure', label: 'Optimize business structure' },
    { id: 'funding', label: 'Prepare for funding/investment' },
    { id: 'wealth', label: 'Personal wealth management' }
  ];

  const handleGoalToggle = (goalId) => {
    setPrimaryGoals(prev =>
      prev?.includes(goalId)
        ? prev?.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const getRecommendedServices = () => {
    const recommendations = [];

    if (primaryGoals?.includes('tax-optimization') || primaryGoals?.includes('wealth')) {
      recommendations?.push(services?.find(s => s?.id === 'tax-planning'));
    }

    if (primaryGoals?.includes('growth-strategy') || primaryGoals?.includes('structure')) {
      recommendations?.push(services?.find(s => s?.id === 'business-advisory'));
    }

    if (primaryGoals?.includes('compliance')) {
      recommendations?.push(services?.find(s => s?.id === 'compliance'));
    }

    if (businessStage === 'startup' || primaryGoals?.includes('funding')) {
      recommendations?.push(services?.find(s => s?.id === 'startup-support'));
    }

    return [...new Set(recommendations)]?.filter(Boolean);
  };

  const handleGetRecommendations = () => {
    if (businessStage && primaryGoals?.length > 0) {
      setShowRecommendation(true);
    }
  };

  const handleBookService = (serviceId) => {
    navigate('/book-consultation', { state: { selectedService: serviceId } });
  };

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name="Sparkles" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Find Your Perfect Service</h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Answer a few questions to get personalized service recommendations
          </p>
        </div>
      </div>
      <div className="space-y-6 mb-6">
        <Select
          label="What stage is your business at?"
          placeholder="Select business stage"
          options={businessStageOptions}
          value={businessStage}
          onChange={setBusinessStage}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            What are your primary goals? (Select all that apply)
          </label>
          <div className="space-y-3">
            {goalOptions?.map((goal) => (
              <Checkbox
                key={goal?.id}
                label={goal?.label}
                checked={primaryGoals?.includes(goal?.id)}
                onChange={() => handleGoalToggle(goal?.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="default"
        onClick={handleGetRecommendations}
        iconName="ArrowRight"
        iconPosition="right"
        fullWidth
        disabled={!businessStage || primaryGoals?.length === 0}
        className="btn-conversion mb-6"
      >
        Get Recommendations
      </Button>
      {showRecommendation && (
        <div className="pt-6 border-t border-border space-y-4 animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="CheckCircle2" size={20} className="text-success" />
            <h4 className="text-lg font-semibold text-foreground">
              Recommended Services for You
            </h4>
          </div>

          {getRecommendedServices()?.length > 0 ? (
            <div className="space-y-4">
              {getRecommendedServices()?.map((service) => (
                <div key={service?.id} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={service?.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{service?.title}</h5>
                        <p className="text-sm text-muted-foreground">{service?.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handleBookService(service?.id)}
                    iconName="Calendar"
                    iconPosition="left"
                    size="sm"
                    fullWidth
                  >
                    Book Consultation
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-muted p-6 rounded-lg text-center">
              <Icon name="Search" size={32} className="text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                No specific recommendations yet. Please select your goals to get personalized suggestions.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceRecommendationEngine;