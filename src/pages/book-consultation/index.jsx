// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import emailjs from '@emailjs/browser';

// import Header from '../../components/ui/Header';
// import Footer from '../../components/ui/Footer';
// import Button from '../../components/ui/Button';

// import AvailabilityCalendar from './components/AvailabilityCalendar';
// import ConsultationForm from './components/ConsultationForm';
// import ProgressIndicator from './components/ProgressIndicator';
// import ConfirmationSummary from './components/ConfirmationSummary';
// import SuccessMessage from './components/SuccessMessage';
// import ServiceSelector from './components/ServiceSelector';

// /* ============================
//    SERVICE CATEGORIES
// ============================ */
// const SERVICE_CATEGORIES = [
//   {
//     id: 'business-finance',
//     title: 'Business Finance',
//     icon: 'Briefcase',
//     services: [
//       'Working Capital',
//       'Bank Guarantee / Letter of Credit',
//       'Term Loans / LAP',
//       'Machinery & Equipment Finance',
//       'Project Finance / Real Estate Funding',
//       'Business Loans / Home Loans'
//     ]
//   },
//   {
//     id: 'income-tax',
//     title: 'Income Tax Advisory',
//     icon: 'Calculator',
//     services: [
//       'Tax planning & deductions',
//       'Capital gains optimization',
//       'Notices & scrutiny handling',
//       'Foreign income & reporting',
//       'Tax audit & compliance support',
//       'Advance tax & TDS planning'
//     ]
//   },
//   {
//     id: 'gst',
//     title: 'GST Services',
//     icon: 'FileCheck',
//     services: [
//       'Return filing',
//       'Input tax credit optimization',
//       'GST audits',
//       'GST registration & amendments',
//       'GST advisory & compliance review',
//       'GST litigation support'
//     ]
//   },
//   {
//     id: 'other',
//     title: 'Other Services',
//     icon: 'Layers',
//     services: [
//       'Business Advisory',
//       'Term Insurance',
//       'Mediclaim',
//       'Investment Advisory',
//       'Retirement planning',
//       'Wealth management'
//     ]
//   }
// ];

// const getNext15Days = () => {
//   const dates = [];
//   const today = new Date();
//   for (let i = 0; i < 15; i++) {
//     const d = new Date(today);
//     d.setDate(today.getDate() + i);
//     dates.push(d.toISOString().split('T')[0]);
//   }
//   return dates;
// };

// const BookConsultation = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedService, setSelectedService] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     companyName: '',
//     industry: '',
//     businessType: '',
//     topic: '',
//     additionalInfo: '',
//     agreeTerms: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const steps = [
//     { id: 'service', label: 'Select Service', icon: 'Briefcase' },
//     { id: 'date', label: 'Preferred Date', icon: 'Calendar' },
//     { id: 'details', label: 'Your Details', icon: 'User' },
//     { id: 'confirm', label: 'Confirm', icon: 'CheckCircle' }
//   ];

//   const availableDates = getNext15Days();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [currentStep]);

//   const validateStep = () => {
//     const e = {};
//     if (currentStep === 0 && !selectedService) e.service = 'Please select a service';
//     if (currentStep === 1 && !selectedDate) e.selectedDate = 'Please select a date';
//     if (currentStep === 2) {
//       if (!formData.fullName.trim()) e.fullName = 'Full name required';
//       if (!formData.email.trim()) e.email = 'Email required';
//       if (!formData.phone.trim()) e.phone = 'Phone required';
//       if (!formData.topic.trim()) e.topic = 'Topic required';
//       if (!formData.agreeTerms) e.agreeTerms = 'Please accept terms';
//     }
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleNext = () => validateStep() && setCurrentStep((p) => p + 1);
//   const handleBack = () => setCurrentStep((p) => Math.max(p - 1, 0));

//   const handleConfirm = () => {
//     if (isSubmitting) return;
//     setIsSubmitting(true);

//     const templateParams = {
//       service_inquiry_category: selectedCategory?.title,
//       service_inquiry_sub_category: selectedService,
//       preferred_date: selectedDate,
//       full_name: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       company: formData.companyName || 'N/A',
//       industry: formData.industry || 'N/A',
//       business_type: formData.businessType || 'N/A',
//       topic: formData.topic,
//       additional_info: formData.additionalInfo || 'N/A'
//     };

//     Promise.all([
//       emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       ),
//       emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//     ])
//       .then(() => setIsSubmitted(true))
//       .finally(() => setIsSubmitting(false));
//   };

//   if (isSubmitted) {
//     return (
//       <>
//         <Header />
//         <main className="py-16">
//           <SuccessMessage
//             consultationData={{ selectedCategory, selectedService, selectedDate, formData }}
//           />
//         </main>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Book Consultation - Arthlex Advisors</title>
//       </Helmet>

//       <Header />

//       <main className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
//         <div className="max-w-7xl mx-auto px-4">

//           {/* HERO */}
//           <div className="text-center mb-14">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
//               Book Your Consultation
//             </h1>
//             <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
//               Expert financial guidance designed to give you clarity, confidence,
//               and actionable next steps.
//             </p>
//           </div>

//           <ProgressIndicator currentStep={currentStep} steps={steps} />

//           {/* BOOKING CARD */}
//           <div className="relative bg-card rounded-2xl border shadow-xl p-10 mt-10 transition-all duration-300 hover:shadow-2xl">
//             {currentStep === 0 && (
//               <ServiceSelector
//                 categories={SERVICE_CATEGORIES}
//                 selectedCategory={selectedCategory}
//                 selectedService={selectedService}
//                 onCategorySelect={setSelectedCategory}
//                 onServiceSelect={setSelectedService}
//               />
//             )}

//             {currentStep === 1 && (
//               <AvailabilityCalendar
//                 selectedDate={selectedDate}
//                 onDateSelect={setSelectedDate}
//                 availableDates={availableDates}
//               />
//             )}

//             {currentStep === 2 && (
//               <ConsultationForm
//                 formData={formData}
//                 onChange={setFormData}
//                 errors={errors}
//               />
//             )}

//             {currentStep === 3 && (
//               <ConfirmationSummary
//                 consultationData={{
//                   serviceCategory: selectedCategory?.title,
//                   service: selectedService,
//                   selectedDate,
//                   formData
//                 }}
//                 onConfirm={handleConfirm}
//                 isSubmitting={isSubmitting}
//                 onEdit={() => setCurrentStep(0)}
//               />
//             )}

//             {currentStep < 3 && (
//               <div className="flex justify-between mt-10">
//                 <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
//                   Back
//                 </Button>
//                 <Button className="shadow-lg hover:scale-[1.02] transition" onClick={handleNext}>
//                   {currentStep === 2 ? 'Review Booking' : 'Continue'}
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* VALUE SECTION */}
//           <div className="mt-24 grid md:grid-cols-3 gap-8">
//             {[
//               ['What You’ll Get', 'Clarity, strategy, and actionable guidance tailored to your needs'],
//               ['Who It’s For', 'Businesses, professionals, startups, and growth-focused individuals'],
//               ['How It Works', 'Simple steps with human follow-up and expert consultation']
//             ].map(([title, desc]) => (
//               <div
//                 key={title}
//                 className="group bg-gradient-to-br from-background to-muted/40 border rounded-2xl p-8 text-center
//                            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center
//                                 group-hover:bg-primary group-hover:text-white transition">
//                   <span className="text-xl font-bold">✓</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{title}</h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* TRUST */}
//           <div className="mt-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10
//                           rounded-3xl border p-12 text-center max-w-5xl mx-auto shadow-lg">
//             <h3 className="text-2xl font-bold mb-4">
//               Trusted Financial Advisory
//             </h3>
//             <p className="text-muted-foreground text-base leading-relaxed">
//               Arthlex Advisors blends regulatory expertise with real-world business
//               experience to help you make confident, compliant, and profitable decisions.
//             </p>
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default BookConsultation;




import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';

import AvailabilityCalendar from './components/AvailabilityCalendar';
import ConsultationForm from './components/ConsultationForm';
import ProgressIndicator from './components/ProgressIndicator';
import ConfirmationSummary from './components/ConfirmationSummary';
import SuccessMessage from './components/SuccessMessage';
import ServiceSelector from './components/ServiceSelector';
import BookingValueSection from './components/BookingValueSection';


/* ================= SERVICE CATEGORIES ================= */
const SERVICE_CATEGORIES = [
  {
    id: 'business-finance',
    title: 'Business Finance',
    icon: 'Briefcase',
    services: [
      'Working Capital',
      'Bank Guarantee / Letter of Credit',
      'Term Loans / LAP',
      'Machinery & Equipment Finance',
      'Project Finance / Real Estate Funding',
      'Business Loans / Home Loans'
    ]
  },
  {
    id: 'income-tax',
    title: 'Income Tax Advisory',
    icon: 'Calculator',
    services: [
      'Tax planning & deductions',
      'Capital gains optimization',
      'Notices & scrutiny handling',
      'Foreign income & reporting',
      'Tax audit & compliance support',
      'Advance tax & TDS planning'
    ]
  },
  {
    id: 'gst',
    title: 'GST Services',
    icon: 'FileCheck',
    services: [
      'Return filing',
      'Input tax credit optimization',
      'GST audits',
      'GST registration & amendments',
      'GST advisory & compliance review',
      'GST litigation support'
    ]
  },
  {
    id: 'other',
    title: 'Other Services',
    icon: 'Layers',
    services: [
      'Business Advisory',
      'Term Insurance',
      'Mediclaim',
      'Investment Advisory',
      'Retirement planning',
      'Wealth management'
    ]
  }
];

const getNext15Days = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 15; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
};

const BookConsultation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState('');
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
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 'service', label: 'Select Service', icon: 'Briefcase' },
    { id: 'date', label: 'Preferred Date', icon: 'Calendar' },
    { id: 'details', label: 'Your Details', icon: 'User' },
    { id: 'confirm', label: 'Confirm', icon: 'CheckCircle' },
    { id: 'success', label: 'Success', icon: 'CheckCircle' }
  ];

  const availableDates = getNext15Days();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const validateStep = () => {
    const e = {};
    if (currentStep === 0 && !selectedService) e.service = 'Please select a service';
    if (currentStep === 1 && !selectedDate) e.selectedDate = 'Please select a date';
    if (currentStep === 2) {
      if (!formData.fullName.trim()) e.fullName = 'Full name required';
      if (!formData.email.trim()) e.email = 'Email required';
      if (!formData.phone.trim()) e.phone = 'Phone required';
      if (!formData.topic.trim()) e.topic = 'Topic required';
      if (!formData.agreeTerms) e.agreeTerms = 'Please accept terms';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => validateStep() && setCurrentStep((p) => p + 1);
  const handleBack = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const handleConfirm = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const templateParams = {
      service_inquiry_category: selectedCategory?.title,
      service_inquiry_sub_category: selectedService,
      preferred_date: selectedDate,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.companyName || 'N/A',
      industry: formData.industry || 'N/A',
      business_type: formData.businessType || 'N/A',
      topic: formData.topic,
      additional_info: formData.additionalInfo || 'N/A'
    };

    try {
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      ]);

      setCurrentStep(4); // ✅ SUCCESS STEP
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Consultation - Arthlex Advisors</title>
      </Helmet>

      <Header />

      <main className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4">

          {currentStep === 4 ? (
            <SuccessMessage
              consultationData={{
                selectedCategory,
                selectedService,
                selectedDate,
                formData
              }}
            />
          ) : (
            <>
              <ProgressIndicator currentStep={currentStep} steps={steps} />

              <div className="bg-card rounded-2xl border shadow-xl p-10 mt-10">
                {currentStep === 0 && (
                  <ServiceSelector
                    categories={SERVICE_CATEGORIES}
                    selectedCategory={selectedCategory}
                    selectedService={selectedService}
                    onCategorySelect={setSelectedCategory}
                    onServiceSelect={setSelectedService}
                  />
                )}

                {currentStep === 1 && (
                  <AvailabilityCalendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    availableDates={availableDates}
                  />
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
                      serviceCategory: selectedCategory?.title,
                      service: selectedService,
                      selectedDate,
                      formData
                    }}
                    onConfirm={handleConfirm}
                    isSubmitting={isSubmitting}
                    onEdit={() => setCurrentStep(0)}
                  />
                )}

                {currentStep < 3 && (
                  <div className="flex justify-between mt-10">
                    <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                      Back
                    </Button>
                    <Button onClick={handleNext}>
                      {currentStep === 2 ? 'Review Booking' : 'Continue'}
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}

<BookingValueSection />

        </div>
      </main>
      

      <Footer />
    </>
  );
};

export default BookConsultation;
