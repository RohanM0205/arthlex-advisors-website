import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceDetailSection = ({ service }) => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/book-consultation', {
      state: { selectedService: service?.id }
    });
  };

  return (
    <section
      id={service?.id}
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 lg:order-1">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              <Icon name={service?.icon} size={14} />
              <span>{service?.category}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              {service?.title}
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {service?.detailedDescription}
            </p>

            {/* ================= DELIVERABLES ================= */}
            <div className="space-y-4 mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                What We Deliver
              </h3>

              {service?.deliverables?.map((deliverable, index) => (
                <div
                  key={index}
                  className="
                    flex items-start gap-4 p-5 rounded-xl bg-card border
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-md
                  "
                >
                  <div className="mt-1">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {deliverable?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {deliverable?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= IDEAL FOR ================= */}
            <div className="bg-card border rounded-xl p-6 mb-10">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Ideal For
              </h3>

              <div className="flex flex-wrap gap-2">
                {service?.idealFor?.map((audience, index) => (
                  <span
                    key={index}
                    className="
                      px-4 py-2 rounded-full text-sm font-medium
                      bg-primary/10 text-primary
                      transition hover:bg-primary hover:text-primary-foreground
                    "
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= CTA ================= */}
            <Button
              variant="default"
              onClick={handleBookConsultation}
              iconName="Calendar"
              iconPosition="left"
              size="lg"
              className="btn-conversion shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-64 md:h-80 lg:h-[420px]">
              <Image
                src={service?.image}
                alt={service?.imageAlt}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
