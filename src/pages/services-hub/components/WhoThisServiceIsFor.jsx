import React from "react";
import Icon from "../../../components/AppIcon";

const WhoThisServiceIsFor = () => {
  const profiles = [
    {
      icon: "User",
      title: "Salaried Professionals",
      description:
        "Individuals seeking accurate tax planning, compliance support, return filing, and guidance on notices or declarations."
    },
    {
      icon: "Rocket",
      title: "Startups & MSMEs",
      description:
        "Early-stage and growing businesses that need GST support, structuring advice, registrations, and compliance clarity."
    },
    {
      icon: "Building2",
      title: "Growing Businesses",
      description:
        "Established businesses looking for financial optimization, cash flow planning, funding support, and strategic advisory."
    },
    {
      icon: "BarChart3",
      title: "Complex & High-Value Cases",
      description:
        "Clients dealing with scrutiny, assessments, restructuring, project finance, or complex financial scenarios."
    }
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* soft background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100/70 text-blue-700 text-sm font-semibold mb-6 backdrop-blur">
            <Icon name="Target" size={16} />
            <span>Service Fit</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Who This Service Is For
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our services are designed for individuals and businesses who value
            clarity, compliance, and long-term financial confidence.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {profiles.map((item, index) => (
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

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* subtle hover underline */}
              <div className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsFor;
