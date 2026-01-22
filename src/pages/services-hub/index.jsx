import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import OtherServiceModal from './components/OtherServiceModal';
import HowWeWork from "./components/HowWeWork";


/* ================= KEY BENEFITS (LOCKED – DO NOT CHANGE) ================= */
const KEY_BENEFITS = [
  'Expert guidance & support',
  'Compliance assurance',
  'Strategic optimization',
  'Long-term value creation',
  'Faster, approval-focused execution'
];

const ServicesHub = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  /* ================= CORE SERVICES ================= */
  const services = [
    {
      id: 1,
      icon: 'Briefcase',
      title: 'Business Finance',
      description:
        'End-to-end financing solutions designed to support business operations, expansion, and long-term growth.',
      features: [
        'Working capital (CC / OD) solutions',
        'Term loans & loan against property (LAP)',
        'Project finance & real estate funding',
        'Machinery & equipment finance',
        'Bank guarantee & letter of credit',
        'Business loans & home loans'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      icon: 'Calculator',
      title: 'Income Tax Advisory',
      description:
        'Proactive tax planning and compliance support to help individuals and businesses stay efficient and compliant.',
      features: [
        'Tax planning & deductions optimization',
        'Capital gains planning & structuring',
        'Income tax notices & scrutiny handling',
        'Tax audits & compliance support',
        'Foreign income & reporting',
        'Advance tax & TDS planning'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      icon: 'FileCheck',
      title: 'GST Services',
      description:
        'Comprehensive GST solutions covering registration, returns, audits, and litigation support.',
      features: [
        'GST registration & amendments',
        'GST return filing & reconciliation',
        'Input tax credit (ITC) optimization',
        'GST audits & assessments',
        'GST advisory & compliance review',
        'GST litigation & notice handling'
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
        'Strategic advisory services to improve financial health, profitability, and decision-making.',
      features: [
        'Business structuring & strategy',
        'Financial health assessment',
        'Growth & expansion planning',
        'Risk analysis & advisory'
      ]
    },
    {
      icon: 'ShieldCheck',
      title: 'Term Insurance',
      description:
        'Pure protection plans to secure your family’s financial future with adequate coverage.',
      features: [
        'Coverage assessment',
        'Policy comparison & selection',
        'Policy structuring',
        'Claims guidance & support'
      ]
    },
    {
      icon: 'HeartPulse',
      title: 'Mediclaim',
      description:
        'Health insurance solutions for individuals, families, and businesses.',
      features: [
        'Individual & family floater plans',
        'Corporate health insurance',
        'Policy optimization',
        'Renewal & claims advisory'
      ]
    },
    {
      icon: 'LineChart',
      title: 'Investment Advisory',
      description:
        'Goal-based investment planning aligned with your risk profile and financial objectives.',
      features: [
        'Asset allocation strategy',
        'Mutual fund advisory',
        'Tax-efficient investment planning',
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
          content="Explore Arthlex Advisors services including Business Finance, Income Tax Advisory, GST Services, and comprehensive financial advisory solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="main-content">
          {/* ================= HERO ================= */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Icon name="Briefcase" size={16} />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Financial Solutions Built for Growth
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                From funding and taxation to compliance and advisory, Arthlex Advisors
                helps you make confident, well-informed financial decisions.
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
                  {/* LEFT CONTENT */}
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

                  {/* RIGHT – KEY BENEFITS (UNCHANGED) */}
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
                          {KEY_BENEFITS.map((item, i) => (
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
              Additional Advisory & Protection Services
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
          <HowWeWork />

          {/* ================= FINAL CTA ================= */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let’s Plan Your Next Financial Move
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book a consultation and get clarity on funding, taxation, and compliance.
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
