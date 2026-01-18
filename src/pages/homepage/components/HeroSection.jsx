// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

// const HeroSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
//       {/* Subtle background decoration */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 right-10 w-96 h-96 bg-blue-250 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
//         <div className="text-center space-y-8 animate-fade-in-up">
//           {/* Company Name */}
//           <div className="space-y-3">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
//               Arthlex Advisors
//             </h1>
//             <p className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
//               Strategic Tax, Finance & Business Advisory
//             </p>
//           </div>

//           {/* Confidence-building description */}
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Your trusted partner for navigating complex financial landscapes with clarity, confidence, and strategic insight. We transform challenges into opportunities for sustainable growth.
//           </p>

//           {/* Primary CTAs */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => navigate('/book-consultation')}
//               iconName="Calendar"
//               iconPosition="left"
//               className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-6 text-lg w-full sm:w-auto">
//               Book Consultation
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => navigate('/services-hub')}
//               iconName="ArrowRight"
//               iconPosition="right"
//               className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl px-8 py-6 text-lg w-full sm:w-auto">
//               Explore Services
//             </Button>
//           </div>

//           {/* Trust indicators */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
//             {[
//               { icon: 'Target', label: 'Focused Advisory Solutions', color: 'text-blue-600' },
//               { icon: 'Users', label: 'Personalized Client Support', color: 'text-green-600' },
//               { icon: 'FileCheck', label: 'Regulatory-Aware Guidance', color: 'text-amber-600' },
//               { icon: 'TrendingUp', label: 'Growth-Oriented Strategies', color: 'text-purple-600' }
//             ]?.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className={`${item?.color} mb-3 flex justify-center`}>
//                   <Icon name={item?.icon} size={32} />
//                 </div>
//                 <p className="text-sm font-semibold text-foreground">{item?.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/home1.jpg')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-10 animate-fade-in-up">

          {/* Brand */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
              Arthlex Advisors
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
              Strategic Tax, Finance & Business Advisory
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help individuals, professionals, and MSMEs make confident financial decisions
            by bringing clarity to taxation, compliance, and business finance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/book-consultation')}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl px-9 py-6 text-lg w-full sm:w-auto"
            >
              Book Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/services-hub')}
              iconName="ArrowRight"
              iconPosition="right"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl px-9 py-6 text-lg w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 pt-14 max-w-8xl mx-auto">
            {[
              { icon: 'Target', label: 'Focused Advisory', color: 'text-blue-600' },
              { icon: 'Users', label: 'Client-First Approach', color: 'text-green-600' },
              { icon: 'FileCheck', label: 'Compliance-Driven', color: 'text-amber-600' },
              { icon: 'TrendingUp', label: 'Growth-Oriented', color: 'text-purple-600' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${item.color} mb-3 flex justify-center`}>
                  <Icon name={item.icon} size={30} />
                </div>
                <p className="text-sm font-semibold text-foreground text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
