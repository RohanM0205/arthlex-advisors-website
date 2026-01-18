import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Suresh Kumar",
    role: "CEO, TechVentures India",
    company: "Technology Startup",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6d44ca2-1763295479743.png",
    imageAlt: "Professional Indian businessman in grey suit with confident smile in modern tech office with glass walls",
    quote: "Arthlex Advisors transformed our financial structure during our Series A funding. Their strategic guidance on tax optimization and compliance saved us over ₹2 crores while ensuring we remained fully compliant with all regulations.",
    rating: 5,
    outcome: "₹2 Cr+ Tax Savings",
    duration: "3 Years Partnership"
  },
  {
    id: 2,
    name: "Meera Desai",
    role: "Founder, EcoProducts Ltd",
    company: "Sustainable Manufacturing",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfabbcd0-1763300210121.png",
    imageAlt: "Professional Indian businesswoman in elegant navy blazer with warm smile in contemporary office with natural lighting",
    quote: "As a first-time entrepreneur, I was overwhelmed by financial complexities. Arthlex not only handled our compliance but educated me on strategic financial planning. Their proactive approach helped us scale from 5 to 50 employees seamlessly.",
    rating: 5,
    outcome: "10x Business Growth",
    duration: "5 Years Partnership"
  },
  {
    id: 3,
    name: "Rahul Malhotra",
    role: "Managing Director, Malhotra Exports",
    company: "International Trade",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1671738d4-1763296355873.png",
    imageAlt: "Professional Indian businessman in charcoal suit with confident expression in executive office with city skyline view",
    quote: "International taxation was our biggest challenge. Arthlex's expertise in cross-border transactions and transfer pricing helped us expand to 5 countries while maintaining optimal tax efficiency. Their guidance is invaluable.",
    rating: 5,
    outcome: "5 Country Expansion",
    duration: "7 Years Partnership"
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Investment Professional",
    company: "High Net Worth Individual",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2947d9b-1763295524584.png",
    imageAlt: "Professional Indian woman in burgundy business suit with confident smile in upscale financial district office",
    quote: "Arthlex's personalized wealth management approach helped me optimize my investment portfolio while ensuring tax efficiency. Their regular updates on regulatory changes keep me informed and confident about my financial decisions.",
    rating: 5,
    outcome: "40% Portfolio Growth",
    duration: "4 Years Partnership"
  },
  {
    id: 5,
    name: "Anil Verma",
    role: "Director, Verma Industries",
    company: "Manufacturing Sector",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a891c21d-1763296710025.png",
    imageAlt: "Professional Indian businessman in navy blue suit with glasses reviewing documents in industrial office setting",
    quote: "GST compliance was a nightmare until we partnered with Arthlex. Their systematic approach and proactive communication ensured we never missed a deadline. Their team feels like an extension of our finance department.",
    rating: 5,
    outcome: "100% Compliance Rate",
    duration: "6 Years Partnership"
  },
  {
    id: 6,
    name: "Kavita Reddy",
    role: "Co-Founder, HealthTech Solutions",
    company: "Healthcare Technology",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
    imageAlt: "Professional Indian businesswoman in white blazer with warm smile in modern healthcare technology office",
    quote: "Arthlex's startup advisory services were instrumental in our journey from idea to Series B funding. Their financial modeling and investor-ready documentation helped us secure ₹50 crores in funding. Highly recommended!",
    rating: 5,
    outcome: "₹50 Cr Funding Secured",
    duration: "4 Years Partnership"
  }];


  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            <Icon name="MessageSquare" size={16} className="md:w-5 md:h-5" />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Businesses Across India
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who have transformed their financial operations with Arthlex Advisors
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary p-6 md:p-8 lg:p-12 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 mb-4 md:mb-6">
                    {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={20} className="md:w-6 md:h-6 fill-current" />
                    )}
                  </div>
                  
                  <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                    "{testimonials?.[activeTestimonial]?.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0">
                    <Image
                      src={testimonials?.[activeTestimonial]?.image}
                      alt={testimonials?.[activeTestimonial]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  
                  <div className="min-w-0">
                    <h4 className="text-base md:text-lg font-bold truncate">{testimonials?.[activeTestimonial]?.name}</h4>
                    <p className="text-xs md:text-sm opacity-90 truncate">{testimonials?.[activeTestimonial]?.role}</p>
                    <p className="text-xs opacity-75 truncate">{testimonials?.[activeTestimonial]?.company}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-6 md:p-8 lg:p-12">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                      Measurable Impact
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Every partnership with Arthlex Advisors delivers tangible results that drive business growth and financial confidence.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-success/10 p-4 md:p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2 md:mb-3">
                        <Icon name="TrendingUp" size={24} className="md:w-7 md:h-7 text-success" />
                        <span className="text-xs md:text-sm font-medium text-success">Key Outcome</span>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                        {testimonials?.[activeTestimonial]?.outcome}
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 p-4 md:p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2 md:mb-3">
                        <Icon name="Clock" size={24} className="md:w-7 md:h-7 text-primary" />
                        <span className="text-xs md:text-sm font-medium text-primary">Partnership</span>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                        {testimonials?.[activeTestimonial]?.duration}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs md:text-sm text-muted-foreground">
                        {activeTestimonial + 1} of {testimonials?.length}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                        aria-label="Previous testimonial">

                        <Icon name="ChevronLeft" size={20} className="md:w-6 md:h-6" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                        aria-label="Next testimonial">

                        <Icon name="ChevronRight" size={20} className="md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2 rounded-full transition-all ${
              index === activeTestimonial ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;