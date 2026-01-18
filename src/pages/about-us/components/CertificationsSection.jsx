import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
  {
    icon: "Shield",
    title: "SEBI Registered Investment Advisor",
    description: "Officially registered with Securities and Exchange Board of India, ensuring compliance with highest regulatory standards for investment advisory services",
    registrationNumber: "INA000012345",
    validUntil: "2027"
  },
  {
    icon: "Award",
    title: "Institute of Chartered Accountants of India",
    description: "All our tax and accounting professionals are certified Chartered Accountants, maintaining rigorous professional standards and continuing education",
    registrationNumber: "ICAI-REG-2010",
    validUntil: "Active"
  },
  {
    icon: "FileCheck",
    title: "GST Practitioner Certification",
    description: "Authorized GST practitioners with comprehensive knowledge of Goods and Services Tax regulations and compliance requirements",
    registrationNumber: "GST-PRAC-2017",
    validUntil: "Active"
  },
  {
    icon: "TrendingUp",
    title: "Certified Financial Planner",
    description: "CFP certification demonstrating expertise in comprehensive financial planning, investment strategies, and wealth management",
    registrationNumber: "CFP-2012-456",
    validUntil: "2026"
  }];


  const memberships = [
  {
    name: "Institute of Chartered Accountants of India",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4346833-1766484444768.png",
    logoAlt: "ICAI official logo with blue and gold colors representing professional accounting standards in India"
  },
  {
    name: "Securities and Exchange Board of India",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11c7acafa-1768722603338.png",
    logoAlt: "SEBI official emblem with national colors representing securities market regulation authority"
  },
  {
    name: "Financial Planning Standards Board India",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9ccaf84-1767706032298.png",
    logoAlt: "FPSB India logo with professional certification mark for financial planning standards"
  },
  {
    name: "Institute of Company Secretaries of India",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1271aee1d-1768722619735.png",
    logoAlt: "ICSI official logo representing company secretaries professional body in India"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            <Icon name="BadgeCheck" size={16} className="md:w-5 md:h-5" />
            <span>Certifications & Credentials</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Regulators, Validated by Industry
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our professional certifications and regulatory registrations demonstrate our commitment to maintaining the highest standards of expertise and ethical practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          {certifications?.map((cert, index) =>
          <div
            key={index}
            className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300">

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={cert?.icon} size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8 text-success" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {cert?.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    {cert?.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Hash" size={14} className="md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground break-all">{cert?.registrationNumber}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground whitespace-nowrap">Valid: {cert?.validUntil}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-card p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Professional Memberships
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Proud members of India's leading professional and regulatory bodies
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {memberships?.map((membership, index) =>
            <div
              key={index}
              className="flex flex-col items-center space-y-3 md:space-y-4 group">

                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Image
                  src={membership?.logo}
                  alt={membership?.logoAlt}
                  className="w-full h-full object-contain p-2 md:p-3" />

                </div>
                <p className="text-xs md:text-sm text-center text-muted-foreground font-medium leading-tight">
                  {membership?.name}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 lg:mt-16 bg-gradient-to-r from-primary to-secondary p-6 md:p-8 lg:p-12 rounded-2xl text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                Verified Credentials You Can Trust
              </h3>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                All our certifications and registrations are publicly verifiable through respective regulatory bodies. We maintain complete transparency in our professional credentials.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto">
              <button className="px-4 py-2.5 md:px-6 md:py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base flex items-center justify-center space-x-2 whitespace-nowrap">
                <Icon name="Download" size={18} className="md:w-5 md:h-5" />
                <span>Download Credentials</span>
              </button>
              <button className="px-4 py-2.5 md:px-6 md:py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base flex items-center justify-center space-x-2 whitespace-nowrap">
                <Icon name="ExternalLink" size={18} className="md:w-5 md:h-5" />
                <span>Verify Online</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificationsSection;