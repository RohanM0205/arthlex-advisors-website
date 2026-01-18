import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceComparisonMatrix = ({ services }) => {
  const [selectedServices, setSelectedServices] = useState([services?.[0]?.id, services?.[1]?.id]);

  const comparisonFeatures = [
    "Strategic Planning",
    "Compliance Support",
    "Tax Optimization",
    "Ongoing Advisory",
    "Documentation",
    "Regulatory Updates",
    "Custom Solutions",
    "Implementation Support"
  ];

  const toggleService = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const getFeatureSupport = (serviceId, feature) => {
    const serviceFeatures = {
      'tax-planning': ['Strategic Planning', 'Tax Optimization', 'Ongoing Advisory', 'Regulatory Updates', 'Custom Solutions'],
      'business-advisory': ['Strategic Planning', 'Ongoing Advisory', 'Custom Solutions', 'Implementation Support'],
      'compliance': ['Compliance Support', 'Documentation', 'Regulatory Updates', 'Implementation Support'],
      'startup-support': ['Strategic Planning', 'Compliance Support', 'Documentation', 'Custom Solutions', 'Implementation Support']
    };

    return serviceFeatures?.[serviceId]?.includes(feature);
  };

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Compare Services</h3>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-4">Select up to 3 services to compare (minimum 1 required)</p>
        <div className="flex flex-wrap gap-3">
          {services?.map((service) => (
            <button
              key={service?.id}
              onClick={() => toggleService(service?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedServices?.includes(service?.id)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {service?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Features</th>
              {selectedServices?.map((serviceId) => {
                const service = services?.find(s => s?.id === serviceId);
                return (
                  <th key={serviceId} className="text-center py-4 px-4 text-sm font-semibold text-foreground">
                    {service?.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures?.map((feature, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4 text-sm text-foreground">{feature}</td>
                {selectedServices?.map((serviceId) => (
                  <td key={serviceId} className="text-center py-4 px-4">
                    {getFeatureSupport(serviceId, feature) ? (
                      <Icon name="CheckCircle2" size={20} className="text-success mx-auto" />
                    ) : (
                      <Icon name="Minus" size={20} className="text-muted-foreground mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceComparisonMatrix;