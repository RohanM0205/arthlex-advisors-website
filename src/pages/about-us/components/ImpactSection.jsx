import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Icon name="BarChart3" size={16} />
            Our Working Methodology
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Create Financial Impact
          </h2>

          <p className="text-lg text-muted-foreground">
            A structured, finance-first approach designed to deliver clarity,
            compliance, and long-term business confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "Search",
              title: "Understand the Business",
              desc: "We begin by understanding your business model, financial structure, risks, and objectives."
            },
            {
              icon: "FileText",
              title: "Structure & Document",
              desc: "Accurate documentation, financial statements, and compliance records form the foundation."
            },
            {
              icon: "Calculator",
              title: "Analyze & Plan",
              desc: "We identify gaps, optimize tax and finance structures, and plan with real-world feasibility."
            },
            {
              icon: "CheckCircle",
              title: "Execute with Discipline",
              desc: "Clear execution, timely compliance, and ongoing support without shortcuts or assumptions."
            }
          ].map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-premium transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Icon
                  name={step.icon}
                  size={24}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-base text-muted-foreground">
            We do not rely on assumptions, guarantees, or one-size-fits-all solutions.
            Every engagement is handled with discipline, transparency, and respect for
            long-term financial sustainability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
