// // import React, { useState } from 'react';
// // import { Helmet } from 'react-helmet';
// // import { useNavigate } from 'react-router-dom';
// // import Header from '../../components/ui/Header';
// // import Footer from '../../components/ui/Footer';
// // import Icon from '../../components/AppIcon';
// // import Button from '../../components/ui/Button';

// // const ServicesHub = () => {
// //   const navigate = useNavigate();

// //   const services = [
// //     {
// //       id: 1,
// //       icon: 'Calculator',
// //       title: 'Income Tax Advisory',
// //       description: 'Strategic tax planning and compliance for individuals and businesses',
// //       features: [
// //         'Tax planning, deductions & capital gains',
// //         'Past filing review and corrections',
// //         'Notices and scrutiny handling',
// //         'Foreign income and reporting',
// //         'Strategic tax alignment'
// //       ],
// //       color: 'text-blue-600',
// //       bgColor: 'bg-blue-50'
// //     },
// //     {
// //       id: 2,
// //       icon: 'Briefcase',
// //       title: 'Business Finance',
// //       description: 'Comprehensive financial solutions for business growth',
// //       features: [
// //         'Working capital and term loans',
// //         'Expansion and project funding',
// //         'CMA data and projections',
// //         'Cost of funds evaluation',
// //         'Sustainable financial planning'
// //       ],
// //       color: 'text-green-600',
// //       bgColor: 'bg-green-50'
// //     },
// //     {
// //       id: 3,
// //       icon: 'FileCheck',
// //       title: 'GST Services',
// //       description: 'Complete GST compliance and optimization',
// //       features: [
// //         'Return filing and reconciliation',
// //         'Input tax credit optimization',
// //         'Notices and audits',
// //         'Compliance advisory',
// //         'GST registration and amendments'
// //       ],
// //       color: 'text-purple-600',
// //       bgColor: 'bg-purple-50'
// //     },
// //     {
// //       id: 4,
// //       icon: 'TrendingUp',
// //       title: 'Project Finance',
// //       description: 'Specialized financing for projects and expansions',
// //       features: [
// //         'Term loans and subsidies',
// //         'Cash flow and break-even analysis',
// //         'Bank and NBFC coordination',
// //         'Feasibility studies',
// //         'DPR and financial modeling'
// //       ],
// //       color: 'text-amber-600',
// //       bgColor: 'bg-amber-50'
// //     }
// //   ];

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Services - Arthlex Advisors | Comprehensive Financial Advisory</title>
// //         <meta name="description" content="Explore our comprehensive financial advisory services including Income Tax Advisory, Business Finance, GST Services, and Project Finance." />
// //       </Helmet>
      
// //       <div className="min-h-screen bg-background">
// //         <Header />
        
// //         <main className="main-content">
// //           {/* Hero Section */}
// //           <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //               <div className="text-center mb-16 animate-fade-in-up">
// //                 <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
// //                   <Icon name="Briefcase" size={16} />
// //                   <span>Our Services</span>
// //                 </div>
                
// //                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
// //                   Comprehensive Financial Solutions
// //                 </h1>
                
// //                 <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
// //                   Expert guidance across tax, finance, compliance, and strategic planning. We provide clarity and confidence in every financial decision.
// //                 </p>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Services Detail Sections */}
// //           {services?.map((service, index) => (
// //             <section
// //               key={service?.id}
// //               className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
// //               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //                   {/* Service Content */}
// //                   <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
// //                     <div className={`${service?.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}>
// //                       <Icon name={service?.icon} size={32} className={service?.color} />
// //                     </div>
                    
// //                     <h2 className="text-3xl md:text-4xl font-bold text-foreground">
// //                       {service?.title}
// //                     </h2>
                    
// //                     <p className="text-lg text-muted-foreground leading-relaxed">
// //                       {service?.description}
// //                     </p>

// //                     {/* Features List */}
// //                     <div className="space-y-3 pt-4">
// //                       {service?.features?.map((feature, idx) => (
// //                         <div key={idx} className="flex items-start space-x-3">
// //                           <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                             <Icon name="Check" size={14} className="text-green-600" />
// //                           </div>
// //                           <span className="text-base text-foreground">{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     {/* CTA Button */}
// //                     <div className="pt-6">
// //                       <Button
// //                         variant="default"
// //                         size="lg"
// //                         onClick={() => navigate('/book-consultation')}
// //                         iconName="Calendar"
// //                         iconPosition="left"
// //                         className="bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
// //                         Book Consultation
// //                       </Button>
// //                     </div>
// //                   </div>

// //                   {/* Visual Card */}
// //                   <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
// //                     <div className={`${service?.bgColor} rounded-2xl p-8 shadow-premium border border-gray-100`}>
// //                       <div className="bg-white rounded-xl p-8 shadow-soft">
// //                         <div className="space-y-4">
// //                           <div className="flex items-center space-x-3">
// //                             <div className={`${service?.bgColor} w-10 h-10 rounded-lg flex items-center justify-center`}>
// //                               <Icon name="Target" size={20} className={service?.color} />
// //                             </div>
// //                             <h3 className="text-lg font-bold text-foreground">Key Benefits</h3>
// //                           </div>
// //                           <ul className="space-y-2 text-sm text-muted-foreground">
// //                             <li className="flex items-center space-x-2">
// //                               <Icon name="CheckCircle" size={16} className="text-green-600" />
// //                               <span>Expert guidance & support</span>
// //                             </li>
// //                             <li className="flex items-center space-x-2">
// //                               <Icon name="CheckCircle" size={16} className="text-green-600" />
// //                               <span>Compliance assurance</span>
// //                             </li>
// //                             <li className="flex items-center space-x-2">
// //                               <Icon name="CheckCircle" size={16} className="text-green-600" />
// //                               <span>Strategic optimization</span>
// //                             </li>
// //                             <li className="flex items-center space-x-2">
// //                               <Icon name="CheckCircle" size={16} className="text-green-600" />
// //                               <span>Long-term value creation</span>
// //                             </li>
// //                           </ul>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>
// //           ))}

// //           {/* Final CTA Section */}
// //           <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
// //             <div className="absolute inset-0 opacity-10">
// //               <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
// //               <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
// //             </div>

// //             <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //               <div className="space-y-8 animate-fade-in-up">
// //                 <div className="flex justify-center">
// //                   <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
// //                     <Icon name="MessageCircle" size={40} color="white" />
// //                   </div>
// //                 </div>

// //                 <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
// //                   Ready to Get Started?
// //                 </h2>

// //                 <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
// //                   Schedule a consultation to discuss your specific requirements and discover how we can help you achieve your financial goals.
// //                 </p>

// //                 <div className="pt-4">
// //                   <Button
// //                     variant="default"
// //                     size="lg"
// //                     onClick={() => navigate('/book-consultation')}
// //                     iconName="Calendar"
// //                     iconPosition="left"
// //                     className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl px-10 py-6 text-lg font-semibold">
// //                     Book Your Consultation
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>
// //         </main>

// //         <Footer />
// //       </div>
// //     </>
// //   );
// // };

// // export default ServicesHub;


// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../components/ui/Header';
// import Footer from '../../components/ui/Footer';
// import Icon from '../../components/AppIcon';
// import Button from '../../components/ui/Button';
// import OtherServiceModal from './components/OtherServiceModal';

// const ServicesHub = () => {
//   const navigate = useNavigate();
//   const [selectedService, setSelectedService] = useState(null);

//   /* ================= CORE SERVICES ================= */
//   const services = [
//     {
//       id: 1,
//       icon: 'Briefcase',
//       title: 'Business Finance',
//       description: 'Comprehensive financial solutions for business growth',
//       features: [
//         'Working capital and term loans',
//         'Expansion and growth funding',
//         'CMA data and financial projections',
//         'Cost of funds evaluation',
//         'Sustainable financial structuring'
//       ],
//       color: 'text-green-600',
//       bgColor: 'bg-green-50'
//     },
//     {
//       id: 2,
//       icon: 'Calculator',
//       title: 'Income Tax Advisory',
//       description: 'Strategic tax planning and compliance for individuals and businesses',
//       features: [
//         'Tax planning, deductions & capital gains',
//         'Past filing review and corrections',
//         'Notices and scrutiny handling',
//         'Foreign income and reporting',
//         'Strategic tax alignment'
//       ],
//       color: 'text-blue-600',
//       bgColor: 'bg-blue-50'
//     },
//     {
//       id: 3,
//       icon: 'FileCheck',
//       title: 'GST Services',
//       description: 'Complete GST compliance and optimization',
//       features: [
//         'Return filing and reconciliation',
//         'Input tax credit optimization',
//         'Notices and audits',
//         'Compliance advisory',
//         'GST registration and amendments'
//       ],
//       color: 'text-purple-600',
//       bgColor: 'bg-purple-50'
//     }
//   ];


//   const otherServices = [
//     {
//       icon: 'Compass',
//       title: 'Business Advisory',
//       description:
//         'Strategic guidance to improve profitability, operational efficiency, and long-term business growth.',
//       features: [
//         'Business structuring & strategy',
//         'Financial health review',
//         'Growth & expansion planning',
//         'Risk assessment & advisory'
//       ]
//     },
//     {
//       icon: 'ShieldCheck',
//       title: 'Term Insurance',
//       description:
//         'Pure protection plans designed to secure your family’s financial future with adequate coverage.',
//       features: [
//         'Coverage assessment',
//         'Plan comparison & selection',
//         'Policy structuring',
//         'Claim assistance guidance'
//       ]
//     },
//     {
//       icon: 'HeartPulse',
//       title: 'Mediclaim',
//       description:
//         'Health insurance solutions for individuals, families, and businesses.',
//       features: [
//         'Individual & family floater plans',
//         'Corporate health policies',
//         'Policy optimization',
//         'Renewal advisory support'
//       ]
//     },
//     {
//       icon: 'LineChart',
//       title: 'Investment Advisory',
//       description:
//         'Goal-based investment planning aligned with your risk profile and long-term objectives.',
//       features: [
//         'Asset allocation strategy',
//         'Mutual fund advisory',
//         'Tax-efficient investments',
//         'Portfolio review & rebalancing'
//       ]
//     }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Services - Arthlex Advisors | Clarity in Capital, Confidence in Growth</title>
//         <meta
//           name="description"
//           content="Explore Arthlex Advisors services including Business Finance, Income Tax Advisory, GST Services, and other financial advisory solutions."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-background">
//         <Header />

//         <main className="main-content">
//           {/* ================= HERO SECTION ================= */}
//           <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
//               <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
//                 <Icon name="Briefcase" size={16} />
//                 <span>Our Services</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                 Business-Focused Financial Solutions
//               </h1>

//               <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//                 From business finance to tax and compliance, we help you make
//                 confident, well-structured financial decisions.
//               </p>
//             </div>
//           </section>

//           {/* ================= CORE SERVICES ================= */}
//           {services.map((service, index) => (
//             <section
//               key={service.id}
//               className={`py-20 md:py-28 ${
//                 index % 2 === 0
//                   ? 'bg-white'
//                   : 'bg-gradient-to-b from-gray-50 to-white'
//               }`}
//             >
//               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                   {/* Content */}
//                   <div
//                     className={`space-y-6 ${
//                       index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
//                     }`}
//                   >
//                     <div
//                       className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}
//                     >
//                       <Icon
//                         name={service.icon}
//                         size={32}
//                         className={service.color}
//                       />
//                     </div>

//                     <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//                       {service.title}
//                     </h2>

//                     <p className="text-lg text-muted-foreground">
//                       {service.description}
//                     </p>

//                     <div className="space-y-3 pt-4">
//                       {service.features.map((feature, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-start space-x-3"
//                         >
//                           <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
//                             <Icon
//                               name="Check"
//                               size={14}
//                               className="text-green-600"
//                             />
//                           </div>
//                           <span className="text-base text-foreground">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="pt-6">
//                       <Button
//                         size="lg"
//                         onClick={() => navigate('/book-consultation')}
//                         iconName="Calendar"
//                         iconPosition="left"
//                         className="bg-primary hover:bg-primary/90 rounded-xl shadow-lg"
//                       >
//                         Book Consultation
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Visual Card */}
//                   <div
//                     className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
//                   >
//                     <div
//                       className={`${service.bgColor} rounded-2xl p-8 shadow-premium`}
//                     >
//                       <div className="bg-white rounded-xl p-8 shadow-soft">
//                         <h3 className="text-lg font-bold mb-4">
//                           Key Benefits
//                         </h3>
//                         <ul className="space-y-2 text-sm text-muted-foreground">
//                           {[
//                             'Expert guidance & support',
//                             'Compliance assurance',
//                             'Strategic optimization',
//                             'Long-term value creation'
//                           ].map((item, i) => (
//                             <li
//                               key={i}
//                               className="flex items-center space-x-2"
//                             >
//                               <Icon
//                                 name="CheckCircle"
//                                 size={16}
//                                 className="text-green-600"
//                               />
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           ))}

//           {/* ================= OTHER SERVICES ================= */}
//           {/* <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Other Services
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {[
//                   { icon: 'Compass', title: 'Business Advisory' },
//                   { icon: 'ShieldCheck', title: 'Term Insurance' },
//                   { icon: 'HeartPulse', title: 'Mediclaim' },
//                   { icon: 'LineChart', title: 'Investment Advisory' }
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//                   >
//                     <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
//                       <Icon
//                         name={item.icon}
//                         size={28}
//                         className="text-blue-600"
//                       />
//                     </div>
//                     <h3 className="text-lg font-semibold">
//                       {item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section> */}

// <section className="py-20 bg-gray-50 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-10">Other Services</h2>

//             <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {otherServices.map((service, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedService(service)}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//                 >
//                   <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
//                     <Icon name={service.icon} size={28} className="text-blue-600" />
//                   </div>
//                   <h3 className="font-semibold text-lg">{service.title}</h3>
//                 </button>
//               ))}
//             </div>
//           </section>

//           {/* ================= FINAL CTA ================= */}
//           <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Ready to Get Started?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Let’s discuss how we can support your financial goals.
//             </p>
//             <Button
//               size="lg"
//               onClick={() => navigate('/book-consultation')}
//               iconName="Calendar"
//               iconPosition="left"
//               className="bg-white text-blue-700 hover:bg-gray-100 rounded-xl px-10 py-6"
//             >
//               Book Your Consultation
//             </Button>
//           </section>

//           {/* ================= MODAL ================= */}
//           {selectedService && (
//             <OtherServiceModal
//               service={selectedService}
//               onClose={() => setSelectedService(null)}
//               onBook={() => navigate('/book-consultation')}
//             />
//           )}
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ServicesHub;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import OtherServiceModal from './components/OtherServiceModal';

const ServicesHub = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  /* ================= CORE SERVICES ================= */
  const services = [
    {
      id: 1,
      icon: 'Briefcase',
      title: 'Business Finance',
      description: 'Comprehensive financial solutions for business growth',
      features: [
        'Working capital and term loans',
        'Expansion and growth funding',
        'CMA data and financial projections',
        'Cost of funds evaluation',
        'Sustainable financial structuring'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      icon: 'Calculator',
      title: 'Income Tax Advisory',
      description:
        'Strategic tax planning and compliance for individuals and businesses',
      features: [
        'Tax planning, deductions & capital gains',
        'Past filing review and corrections',
        'Notices and scrutiny handling',
        'Foreign income and reporting',
        'Strategic tax alignment'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      icon: 'FileCheck',
      title: 'GST Services',
      description: 'Complete GST compliance and optimization',
      features: [
        'Return filing and reconciliation',
        'Input tax credit optimization',
        'Notices and audits',
        'Compliance advisory',
        'GST registration and amendments'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  /* ================= OTHER SERVICES ================= */
  const otherServices = [
    {
      icon: 'Compass',
      title: 'Business Advisory',
      description:
        'Strategic guidance to improve profitability, operational efficiency, and long-term business growth.',
      features: [
        'Business structuring & strategy',
        'Financial health review',
        'Growth & expansion planning',
        'Risk assessment & advisory'
      ]
    },
    {
      icon: 'ShieldCheck',
      title: 'Term Insurance',
      description:
        'Pure protection plans designed to secure your family’s financial future with adequate coverage.',
      features: [
        'Coverage assessment',
        'Plan comparison & selection',
        'Policy structuring',
        'Claim assistance guidance'
      ]
    },
    {
      icon: 'HeartPulse',
      title: 'Mediclaim',
      description:
        'Health insurance solutions for individuals, families, and businesses.',
      features: [
        'Individual & family floater plans',
        'Corporate health policies',
        'Policy optimization',
        'Renewal advisory support'
      ]
    },
    {
      icon: 'LineChart',
      title: 'Investment Advisory',
      description:
        'Goal-based investment planning aligned with your risk profile and long-term objectives.',
      features: [
        'Asset allocation strategy',
        'Mutual fund advisory',
        'Tax-efficient investments',
        'Portfolio review & rebalancing'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Services - Arthlex Advisors | Clarity in Capital, Confidence in Growth
        </title>
        <meta
          name="description"
          content="Explore Arthlex Advisors services including Business Finance, Income Tax Advisory, GST Services, and other financial advisory solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="main-content">
          {/* ================= HERO ================= */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Icon name="Briefcase" size={16} />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Business-Focused Financial Solutions
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                From business finance to tax and compliance, we help you make
                confident, well-structured financial decisions.
              </p>
            </div>
          </section>

          {/* ================= CORE SERVICES ================= */}
          {services.map((service, index) => (
            <section
              key={service.id}
              className={`py-20 md:py-28 ${
                index % 2 === 0
                  ? 'bg-white'
                  : 'bg-gradient-to-b from-gray-50 to-white'
              }`}
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`space-y-6 ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}
                    >
                      <Icon
                        name={service.icon}
                        size={32}
                        className={service.color}
                      />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h2>

                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <Icon
                              name="Check"
                              size={14}
                              className="text-green-600"
                            />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      onClick={() => navigate('/book-consultation')}
                      iconName="Calendar"
                      iconPosition="left"
                      className="bg-primary hover:bg-primary/90 rounded-xl shadow-lg"
                    >
                      Book Consultation
                    </Button>
                  </div>

                  <div
                    className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div
                      className={`${service.bgColor} rounded-2xl p-8 shadow-premium`}
                    >
                      <div className="bg-white rounded-xl p-8 shadow-soft">
                        <h3 className="text-lg font-bold mb-4">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {[
                            'Expert guidance & support',
                            'Compliance assurance',
                            'Strategic optimization',
                            'Long-term value creation'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Icon
                                name="CheckCircle"
                                size={16}
                                className="text-green-600"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ================= OTHER SERVICES ================= */}
          <section className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Other Services
            </h2>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {otherServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">
                    {service.title}
                  </h3>
                </button>
              ))}
            </div>
          </section>

          {/* ================= FINAL CTA ================= */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let’s discuss how we can support your financial goals.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/book-consultation')}
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-blue-700 hover:bg-gray-100 rounded-xl px-10 py-6"
            >
              Book Your Consultation
            </Button>
          </section>

          {/* ================= MODAL ================= */}
          {selectedService && (
            <OtherServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
              onBook={() => navigate('/book-consultation')}
            />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesHub;
