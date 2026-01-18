import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is your typical response time for inquiries?',
      answer: 'We respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, we recommend calling our office directly or using our WhatsApp chat for immediate assistance.'
    },
    {
      id: 2,
      question: 'Do you offer free initial consultations?',
      answer: 'Yes, we offer a complimentary 30-minute initial consultation to understand your needs and explain how our services can help. This allows us to provide you with a tailored proposal and pricing structure.'
    },
    {
      id: 3,
      question: 'What documents should I prepare for my first meeting?',
      answer: 'Depending on your service needs, we typically recommend bringing recent financial statements, tax returns, business registration documents, and any relevant correspondence from regulatory authorities. We\'ll provide a specific checklist when you book your consultation.'
    },
    {
      id: 4,
      question: 'Can I schedule consultations outside regular business hours?',
      answer: 'Yes, we understand that business owners and professionals have demanding schedules. We offer evening and weekend appointments by prior arrangement. Please mention your preferred timing when booking.'
    },
    {
      id: 5,
      question: 'Do you provide services for clients outside major cities?',
      answer: 'Absolutely. While we have physical offices in Mumbai, Delhi, and Bangalore, we serve clients across India through virtual consultations, secure document sharing, and periodic in-person meetings as needed.'
    },
    {
      id: 6,
      question: 'How do you ensure confidentiality of client information?',
      answer: 'We maintain strict confidentiality protocols including encrypted communication channels, secure document storage, non-disclosure agreements, and compliance with all data protection regulations. Your information is never shared without explicit consent.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Quick answers to common questions about contacting us
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq?.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </span>
                <Icon
                  name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                  size={20}
                  className="text-primary flex-shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;