import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [businessType, setBusinessType] = useState('');
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [currentTaxRate, setCurrentTaxRate] = useState('');
  const [showResults, setShowResults] = useState(false);

  const businessTypeOptions = [
    { value: 'startup', label: 'Startup (< 2 years)' },
    { value: 'sme', label: 'Small & Medium Enterprise' },
    { value: 'corporate', label: 'Corporate Entity' },
    { value: 'individual', label: 'High Net Worth Individual' }
  ];

  const calculateROI = () => {
    if (businessType && annualRevenue && currentTaxRate) {
      setShowResults(true);
    }
  };

  const getEstimatedSavings = () => {
    const revenue = parseFloat(annualRevenue);
    const taxRate = parseFloat(currentTaxRate);
    
    if (isNaN(revenue) || isNaN(taxRate)) return 0;
    
    const optimizationRate = businessType === 'startup' ? 0.15 : businessType === 'sme' ? 0.12 : 0.10;
    return Math.round((revenue * (taxRate / 100) * optimizationRate) / 100000) * 100000;
  };

  const getPaybackPeriod = () => {
    const savings = getEstimatedSavings();
    const avgServiceCost = 150000;
    return savings > 0 ? Math.ceil((avgServiceCost / savings) * 12) : 0;
  };

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon name="Calculator" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">ROI Calculator</h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Estimate potential savings with strategic financial advisory
          </p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <Select
          label="Business Type"
          placeholder="Select your business type"
          options={businessTypeOptions}
          value={businessType}
          onChange={setBusinessType}
          required
        />

        <Input
          label="Annual Revenue (₹)"
          type="number"
          placeholder="Enter annual revenue"
          value={annualRevenue}
          onChange={(e) => setAnnualRevenue(e?.target?.value)}
          required
        />

        <Input
          label="Current Effective Tax Rate (%)"
          type="number"
          placeholder="Enter current tax rate"
          value={currentTaxRate}
          onChange={(e) => setCurrentTaxRate(e?.target?.value)}
          required
          min="0"
          max="100"
        />
      </div>
      <Button
        variant="default"
        onClick={calculateROI}
        iconName="TrendingUp"
        iconPosition="left"
        fullWidth
        disabled={!businessType || !annualRevenue || !currentTaxRate}
        className="btn-conversion mb-6"
      >
        Calculate Potential Savings
      </Button>
      {showResults && (
        <div className="space-y-4 pt-6 border-t border-border animate-fade-in">
          <div className="bg-success/5 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-success">Estimated Annual Savings</span>
              <Icon name="TrendingUp" size={18} className="text-success" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-success">
              ₹{getEstimatedSavings()?.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on industry benchmarks and optimization strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
              <div className="text-2xl font-bold text-foreground">{getPaybackPeriod()} months</div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">3-Year Value</div>
              <div className="text-2xl font-bold text-foreground">
                ₹{(getEstimatedSavings() * 3)?.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          <div className="bg-warning/5 p-4 rounded-lg flex items-start space-x-3">
            <Icon name="Info" size={18} className="text-warning mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              These are estimated projections based on typical optimization scenarios. Actual results vary based on specific business circumstances and regulatory environment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;