import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = ({ formData, onChange, errors }) => {
  const industryOptions = [
    { value: 'technology', label: 'Technology & IT' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'education', label: 'Education' },
    { value: 'hospitality', label: 'Hospitality & Tourism' },
    { value: 'professional-services', label: 'Professional Services' },
    { value: 'other', label: 'Other' }
  ];

  const businessTypeOptions = [
    { value: 'proprietorship', label: 'Sole Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
    { value: 'private-limited', label: 'Private Limited Company' },
    { value: 'public-limited', label: 'Public Limited Company' },
    { value: 'individual', label: 'Individual/Salaried' },
    { value: 'startup', label: 'Startup (Not Yet Registered)' }
  ];

  const handleInputChange = (field, value) => {
    onChange({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.fullName}
          onChange={(e) => handleInputChange('fullName', e?.target?.value)}
          error={errors?.fullName}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 98765 43210"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          error={errors?.phone}
          required
        />

        <Input
          label="Company/Organization Name"
          type="text"
          placeholder="Enter company name (if applicable)"
          value={formData?.companyName}
          onChange={(e) => handleInputChange('companyName', e?.target?.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Select
          label="Industry"
          placeholder="Select your industry"
          options={industryOptions}
          value={formData?.industry}
          onChange={(value) => handleInputChange('industry', value)}
          error={errors?.industry}
          required
          searchable
        />

        <Select
          label="Business Type"
          placeholder="Select business type"
          options={businessTypeOptions}
          value={formData?.businessType}
          onChange={(value) => handleInputChange('businessType', value)}
          error={errors?.businessType}
          required
        />
      </div>
      <Input
        label="Consultation Topic"
        type="text"
        placeholder="Brief description of what you'd like to discuss"
        value={formData?.topic}
        onChange={(e) => handleInputChange('topic', e?.target?.value)}
        description="Help us prepare for a more productive consultation"
        error={errors?.topic}
        required
      />
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Additional Information (Optional)
        </label>
        <textarea
          placeholder="Share any specific concerns, questions, or documents you'd like us to review..."
          value={formData?.additionalInfo}
          onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>
      <div className="space-y-3">
        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy"
          checked={formData?.agreeTerms}
          onChange={(e) => handleInputChange('agreeTerms', e?.target?.checked)}
          error={errors?.agreeTerms}
          required
        />

        <Checkbox
          label="Send me updates about regulatory changes and financial insights"
          checked={formData?.subscribeUpdates}
          onChange={(e) => handleInputChange('subscribeUpdates', e?.target?.checked)}
        />
      </div>
    </div>
  );
};

export default ConsultationForm;