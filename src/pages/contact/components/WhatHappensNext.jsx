import React from "react";
import Icon from "../../../components/AppIcon";

const WhatHappensNext = () => {
  const steps = [
    {
      icon: "Inbox",
      title: "We Review Your Message",
      description:
        "Every inquiry is personally reviewed by our team to understand your requirement accurately."
    },
    {
      icon: "PhoneCall",
      title: "We Get in Touch",
      description:
        "You will hear from us within 24 working hours through your preferred contact method."
    },
    {
      icon: "MessageSquare",
      title: "We Understand Your Requirement",
      description:
        "We ask only relevant questions to clearly understand your situation, goals, and expectations."
    },
    {
      icon: "CheckCircle",
      title: "You Receive Clear Next Steps",
      description:
        "We explain the way forward, timelines, and scope transparently — no pressure, no jargon."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-50/60 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100/70 text-blue-700 text-sm font-semibold mb-6 backdrop-blur">
            <Icon name="ArrowRightCircle" size={16} />
            <span>Next Steps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            What Happens After You Contact Us
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in clarity, respect for your time, and transparent communication
            from the very first interaction.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur rounded-2xl p-8
                         border border-gray-200/60 shadow-sm
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >
              {/* icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center
                              transition-colors duration-300 group-hover:bg-blue-600">
                <Icon
                  name={item.icon}
                  size={26}
                  className="text-blue-600 group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* subtle hover accent */}
              <div className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
