import React from 'react';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who We Are
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                ArthLex Advisors is a finance-led advisory firm helping individuals,
                professionals, and MSMEs make confident, structured financial decisions.
              </p>

              <p>
                We bring clarity to business finance, taxation, and compliance through
                disciplined analysis and practical execution.
              </p>

              <p className="font-semibold text-foreground">
                Clarity in Capital. Confidence in Growth.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-premium">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">Transform complex financial challenges into clear, actionable strategies for sustainable success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Eye" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">Be the most trusted financial advisory partner for growth-focused businesses across India.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;