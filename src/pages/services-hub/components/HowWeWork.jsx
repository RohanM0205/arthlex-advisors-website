import React from "react";
import Icon from "../../../components/AppIcon";

const HowWeWork = () => {
  const steps = [
    {
      step: "01",
      icon: "MessageSquare",
      title: "Listen & Understand",
      description:
        "We start by carefully understanding your objectives, concerns, and compliance requirements without assumptions."
    },
    {
      step: "02",
      icon: "FileSearch",
      title: "Analyze with Expertise",
      description:
        "Our experts evaluate financial data, applicable regulations, risks, and opportunities with precision."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Design the Right Strategy",
      description:
        "We craft a tailored, compliant, and growth-oriented solution aligned with your short and long-term goals."
    },
    {
      step: "04",
      icon: "ShieldCheck",
      title: "Execute with Confidence",
      description:
        "Seamless execution backed by transparent communication, timelines, and continuous professional support."
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100/70 text-blue-700 text-sm font-semibold mb-6 backdrop-blur">
            <Icon name="Workflow" size={16} />
            <span>Our Approach</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            How We Work
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A refined, structured process designed to deliver clarity, compliance,
            and long-term financial confidence — without unnecessary complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur rounded-2xl p-8
                         border border-gray-200/60 shadow-sm
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >
              {/* step number */}
              <span className="absolute top-6 right-6 text-sm font-bold text-blue-600/40">
                {item.step}
              </span>

              {/* icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center
                              transition-colors duration-300 group-hover:bg-blue-600">
                <Icon
                  name={item.icon}
                  size={26}
                  className="text-blue-600 group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* subtle bottom accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
