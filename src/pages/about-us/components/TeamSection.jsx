import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
  {
    id: 1,
    name: "Sushant Chalke",
    role: "Founder & Managing Director",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a891c21d-1763296710025.png",
    imageAlt: "Professional Indian businessman in navy blue suit with confident smile standing in modern office with glass windows",
    expertise: ["Strategic Tax Planning", "Business Advisory", "Regulatory Compliance"],
    certifications: ["CA", "CFA", "SEBI RIA"],
    experience: "20+ years",
    bio: "Rajesh founded Arthlex Advisors with a vision to transform financial advisory in India. His expertise spans complex tax structures, business strategy, and regulatory navigation. He has guided over 200 businesses through critical financial decisions and growth phases.",
    achievements: [
    "Led tax optimization strategies saving clients ₹50+ crores",
    "Advised 50+ startups on financial structuring",
    "Published author on Indian tax regulations"],

    linkedin: "#",
    email: "rajesh.sharma@arthlexadvisors.com"
  },
  {
    id: 2,
    name: "Priya Gupta",
    role: "Senior Tax Consultant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_150f92757-1763295812976.png",
    imageAlt: "Professional Indian businesswoman in formal black blazer with warm smile in contemporary office setting with natural lighting",
    expertise: ["Corporate Tax", "GST Compliance", "International Taxation"],
    certifications: ["CA", "DISA", "GST Practitioner"],
    experience: "15+ years",
    bio: "Priya specializes in complex corporate tax matters and GST compliance. Her meticulous approach and deep regulatory knowledge have helped numerous businesses navigate India\'s evolving tax landscape with confidence.",
    achievements: [
    "Managed GST compliance for 100+ businesses",
    "Resolved complex international tax disputes",
    "Trained 500+ professionals on GST regulations"],

    linkedin: "#",
    email: "priya.mehta@arthlexadvisors.com"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Investment Advisory Head",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102f196d8-1763296707783.png",
    imageAlt: "Professional Indian male financial advisor in charcoal grey suit reviewing documents at desk with laptop and financial charts",
    expertise: ["Portfolio Management", "Wealth Planning", "Risk Assessment"],
    certifications: ["CFA", "CFP", "SEBI RIA"],
    experience: "18+ years",
    bio: "Amit leads our investment advisory practice with a focus on personalized wealth management strategies. His analytical approach and market insights have helped high-net-worth individuals achieve their financial goals while managing risk effectively.",
    achievements: [
    "Managed portfolios worth ₹200+ crores",
    "Achieved 15% average annual returns for clients",
    "Developed proprietary risk assessment framework"],

    linkedin: "#",
    email: "amit.patel@arthlexadvisors.com"
  }
  // {
  //   id: 4,
  //   name: "Sneha Reddy",
  //   role: "Business Advisory Partner",
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3c223b2-1763300872405.png",
  //   imageAlt: "Professional Indian businesswoman in burgundy blazer with confident expression in modern corporate office with glass partitions",
  //   expertise: ["Business Strategy", "Financial Restructuring", "Startup Advisory"],
  //   certifications: ["CA", "MBA Finance", "DISA"],
  //   experience: "12+ years",
  //   bio: "Sneha brings strategic business acumen to our advisory practice, helping businesses optimize operations and financial structures. Her expertise in startup ecosystems has made her a trusted advisor for emerging businesses.",
  //   achievements: [
  //   "Advised 30+ startups on funding strategies",
  //   "Led financial restructuring for 20+ businesses",
  //   "Mentored 100+ entrepreneurs on business planning"],

  //   linkedin: "#",
  //   email: "sneha.reddy@arthlexadvisors.com"
  // },
  // {
  //   id: 5,
  //   name: "Vikram Singh",
  //   role: "Compliance & Regulatory Head",
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_102f196d8-1763296707783.png",
  //   imageAlt: "Professional Indian businessman in dark blue suit with glasses reviewing compliance documents in well-lit office environment",
  //   expertise: ["Regulatory Compliance", "Audit Management", "Risk Mitigation"],
  //   certifications: ["CA", "CISA", "Compliance Officer"],
  //   experience: "16+ years",
  //   bio: "Vikram ensures our clients maintain impeccable compliance standards across all regulatory requirements. His proactive approach to compliance management has helped businesses avoid penalties and maintain strong regulatory relationships.",
  //   achievements: [
  //   "Achieved 100% compliance rate for all clients",
  //   "Conducted 200+ successful regulatory audits",
  //   "Developed compliance automation frameworks"],

  //   linkedin: "#",
  //   email: "vikram.singh@arthlexadvisors.com"
  // },
  // {
  //   id: 6,
  //   name: "Ananya Krishnan",
  //   role: "Client Relations Manager",
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3c223b2-1763300872405.png",
  //   imageAlt: "Professional Indian businesswoman in elegant navy suit with warm welcoming smile in modern office reception area",
  //   expertise: ["Client Engagement", "Service Excellence", "Relationship Management"],
  //   certifications: ["MBA", "CRM Specialist", "Client Success Manager"],
  //   experience: "10+ years",
  //   bio: "Ananya leads our client relations team with a focus on delivering exceptional service experiences. Her dedication to understanding client needs and ensuring satisfaction has resulted in industry-leading retention rates.",
  //   achievements: [
  //   "Maintained 95% client retention rate",
  //   "Implemented client feedback system improving satisfaction by 40%",
  //   "Built long-term relationships with 300+ clients"],

  //   linkedin: "#",
  //   email: "ananya.krishnan@arthlexadvisors.com"
  // }
  ];
  
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            <Icon name="Users" size={16} className="md:w-5 md:h-5" />
            <span>Our Team</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Meet the Experts Behind Your Success
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of seasoned professionals brings decades of combined experience and specialized expertise to serve your financial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers?.map((member) =>
          <div
            key={member?.id}
            className="group bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => setSelectedMember(member)}>

              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                src={member?.image}
                alt={member?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{member?.name}</h3>
                <p className="text-xs md:text-sm text-primary font-medium mb-3 md:mb-4">{member?.role}</p>
                
                <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                    <Icon name="Award" size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                    <span className="line-clamp-1">{member?.certifications?.join(", ")}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                    <span>{member?.experience}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {member?.expertise?.slice(0, 2)?.map((skill, idx) =>
                <span key={idx} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      {skill}
                    </span>
                )}
                  {member?.expertise?.length > 2 &&
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      +{member?.expertise?.length - 2} more
                    </span>
                }
                </div>
                
                <button className="w-full py-2 md:py-2.5 text-xs md:text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center space-x-2">
                  <span>View Profile</span>
                  <Icon name="ArrowRight" size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedMember &&
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e?.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between z-10">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Team Member Profile</h3>
              <button
              onClick={() => setSelectedMember(null)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors">

                <Icon name="X" size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="lg:col-span-1">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 md:mb-6">
                    <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">{selectedMember?.name}</h4>
                      <p className="text-sm md:text-base text-primary font-medium">{selectedMember?.role}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm md:text-base text-muted-foreground">
                        <Icon name="Award" size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                        <span>{selectedMember?.certifications?.join(", ")}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm md:text-base text-muted-foreground">
                        <Icon name="Clock" size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                        <span>{selectedMember?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm md:text-base text-muted-foreground">
                        <Icon name="Mail" size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                        <span className="break-all">{selectedMember?.email}</span>
                      </div>
                    </div>
                    
                    <button className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                      <Icon name="Linkedin" size={18} className="md:w-5 md:h-5" />
                      <span>Connect on LinkedIn</span>
                    </button>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  <div>
                    <h5 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">About</h5>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{selectedMember?.bio}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">Areas of Expertise</h5>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {selectedMember?.expertise?.map((skill, idx) =>
                    <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-lg">
                          {skill}
                        </span>
                    )}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">Key Achievements</h5>
                    <ul className="space-y-2 md:space-y-3">
                      {selectedMember?.achievements?.map((achievement, idx) =>
                    <li key={idx} className="flex items-start space-x-2 md:space-x-3">
                          <Icon name="CheckCircle2" size={16} className="md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-muted-foreground">{achievement}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default TeamSection;