import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    preferredContact: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service', disabled: true },
    { value: 'tax-planning', label: 'Tax Planning & Optimization' },
    { value: 'business-advisory', label: 'Business Advisory Services' },
    { value: 'compliance', label: 'Compliance & Regulatory Support' },
    { value: 'startup-support', label: 'Startup Financial Structuring' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const contactMethodOptions = [
    { value: '', label: 'Select preferred method', disabled: true },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'any', label: 'Any Method' }
  ];

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData?.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
        preferredContact: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Send Us a Message
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours during business days
          </p>
        </div>

        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 mb-6 md:mb-8 flex items-start space-x-3">
            <Icon name="CheckCircle" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base md:text-lg font-semibold text-green-900 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-sm md:text-base text-green-700">
                Thank you for contacting us. We'll review your message and respond within 24 hours.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData?.name}
              onChange={handleChange}
              error={errors?.name}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={handleChange}
              error={errors?.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              value={formData?.phone}
              onChange={handleChange}
              error={errors?.phone}
              required
            />

            <Select
              label="Service Interest"
              options={serviceOptions}
              value={formData?.service}
              onChange={(value) => handleSelectChange('service', value)}
              error={errors?.service}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Subject (Optional)"
              type="text"
              name="subject"
              placeholder="Brief subject line"
              value={formData?.subject}
              onChange={handleChange}
            />

            <Select
              label="Preferred Contact Method"
              options={contactMethodOptions}
              value={formData?.preferredContact}
              onChange={(value) => handleSelectChange('preferredContact', value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your requirements, questions, or how we can help you..."
              value={formData?.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors?.message ? 'border-destructive' : 'border-input'
              }`}
            />
            {errors?.message && (
              <p className="text-sm text-destructive mt-1">{errors?.message}</p>
            )}
          </div>

          <div className="bg-muted rounded-lg p-4 md:p-6">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  Your Privacy is Protected
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  All information shared through this form is encrypted and handled in accordance with our privacy policy. We never share your data with third parties.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="btn-conversion"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;