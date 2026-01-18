// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from '../../components/ui/Header';
// import Footer from '../../components/ui/Footer';
// import Icon from '../../components/AppIcon';
// import Button from '../../components/ui/Button';

// import Select from '../../components/ui/Select';

// import ConsultationTypeCard from './components/ConsultationTypeCard';
// import AvailabilityCalendar from './components/AvailabilityCalendar';
// import TimeSlotSelector from './components/TimeSlotSelector';
// import ConsultationForm from './components/ConsultationForm';
// import ProgressIndicator from './components/ProgressIndicator';
// import ConfirmationSummary from './components/ConfirmationSummary';
// import SuccessMessage from './components/SuccessMessage';

// const BookConsultation = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [consultationType, setConsultationType] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     companyName: '',
//     industry: '',
//     businessType: '',
//     topic: '',
//     additionalInfo: '',
//     agreeTerms: false,
//     subscribeUpdates: false
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const steps = [
//     { id: 'type', label: 'Service Type', icon: 'Briefcase' },
//     { id: 'schedule', label: 'Date & Time', icon: 'Calendar' },
//     { id: 'details', label: 'Your Details', icon: 'User' },
//     { id: 'confirm', label: 'Confirm', icon: 'CheckCircle' }
//   ];

//   const consultationTypes = [
//     {
//       type: 'tax-planning',
//       icon: 'Calculator',
//       title: 'Tax Planning & Optimization',
//       description: 'Strategic tax planning for businesses and individuals to minimize liabilities and maximize savings',
//       duration: '60 minutes',
//       features: [
//         'Comprehensive tax assessment',
//         'Optimization strategies',
//         'Compliance roadmap',
//         'Investment planning guidance'
//       ]
//     },
//     {
//       type: 'business-advisory',
//       icon: 'TrendingUp',
//       title: 'Business Advisory & Strategy',
//       description: 'Strategic financial guidance for business growth, expansion, and operational efficiency',
//       duration: '90 minutes',
//       features: [
//         'Financial health analysis',
//         'Growth strategy development',
//         'Risk assessment',
//         'Performance optimization'
//       ]
//     },
//     {
//       type: 'compliance',
//       icon: 'Shield',
//       title: 'Compliance & Regulatory Support',
//       description: 'Expert guidance on regulatory compliance, GST, and statutory requirements',
//       duration: '45 minutes',
//       features: [
//         'Compliance audit',
//         'Regulatory updates',
//         'Documentation review',
//         'Filing assistance'
//       ]
//     },
//     {
//       type: 'startup-support',
//       icon: 'Rocket',
//       title: 'Startup Support & Structuring',
//       description: 'Comprehensive support for startups including entity structuring and financial planning',
//       duration: '75 minutes',
//       features: [
//         'Entity structure guidance',
//         'Funding strategy',
//         'Financial modeling',
//         'Compliance setup'
//       ]
//     }
//   ];

//   const availableDates = [
//     '2026-01-20',
//     '2026-01-21',
//     '2026-01-22',
//     '2026-01-23',
//     '2026-01-24',
//     '2026-01-27',
//     '2026-01-28',
//     '2026-01-29',
//     '2026-01-30',
//     '2026-01-31'
//   ];

//   const timeSlots = [
//     { time: '09:00 AM', available: true },
//     { time: '10:00 AM', available: true },
//     { time: '11:00 AM', available: false },
//     { time: '12:00 PM', available: true },
//     { time: '02:00 PM', available: true },
//     { time: '03:00 PM', available: true },
//     { time: '04:00 PM', available: false },
//     { time: '05:00 PM', available: true }
//   ];

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [currentStep]);

//   const validateStep = () => {
//     const newErrors = {};

//     if (currentStep === 0 && !consultationType) {
//       newErrors.consultationType = 'Please select a consultation type';
//     }

//     if (currentStep === 1) {
//       if (!selectedDate) {
//         newErrors.selectedDate = 'Please select a date';
//       }
//       if (!selectedTime) {
//         newErrors.selectedTime = 'Please select a time slot';
//       }
//     }

//     if (currentStep === 2) {
//       if (!formData?.fullName?.trim()) {
//         newErrors.fullName = 'Full name is required';
//       }
//       if (!formData?.email?.trim()) {
//         newErrors.email = 'Email is required';
//       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
//         newErrors.email = 'Please enter a valid email address';
//       }
//       if (!formData?.phone?.trim()) {
//         newErrors.phone = 'Phone number is required';
//       } else if (!/^[+]?[\d\s-]{10,}$/?.test(formData?.phone)) {
//         newErrors.phone = 'Please enter a valid phone number';
//       }
//       if (!formData?.industry) {
//         newErrors.industry = 'Please select an industry';
//       }
//       if (!formData?.businessType) {
//         newErrors.businessType = 'Please select a business type';
//       }
//       if (!formData?.topic?.trim()) {
//         newErrors.topic = 'Please provide a consultation topic';
//       }
//       if (!formData?.agreeTerms) {
//         newErrors.agreeTerms = 'You must agree to the terms and conditions';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors)?.length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep()) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps?.length - 1));
//     }
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 0));
//   };

//   const handleConfirm = () => {
//     setIsSubmitted(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleEdit = () => {
//     setCurrentStep(0);
//   };

//   if (isSubmitted) {
//     return (
//       <>
//         <Helmet>
//           <title>Consultation Confirmed - Arthlex Advisors</title>
//           <meta
//             name="description"
//             content="Your consultation with Arthlex Advisors has been successfully confirmed. Check your email for details."
//           />
//         </Helmet>
//         <div className="min-h-screen flex flex-col bg-background">
//           <Header />
//           <main className="main-content flex-1">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
//               <SuccessMessage
//                 consultationData={{
//                   consultationType,
//                   selectedDate,
//                   selectedTime,
//                   formData
//                 }}
//               />
//             </div>
//           </main>
//           <Footer />
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Book Consultation - Arthlex Advisors</title>
//         <meta
//           name="description"
//           content="Schedule a consultation with Arthlex Advisors. Expert financial advisory services for tax planning, business strategy, compliance, and startup support."
//         />
//       </Helmet>
//       <div className="min-h-screen flex flex-col bg-background">
//         <Header />
//         <main className="main-content flex-1">
//           <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 md:py-12 lg:py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-8 md:mb-12">
//                 <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
//                   <Icon name="Calendar" size={16} />
//                   <span>Book Your Consultation</span>
//                 </div>
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//                   Schedule Your Strategic Session
//                 </h1>
//                 <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
//                   Connect with our expert advisors for personalized financial guidance. Choose your service, pick a convenient time, and take the first step toward financial clarity.
//                 </p>
//               </div>

//               <ProgressIndicator currentStep={currentStep} steps={steps} />

//               <div className="bg-card rounded-lg border border-border shadow-lg p-6 md:p-8 lg:p-10">
//                 {currentStep === 0 && (
//                   <div className="space-y-6 md:space-y-8">
//                     <div className="text-center mb-6 md:mb-8">
//                       <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
//                         Select Consultation Type
//                       </h2>
//                       <p className="text-sm md:text-base text-muted-foreground">
//                         Choose the service that best matches your needs
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                       {consultationTypes?.map((type) => (
//                         <ConsultationTypeCard
//                           key={type?.type}
//                           type={type?.type}
//                           isSelected={consultationType === type?.type}
//                           onSelect={setConsultationType}
//                           icon={type?.icon}
//                           title={type?.title}
//                           description={type?.description}
//                           duration={type?.duration}
//                           features={type?.features}
//                         />
//                       ))}
//                     </div>

//                     {errors?.consultationType && (
//                       <div className="flex items-center space-x-2 text-destructive text-sm">
//                         <Icon name="AlertCircle" size={16} />
//                         <span>{errors?.consultationType}</span>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {currentStep === 1 && (
//                   <div className="space-y-6 md:space-y-8">
//                     <div className="text-center mb-6 md:mb-8">
//                       <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
//                         Choose Date & Time
//                       </h2>
//                       <p className="text-sm md:text-base text-muted-foreground">
//                         Select a convenient date and time slot for your consultation
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//                       <AvailabilityCalendar
//                         selectedDate={selectedDate}
//                         onDateSelect={setSelectedDate}
//                         availableDates={availableDates}
//                       />
//                       <TimeSlotSelector
//                         selectedTime={selectedTime}
//                         onTimeSelect={setSelectedTime}
//                         availableSlots={selectedDate ? timeSlots : []}
//                       />
//                     </div>

//                     {(errors?.selectedDate || errors?.selectedTime) && (
//                       <div className="flex items-center space-x-2 text-destructive text-sm">
//                         <Icon name="AlertCircle" size={16} />
//                         <span>{errors?.selectedDate || errors?.selectedTime}</span>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {currentStep === 2 && (
//                   <div className="space-y-6 md:space-y-8">
//                     <div className="text-center mb-6 md:mb-8">
//                       <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
//                         Your Information
//                       </h2>
//                       <p className="text-sm md:text-base text-muted-foreground">
//                         Help us prepare for a more productive consultation
//                       </p>
//                     </div>

//                     <ConsultationForm
//                       formData={formData}
//                       onChange={setFormData}
//                       errors={errors}
//                     />
//                   </div>
//                 )}

//                 {currentStep === 3 && (
//                   <div className="space-y-6 md:space-y-8">
//                     <div className="text-center mb-6 md:mb-8">
//                       <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
//                         Review & Confirm
//                       </h2>
//                       <p className="text-sm md:text-base text-muted-foreground">
//                         Please review your consultation details before confirming
//                       </p>
//                     </div>

//                     <ConfirmationSummary
//                       consultationData={{
//                         consultationType,
//                         selectedDate,
//                         selectedTime,
//                         formData
//                       }}
//                       onEdit={handleEdit}
//                       onConfirm={handleConfirm}
//                     />
//                   </div>
//                 )}

//                 {currentStep < 3 && (
//                   <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-between mt-8 md:mt-10">
//                     <Button
//                       variant="outline"
//                       size="lg"
//                       onClick={handleBack}
//                       disabled={currentStep === 0}
//                       iconName="ChevronLeft"
//                       iconPosition="left"
//                     >
//                       Back
//                     </Button>
//                     <Button
//                       variant="default"
//                       size="lg"
//                       onClick={handleNext}
//                       iconName="ChevronRight"
//                       iconPosition="right"
//                       className="btn-conversion"
//                     >
//                       {currentStep === 2 ? 'Review Booking' : 'Continue'}
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//                 <div className="bg-card rounded-lg border border-border p-4 md:p-6 text-center">
//                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
//                     <Icon name="Shield" size={24} className="text-primary" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
//                     Secure & Confidential
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     Your information is protected with enterprise-grade security
//                   </p>
//                 </div>

//                 <div className="bg-card rounded-lg border border-border p-4 md:p-6 text-center">
//                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
//                     <Icon name="Video" size={24} className="text-primary" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
//                     Remote Consultations
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     Connect from anywhere with our video conferencing platform
//                   </p>
//                 </div>

//                 <div className="bg-card rounded-lg border border-border p-4 md:p-6 text-center">
//                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
//                     <Icon name="Clock" size={24} className="text-primary" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
//                     Flexible Scheduling
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     Easy rescheduling and 24-hour advance reminders
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default BookConsultation;




import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from "@emailjs/browser";


import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import ConsultationTypeCard from './components/ConsultationTypeCard';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ConsultationForm from './components/ConsultationForm';
import ProgressIndicator from './components/ProgressIndicator';
import ConfirmationSummary from './components/ConfirmationSummary';
import SuccessMessage from './components/SuccessMessage';

/* ============================
   Helper: Next 15 days (today included)
============================ */
const getNext15Days = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 15; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    dates.push(`${yyyy}-${mm}-${dd}`);
  }

  return dates;
};

const BookConsultation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    businessType: '',
    topic: '',
    additionalInfo: '',
    agreeTerms: false,
    subscribeUpdates: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 'type', label: 'Service Type', icon: 'Briefcase' },
    { id: 'schedule', label: 'Preferred Date', icon: 'Calendar' },
    { id: 'details', label: 'Your Details', icon: 'User' },
    { id: 'confirm', label: 'Confirm', icon: 'CheckCircle' }
  ];

  const consultationTypes = [
    {
      type: 'tax-planning',
      icon: 'Calculator',
      title: 'Tax Planning & Optimization',
      description: 'Strategic tax planning for individuals and businesses',
      duration: 'Approx. 60 minutes',
      features: [
        'Tax assessment',
        'Optimization strategies',
        'Compliance guidance',
        'Investment insights'
      ]
    },
    {
      type: 'business-advisory',
      icon: 'TrendingUp',
      title: 'Business Advisory & Strategy',
      description: 'Financial guidance for business growth and efficiency',
      duration: 'Approx. 90 minutes',
      features: [
        'Financial review',
        'Growth planning',
        'Risk analysis',
        'Performance insights'
      ]
    },
    {
      type: 'compliance',
      icon: 'Shield',
      title: 'Compliance & Regulatory Support',
      description: 'Guidance on GST and statutory compliance',
      duration: 'Approx. 45 minutes',
      features: [
        'Compliance review',
        'Regulatory advisory',
        'Documentation support',
        'Filing assistance'
      ]
    },
    {
      type: 'startup-support',
      icon: 'Rocket',
      title: 'Startup Support & Structuring',
      description: 'End-to-end support for startups and new ventures',
      duration: 'Approx. 75 minutes',
      features: [
        'Entity structuring',
        'Funding readiness',
        'Financial planning',
        'Compliance setup'
      ]
    }
  ];

  const availableDates = getNext15Days();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  /* ============================
     Validation
  ============================ */
  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 0 && !consultationType) {
      newErrors.consultationType = 'Please select a consultation type';
    }

    if (currentStep === 1 && !selectedDate) {
      newErrors.selectedDate = 'Please select a preferred consultation date';
    }

    if (currentStep === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.industry) newErrors.industry = 'Please select an industry';
      if (!formData.businessType) newErrors.businessType = 'Please select a business type';
      if (!formData.topic.trim()) newErrors.topic = 'Consultation topic is required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  /* ============================
     CONFIRM → SEND EMAILS
  ============================ */
  const handleConfirm = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const templateParams = {
      consultation_type: consultationType,
      preferred_date: selectedDate,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.companyName || 'N/A',
      industry: formData.industry,
      business_type: formData.businessType,
      topic: formData.topic,
      additional_info: formData.additionalInfo || 'N/A'
    };

    const adminEmail = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    const userEmail = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    Promise.all([adminEmail, userEmail])
      .then(() => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((err) => {
        console.error('Email error:', err);
        alert('Something went wrong while submitting. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleEdit = () => {
    setCurrentStep(0);
  };

  /* ============================
     SUCCESS SCREEN
  ============================ */
  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Consultation Confirmed - Arthlex Advisors</title>
        </Helmet>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 py-12">
              <SuccessMessage
                consultationData={{
                  consultationType,
                  selectedDate,
                  formData
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  /* ============================
     MAIN UI
  ============================ */
  return (
    <>
      <Helmet>
        <title>Book Consultation - Arthlex Advisors</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
            <div className="max-w-7xl mx-auto px-4">

              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">Schedule Your Consultation</h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Choose your service, select a preferred date (today or within the next 15 days),
                  and our team will contact you to confirm the exact time.
                </p>
              </div>

              <ProgressIndicator currentStep={currentStep} steps={steps} />

              <div className="bg-card rounded-xl border shadow-lg p-8">

                {currentStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {consultationTypes.map((type) => (
                      <ConsultationTypeCard
                        key={type.type}
                        {...type}
                        isSelected={consultationType === type.type}
                        onSelect={setConsultationType}
                      />
                    ))}
                    {errors.consultationType && (
                      <p className="text-destructive text-sm">{errors.consultationType}</p>
                    )}
                  </div>
                )}

                {currentStep === 1 && (
                  <>
                    <AvailabilityCalendar
                      selectedDate={selectedDate}
                      onDateSelect={setSelectedDate}
                      availableDates={availableDates}
                    />
                    {errors.selectedDate && (
                      <p className="text-destructive text-sm mt-3">{errors.selectedDate}</p>
                    )}
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Appointments can be requested for today and up to the next 15 days.
                      Exact time will be confirmed by our team.
                    </p>
                  </>
                )}

                {currentStep === 2 && (
                  <ConsultationForm
                    formData={formData}
                    onChange={setFormData}
                    errors={errors}
                  />
                )}

                {currentStep === 3 && (
                  <ConfirmationSummary
                    consultationData={{
                      consultationType,
                      selectedDate,
                      formData
                    }}
                    onEdit={handleEdit}
                    onConfirm={handleConfirm}
                    isSubmitting={isSubmitting}
                  />
                )}

                {currentStep < 3 && (
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                      Back
                    </Button>
                    <Button onClick={handleNext}>
                      {currentStep === 2 ? 'Review Booking' : 'Continue'}
                    </Button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BookConsultation;
