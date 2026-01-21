import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import FeatureDetailModal from './FeatureDetailModal';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  /* ================= FEATURE DETAILS ================= */
  const featureDetails = {
    /* BUSINESS FINANCE */
    "Working Capital": {
      title: "Working Capital Financing",
      description:
        "Flexible funding solutions such as Cash Credit and Overdraft to manage daily business operations."
    },
    "Bank Guarantee / Letter of Credit": {
      title: "Bank Guarantee & Letter of Credit",
      description:
        "Instruments that enhance credibility and enable secure trade transactions."
    },
    "Term Loans / LAP": {
      title: "Term Loans & Loan Against Property",
      description:
        "Long-term financing for expansion, asset purchase, or liquidity needs."
    },
    "Machinery & Equipment Finance": {
      title: "Machinery & Equipment Finance",
      description:
        "Funding solutions for purchasing or upgrading business machinery."
    },
    "Project Finance / Real Estate Funding": {
      title: "Project Finance & Real Estate Funding",
      description:
        "Structured funding solutions for large-scale projects and real estate developments."
    },
    "Business Loans / Home Loans": {
      title: "Business Loans & Home Loans",
      description:
        "Customized financing solutions for business and personal needs."
    },

    /* INCOME TAX */
    "Tax planning & deductions": {
      title: "Tax Planning & Deductions",
      description:
        "Strategic tax planning to minimize liability while ensuring compliance."
    },
    "Capital gains optimization": {
      title: "Capital Gains Optimization",
      description:
        "Efficient structuring to reduce tax on capital gains."
    },
    "Notices & scrutiny handling": {
      title: "Notices & Scrutiny Handling",
      description:
        "Professional support for income tax notices and scrutiny proceedings."
    },
    "Foreign income & reporting": {
      title: "Foreign Income & Reporting",
      description:
        "Accurate disclosure and compliance for foreign income and assets."
    },
    "Tax audit & compliance support": {
      title: "Tax Audit & Compliance Support",
      description:
        "Complete assistance for tax audits and statutory compliance."
    },
    "Advance tax & TDS planning": {
      title: "Advance Tax & TDS Planning",
      description:
        "Planning and calculation of advance tax and TDS to avoid penalties."
    },

    /* GST */
    "Return filing": {
      title: "GST Return Filing",
      description:
        "Timely and accurate filing of GST returns."
    },
    "Input tax credit optimization": {
      title: "Input Tax Credit Optimization",
      description:
        "Maximizing eligible ITC through reconciliation and compliance checks."
    },
    "GST audits": {
      title: "GST Audits",
      description:
        "End-to-end support during GST audits and assessments."
    },
    "GST registration & amendments": {
      title: "GST Registration & Amendments",
      description:
        "Assistance with new registrations and updates to existing GST records."
    },
    "GST advisory & compliance review": {
      title: "GST Advisory & Compliance Review",
      description:
        "Ongoing advisory to ensure GST compliance and risk mitigation."
    },
    "GST litigation support": {
      title: "GST Litigation Support",
      description:
        "Professional assistance in GST disputes and appellate matters."
    },

    /* OTHER SERVICES */
    "Business Advisory": {
      title: "Business Advisory",
      description:
        "Strategic guidance to improve profitability and operational efficiency."
    },
    "Term Insurance": {
      title: "Term Insurance",
      description:
        "Pure protection plans to secure your family’s financial future."
    },
    "Mediclaim": {
      title: "Mediclaim",
      description:
        "Health insurance solutions for individuals, families, and corporates."
    },
    "Investment Advisory": {
      title: "Investment Advisory",
      description:
        "Goal-based investment planning aligned with your risk profile."
    },
    "Retirement planning": {
      title: "Retirement Planning",
      description:
        "Structured planning to ensure financial independence after retirement."
    },
    "Wealth management": {
      title: "Wealth Management",
      description:
        "Comprehensive strategies to grow, protect, and transfer wealth."
    }
  };

  /* ================= SERVICES ================= */
  const services = [
    {
      id: 1,
      icon: "Briefcase",
      title: "Business Finance",
      description: "Comprehensive financial solutions for business growth and expansion.",
      features: [
        "Working Capital",
        "Bank Guarantee / Letter of Credit",
        "Term Loans / LAP",
        "Machinery & Equipment Finance",
        "Project Finance / Real Estate Funding",
        "Business Loans / Home Loans"
      ],
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 2,
      icon: "Calculator",
      title: "Income Tax Advisory",
      description: "Strategic tax planning and compliance for individuals and businesses.",
      features: [
        "Tax planning & deductions",
        "Capital gains optimization",
        "Notices & scrutiny handling",
        "Foreign income & reporting",
        "Tax audit & compliance support",
        "Advance tax & TDS planning"
      ],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      icon: "FileCheck",
      title: "GST Services",
      description: "Complete GST compliance and optimization services.",
      features: [
        "Return filing",
        "Input tax credit optimization",
        "GST audits",
        "GST registration & amendments",
        "GST advisory & compliance review",
        "GST litigation support"
      ],
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: "Layers",
      title: "Other Services",
      description: "Additional advisory and protection solutions tailored to your needs.",
      features: [
        "Business Advisory",
        "Term Insurance",
        "Mediclaim",
        "Investment Advisory",
        "Retirement planning",
        "Wealth management"
      ],
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive advisory solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-soft border"
              >
                <div className="flex gap-4 mb-6">
                  <div
                    className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center`}
                  >
                    <Icon
                      name={service.icon}
                      size={28}
                      className={service.iconColor}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        setSelectedFeature(featureDetails[feature])
                      }
                      className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors py-1 leading-snug"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate('/book-consultation')}
                >
                  Book Consultation
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedFeature && (
        <FeatureDetailModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
          onBook={() => navigate('/book-consultation')}
        />
      )}
    </>
  );
};

export default ServicesSection;

