// // import React from 'react';
// // import Input from '../../../components/ui/Input';
// // import Select from '../../../components/ui/Select';
// // import { Checkbox } from '../../../components/ui/Checkbox';

// // const ConsultationForm = ({ formData, onChange, errors }) => {
// //   const industryOptions = [
// //     { value: 'technology', label: 'Technology & IT' },
// //     { value: 'manufacturing', label: 'Manufacturing' },
// //     { value: 'retail', label: 'Retail & E-commerce' },
// //     { value: 'healthcare', label: 'Healthcare' },
// //     { value: 'finance', label: 'Finance & Banking' },
// //     { value: 'real-estate', label: 'Real Estate' },
// //     { value: 'education', label: 'Education' },
// //     { value: 'hospitality', label: 'Hospitality & Tourism' },
// //     { value: 'professional-services', label: 'Professional Services' },
// //     { value: 'other', label: 'Other' }
// //   ];

// //   const businessTypeOptions = [
// //     { value: 'proprietorship', label: 'Sole Proprietorship' },
// //     { value: 'partnership', label: 'Partnership' },
// //     { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
// //     { value: 'private-limited', label: 'Private Limited Company' },
// //     { value: 'public-limited', label: 'Public Limited Company' },
// //     { value: 'individual', label: 'Individual/Salaried' },
// //     { value: 'startup', label: 'Startup (Not Yet Registered)' }
// //   ];

// //   const handleInputChange = (field, value) => {
// //     onChange({ ...formData, [field]: value });
// //   };

// //   return (
// //     <div className="space-y-4 md:space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// //         <Input
// //           label="Full Name"
// //           type="text"
// //           placeholder="Enter your full name"
// //           value={formData?.fullName}
// //           onChange={(e) => handleInputChange('fullName', e?.target?.value)}
// //           error={errors?.fullName}
// //           required
// //         />

// //         <Input
// //           label="Email Address"
// //           type="email"
// //           placeholder="your.email@example.com"
// //           value={formData?.email}
// //           onChange={(e) => handleInputChange('email', e?.target?.value)}
// //           error={errors?.email}
// //           required
// //         />
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// //         <Input
// //           label="Phone Number"
// //           type="tel"
// //           placeholder="+91 98765 43210"
// //           value={formData?.phone}
// //           onChange={(e) => handleInputChange('phone', e?.target?.value)}
// //           error={errors?.phone}
// //           required
// //         />

// //         <Input
// //           label="Company/Organization Name"
// //           type="text"
// //           placeholder="Enter company name (if applicable)"
// //           value={formData?.companyName}
// //           onChange={(e) => handleInputChange('companyName', e?.target?.value)}
// //         />
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// //         <Select
// //           label="Industry"
// //           placeholder="Select your industry"
// //           options={industryOptions}
// //           value={formData?.industry}
// //           onChange={(value) => handleInputChange('industry', value)}
// //           error={errors?.industry}
// //           required
// //           searchable
// //         />

// //         <Select
// //           label="Business Type"
// //           placeholder="Select business type"
// //           options={businessTypeOptions}
// //           value={formData?.businessType}
// //           onChange={(value) => handleInputChange('businessType', value)}
// //           error={errors?.businessType}
// //           required
// //         />
// //       </div>
// //       <Input
// //         label="Consultation Topic"
// //         type="text"
// //         placeholder="Brief description of what you'd like to discuss"
// //         value={formData?.topic}
// //         onChange={(e) => handleInputChange('topic', e?.target?.value)}
// //         description="Help us prepare for a more productive consultation"
// //         error={errors?.topic}
// //         required
// //       />
// //       <div className="space-y-3">
// //         <label className="text-sm font-medium text-foreground">
// //           Additional Information (Optional)
// //         </label>
// //         <textarea
// //           placeholder="Share any specific concerns, questions, or documents you'd like us to review..."
// //           value={formData?.additionalInfo}
// //           onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
// //           rows={4}
// //           className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
// //         />
// //       </div>
// //       <div className="space-y-3">
// //         <Checkbox
// //           label="I agree to the Terms of Service and Privacy Policy"
// //           checked={formData?.agreeTerms}
// //           onChange={(e) => handleInputChange('agreeTerms', e?.target?.checked)}
// //           error={errors?.agreeTerms}
// //           required
// //         />

// //         <Checkbox
// //           label="Send me updates about regulatory changes and financial insights"
// //           checked={formData?.subscribeUpdates}
// //           onChange={(e) => handleInputChange('subscribeUpdates', e?.target?.checked)}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ConsultationForm;

// // import React from 'react';
// // import Input from '../../../components/ui/Input';
// // import Select from '../../../components/ui/Select';
// // import { Checkbox } from '../../../components/ui/Checkbox';

// // const ConsultationForm = ({ formData, onChange, errors }) => {

// //   const serviceCategoryOptions = [
// //     { value: 'taxation', label: 'Taxation' },
// //     { value: 'compliance', label: 'Compliance' },
// //     { value: 'business-advisory', label: 'Business Advisory' },
// //     { value: 'startup', label: 'Startup Services' },
// //     { value: 'finance', label: 'Finance & Accounting' }
// //   ];

// //   const serviceSubCategoryMap = {
// //     taxation: [
// //       { value: 'income-tax', label: 'Income Tax' },
// //       { value: 'gst', label: 'GST' },
// //       { value: 'tax-planning', label: 'Tax Planning' }
// //     ],
// //     compliance: [
// //       { value: 'roc', label: 'ROC Compliance' },
// //       { value: 'audit', label: 'Audit & Filings' }
// //     ],
// //     'business-advisory': [
// //       { value: 'strategy', label: 'Business Strategy' },
// //       { value: 'restructuring', label: 'Restructuring' }
// //     ],
// //     startup: [
// //       { value: 'registration', label: 'Company Registration' },
// //       { value: 'funding', label: 'Funding & Pitching' }
// //     ],
// //     finance: [
// //       { value: 'accounting', label: 'Accounting' },
// //       { value: 'financial-modeling', label: 'Financial Modeling' }
// //     ]
// //   };

// //   const industryOptions = [
// //     { value: 'technology', label: 'Technology & IT' },
// //     { value: 'manufacturing', label: 'Manufacturing' },
// //     { value: 'retail', label: 'Retail & E-commerce' },
// //     { value: 'healthcare', label: 'Healthcare' },
// //     { value: 'finance', label: 'Finance & Banking' },
// //     { value: 'real-estate', label: 'Real Estate' },
// //     { value: 'education', label: 'Education' },
// //     { value: 'hospitality', label: 'Hospitality & Tourism' },
// //     { value: 'professional-services', label: 'Professional Services' },
// //     { value: 'other', label: 'Other' }
// //   ];

// //   const businessTypeOptions = [
// //     { value: 'proprietorship', label: 'Sole Proprietorship' },
// //     { value: 'partnership', label: 'Partnership' },
// //     { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
// //     { value: 'private-limited', label: 'Private Limited Company' },
// //     { value: 'public-limited', label: 'Public Limited Company' },
// //     { value: 'individual', label: 'Individual / Salaried' },
// //     { value: 'startup', label: 'Startup (Not Yet Registered)' }
// //   ];

// //   const handleInputChange = (field, value) => {
// //     onChange({ ...formData, [field]: value });
// //   };

// //   return (
// //     <div className="space-y-6">

// //       {/* Personal Info */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         <Input
// //           label="Full Name"
// //           value={formData?.fullName}
// //           onChange={(e) => handleInputChange('fullName', e.target.value)}
// //           error={errors?.fullName}
// //           required
// //         />

// //         <Input
// //           label="Email Address"
// //           type="email"
// //           value={formData?.email}
// //           onChange={(e) => handleInputChange('email', e.target.value)}
// //           error={errors?.email}
// //           required
// //         />
// //       </div>

// //       <div className="grid md:grid-cols-2 gap-6">
// //         <Input
// //           label="Phone Number"
// //           value={formData?.phone}
// //           onChange={(e) => handleInputChange('phone', e.target.value)}
// //           error={errors?.phone}
// //           required
// //         />

// //         <Input
// //           label="Company / Organization"
// //           value={formData?.companyName}
// //           onChange={(e) => handleInputChange('companyName', e.target.value)}
// //         />
// //       </div>

// //       {/* Service Inquiry */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         <Select
// //           label="Service Inquiry Category"
// //           options={serviceCategoryOptions}
// //           value={formData?.serviceInquiryCategory}
// //           onChange={(value) => {
// //             handleInputChange('serviceInquiryCategory', value);
// //             handleInputChange('serviceInquirySubCategory', null);
// //           }}
// //           required
// //         />

// //         <Select
// //           label="Service Inquiry Sub-Category"
// //           options={
// //             serviceSubCategoryMap[formData?.serviceInquiryCategory] || []
// //           }
// //           value={formData?.serviceInquirySubCategory}
// //           onChange={(value) =>
// //             handleInputChange('serviceInquirySubCategory', value)
// //           }
// //           required
// //           disabled={!formData?.serviceInquiryCategory}
// //         />
// //       </div>

// //       {/* Business Info */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         <Select
// //           label="Industry"
// //           options={industryOptions}
// //           value={formData?.industry}
// //           onChange={(value) => handleInputChange('industry', value)}
// //           required
// //         />

// //         <Select
// //           label="Business Type"
// //           options={businessTypeOptions}
// //           value={formData?.businessType}
// //           onChange={(value) => handleInputChange('businessType', value)}
// //           required
// //         />
// //       </div>

// //       <Input
// //         label="Consultation Topic"
// //         value={formData?.topic}
// //         onChange={(e) => handleInputChange('topic', e.target.value)}
// //         error={errors?.topic}
// //         required
// //       />

// //       <textarea
// //         className="w-full p-3 rounded-md border bg-background"
// //         rows={4}
// //         placeholder="Additional information (optional)"
// //         value={formData?.additionalInfo}
// //         onChange={(e) =>
// //           handleInputChange('additionalInfo', e.target.value)
// //         }
// //       />

// //       <Checkbox
// //         label="I agree to Terms & Privacy Policy"
// //         checked={formData?.agreeTerms}
// //         onChange={(e) =>
// //           handleInputChange('agreeTerms', e.target.checked)
// //         }
// //         required
// //       />
// //     </div>
// //   );
// // };

// // export default ConsultationForm;



// import React from 'react';
// import Input from '../../../components/ui/Input';
// import Select from '../../../components/ui/Select';
// import { Checkbox } from '../../../components/ui/Checkbox';

// const ConsultationForm = ({ formData, onChange, errors }) => {

//   const industryOptions = [
//     { value: 'technology', label: 'Technology & IT' },
//     { value: 'manufacturing', label: 'Manufacturing' },
//     { value: 'retail', label: 'Retail & E-commerce' },
//     { value: 'healthcare', label: 'Healthcare' },
//     { value: 'finance', label: 'Finance & Banking' },
//     { value: 'real-estate', label: 'Real Estate' },
//     { value: 'education', label: 'Education' },
//     { value: 'hospitality', label: 'Hospitality & Tourism' },
//     { value: 'professional-services', label: 'Professional Services' },
//     { value: 'other', label: 'Other' }
//   ];

//   const businessTypeOptions = [
//     { value: 'proprietorship', label: 'Sole Proprietorship' },
//     { value: 'partnership', label: 'Partnership' },
//     { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
//     { value: 'private-limited', label: 'Private Limited Company' },
//     { value: 'public-limited', label: 'Public Limited Company' },
//     { value: 'individual', label: 'Individual / Salaried' },
//     { value: 'startup', label: 'Startup (Not Yet Registered)' }
//   ];

//   const handleInputChange = (field, value) => {
//     onChange({ ...formData, [field]: value });
//   };

//   return (
//     <div className="space-y-6">

//       {/* Personal Info */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <Input
//           label="Full Name"
//           value={formData?.fullName}
//           onChange={(e) => handleInputChange('fullName', e.target.value)}
//           error={errors?.fullName}
//           required
//         />

//         <Input
//           label="Email Address"
//           type="email"
//           value={formData?.email}
//           onChange={(e) => handleInputChange('email', e.target.value)}
//           error={errors?.email}
//           required
//         />
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <Input
//           label="Phone Number"
//           value={formData?.phone}
//           onChange={(e) => handleInputChange('phone', e.target.value)}
//           error={errors?.phone}
//           required
//         />

//         <Input
//           label="Company / Organization"
//           value={formData?.companyName}
//           onChange={(e) => handleInputChange('companyName', e.target.value)}
//         />
//       </div>

//       {/* Business Info */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <Select
//           label="Industry"
//           options={industryOptions}
//           value={formData?.industry}
//           onChange={(value) => handleInputChange('industry', value)}
//           required
//         />

//         <Select
//           label="Business Type"
//           options={businessTypeOptions}
//           value={formData?.businessType}
//           onChange={(value) => handleInputChange('businessType', value)}
//           required
//         />
//       </div>

//       <Input
//         label="Consultation Topic"
//         value={formData?.topic}
//         onChange={(e) => handleInputChange('topic', e.target.value)}
//         error={errors?.topic}
//         required
//       />

//       <textarea
//         className="w-full p-3 rounded-md border bg-background"
//         rows={4}
//         placeholder="Additional information (optional)"
//         value={formData?.additionalInfo}
//         onChange={(e) =>
//           handleInputChange('additionalInfo', e.target.value)
//         }
//       />

//       <Checkbox
//         label="I agree to Terms & Privacy Policy"
//         checked={formData?.agreeTerms}
//         onChange={(e) =>
//           handleInputChange('agreeTerms', e.target.checked)
//         }
//         required
//       />
//     </div>
//   );
// };

// export default ConsultationForm;



import React, { useCallback } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = ({ formData, onChange, errors }) => {
  /* ================= OPTIONS ================= */
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
    { value: 'individual', label: 'Individual / Salaried' },
    { value: 'startup', label: 'Startup (Not Yet Registered)' }
  ];

  /* ================= HELPERS ================= */
  const sanitizeValue = (value) => {
    if (typeof value === 'string') return value.trim();
    return value;
  };

  const handleInputChange = useCallback(
    (field, value) => {
      onChange({
        ...formData,
        [field]: sanitizeValue(value)
      });
    },
    [formData, onChange]
  );

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          name="fullName"
          label="Full Name"
          value={formData?.fullName || ''}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          error={errors?.fullName}
          required
        />

        <Input
          name="email"
          label="Email Address"
          type="email"
          value={formData?.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors?.email}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          name="phone"
          label="Phone Number"
          value={formData?.phone || ''}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          error={errors?.phone}
          required
        />

        <Input
          name="companyName"
          label="Company / Organization"
          value={formData?.companyName || ''}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
        />
      </div>

      {/* Business Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Select
          name="industry"
          label="Industry"
          options={industryOptions}
          value={formData?.industry || ''}
          onChange={(value) => handleInputChange('industry', value)}
          required
        />

        <Select
          name="businessType"
          label="Business Type"
          options={businessTypeOptions}
          value={formData?.businessType || ''}
          onChange={(value) => handleInputChange('businessType', value)}
          required
        />
      </div>

      <Input
        name="topic"
        label="Consultation Topic"
        value={formData?.topic || ''}
        onChange={(e) => handleInputChange('topic', e.target.value)}
        error={errors?.topic}
        required
      />

      <textarea
        name="additionalInfo"
        className="w-full p-3 rounded-md border bg-background text-sm"
        rows={4}
        placeholder="Additional information (optional)"
        value={formData?.additionalInfo || ''}
        onChange={(e) =>
          handleInputChange('additionalInfo', e.target.value)
        }
      />

      <Checkbox
        name="agreeTerms"
        label="I agree to Terms & Privacy Policy"
        checked={Boolean(formData?.agreeTerms)}
        onChange={(e) =>
          handleInputChange('agreeTerms', e.target.checked)
        }
        required
      />
    </div>
  );
};

export default ConsultationForm;
