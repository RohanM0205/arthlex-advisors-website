import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechVenture Solutions",
    company: "Technology Startup",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a341e72a-1763295403609.png",
    imageAlt: "Professional headshot of Indian businessman in navy blue suit with confident smile in modern office setting",
    content: "Arthlex Advisors transformed our financial structure during our Series A funding. Their strategic tax planning saved us ₹2.5 crores in the first year alone. They're not just advisors, they're true growth partners.",
    rating: 5,
    logo: "Building2"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder & Director",
    company: "Sustainable Fashion Brand",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bd1d466-1763295184837.png",
    imageAlt: "Professional portrait of Indian businesswoman with long dark hair wearing elegant black blazer in contemporary office environment",
    content: "As a first-time entrepreneur, I was overwhelmed by compliance requirements. Arthlex made everything simple and proactive. Their startup support package gave me the confidence to focus on growing my business.",
    rating: 5,
    logo: "ShoppingBag"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Managing Partner",
    company: "Manufacturing Enterprise",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15fc0b499-1763293918717.png",
    imageAlt: "Professional photograph of middle-aged Indian businessman with grey beard wearing formal white shirt in industrial office setting",
    content: "We've worked with several CA firms over 20 years, but Arthlex stands apart. Their business advisory helped us restructure operations and improve margins by 18%. Truly strategic thinking.",
    rating: 5,
    logo: "Factory"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Investment Banker",
    company: "High Net Worth Individual",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191ce689f-1763296035010.png",
    imageAlt: "Professional headshot of Indian woman with shoulder-length hair in burgundy business suit smiling warmly in modern corporate office",
    content: "Their personal tax optimization strategies are exceptional. They helped me restructure my portfolio and reduce tax liability by 35% while maintaining full compliance. Highly recommended for HNIs.",
    rating: 5,
    logo: "TrendingUp"
  }];


  const clientLogos = [
  { name: "TechCorp", icon: "Laptop" },
  { name: "FinanceHub", icon: "DollarSign" },
  { name: "RetailPro", icon: "ShoppingCart" },
  { name: "HealthCare+", icon: "Heart" },
  { name: "EduTech", icon: "GraduationCap" },
  { name: "LogiMove", icon: "Truck" }];

  const clientIndustries = [
    { icon: "Laptop", name: "Technology" },
    { icon: "DollarSign", name: "Finance & NBFCs" },
    { icon: "ShoppingCart", name: "Retail & E-Commerce" },
    { icon: "HeartPulse", name: "Healthcare" },
    { icon: "GraduationCap", name: "Education" },
    { icon: "Truck", name: "Logistics & Supply Chain" },
    { icon: "Factory", name: "Manufacturing" },
    { icon: "Building2", name: "Real Estate" },
    { icon: "Utensils", name: "Hospitality & Food" },
    { icon: "Briefcase", name: "Professional Services" }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about their experience working with Arthlex Advisors.
          </p>
        </div> */}

        {/* <div className="relative max-w-5xl mx-auto mb-12">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials?.[activeIndex]?.image}
                    alt={testimonials?.[activeIndex]?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="mt-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={testimonials?.[activeIndex]?.logo} size={24} color="var(--color-primary)" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials?.[activeIndex]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="var(--color-accent)" className="fill-current" />
                  )}
                </div>

                <blockquote className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials?.[activeIndex]?.content}"
                </blockquote>

                <div>
                  <div className="font-bold text-lg text-foreground">
                    {testimonials?.[activeIndex]?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials?.[activeIndex]?.role}
                  </div>
                  <div className="text-sm text-primary font-medium mt-1">
                    {testimonials?.[activeIndex]?.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div> */}

        {/* <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Serving clients across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {clientLogos?.map((logo, index) =>
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">

                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name={logo?.icon} size={24} color="var(--color-primary)" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground text-center">
                  {logo?.name}
                </span>
              </div>
            )}
          </div>
        </div> */}

<div className="border-t border-border pt-16">
  {/* HEADER */}
  <div className="text-center mb-12">
    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
      Powering Growth Across Industries
    </h3>
    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
      Partnering with businesses across sectors to drive clarity, compliance, and scale
    </p>
  </div>

  {/* INDUSTRY GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
    {clientIndustries.map((industry, index) => (
      <div
        key={index}
        className="
          group relative flex flex-col items-center justify-center
          p-6 rounded-2xl border border-border bg-card
          transition-all duration-300 ease-out
          hover:-translate-y-2
          hover:border-primary/40
          hover:shadow-xl
        "
      >
        {/* ICON */}
        <div
          className="
            w-14 h-14 rounded-xl
            bg-primary/10
            flex items-center justify-center
            mb-3
            transition-all duration-300
            group-hover:bg-primary
          "
        >
          <Icon
            name={industry.icon}
            size={26}
            className="text-primary group-hover:text-white transition-colors"
          />
        </div>

        {/* TEXT */}
        <span
          className="
            text-sm font-semibold text-foreground text-center
            transition-colors duration-300
            group-hover:text-primary
          "
        >
          {industry.name}
        </span>

        {/* SUBTLE GLOW */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    ))}
  </div>
</div>

      </div>
    </section>);

};

export default TestimonialsSection;