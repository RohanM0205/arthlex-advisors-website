// import React from 'react';
// import Icon from '../../../components/AppIcon';

// const StorySection = () => {
//   return (
//     <section className="py-20 md:py-28 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 animate-fade-in-up">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Who We Are
//             </h2>
//             <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
//               <p>
//                 ArthLex Advisors is a finance-led advisory firm helping individuals,
//                 professionals, and MSMEs make confident, structured financial decisions.
//               </p>

//               <p>
//                 We bring clarity to business finance, taxation, and compliance through
//                 disciplined analysis and practical execution.
//               </p>

//               <p className="font-semibold text-foreground">
//                 Clarity in Capital. Confidence in Growth.
//               </p>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-premium">
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Icon name="Target" size={24} color="white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
//                     <p className="text-muted-foreground">Transform complex financial challenges into clear, actionable strategies for sustainable success.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Icon name="Eye" size={24} color="white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
//                     <p className="text-muted-foreground">Be the most trusted financial advisory partner for growth-focused businesses across India.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StorySection;


import React from 'react';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ================= ABOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <Icon name="BookOpen" size={16} />
              About ArthLex Advisors
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Finance-led clarity for <br className="hidden md:block" />
              confident business decisions
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                ArthLex Advisors is a finance-led professional firm focused on supporting
                individuals, professionals, and MSMEs with structured financial decision-making,
                business finance solutions, and statutory compliance.
              </p>

              <p>
                Our work is centered on helping businesses understand their financial position
                clearly, prepare accurate documentation, and take informed decisions aligned
                with long-term sustainability.
              </p>

              <p>
                We believe that most business challenges do not arise due to lack of opportunity,
                but due to gaps in financial structure, planning, and compliance discipline.
                Our role is to bridge these gaps through practical analysis, clear documentation,
                and disciplined execution.
              </p>
            </div>
          </div>

          {/* Philosophy Highlight */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-40" />
            <div className="bg-white border border-border rounded-3xl p-10 shadow-premium relative">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Icon name="Compass" size={26} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At ArthLex Advisors, we believe that better decisions come from better
                    understanding. Clarity in capital and compliance builds confidence in growth.
                  </p>
                  <p className="font-semibold text-foreground">
                    Clarity in Capital. Confidence in Growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OUR APPROACH ================= */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h3>
            <p className="text-lg text-muted-foreground">
              Every engagement is guided by discipline, structure, and real-world practicality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: "Layers", title: "Finance-first & structure-driven" },
              { icon: "FileText", title: "Documentation & compliance focused" },
              { icon: "TrendingUp", title: "Practical advice aligned with reality" },
              { icon: "MessageCircle", title: "Transparent communication" },
              { icon: "ShieldCheck", title: "Long-term clarity over shortcuts" }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group bg-white border border-border rounded-2xl p-6
                  text-center shadow-soft
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-premium
                "
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon
                    name={item.icon}
                    size={24}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <p className="font-semibold text-foreground">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center max-w-4xl mx-auto text-muted-foreground text-base">
            We do not believe in guarantees or one-size-fits-all solutions. Every engagement is
            approached with an understanding of the client’s business, risks, and objectives.
          </p>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-10 shadow-premium">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Icon name="Eye" size={26} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="leading-relaxed text-white/90">
                  To become a trusted finance-led professional firm that helps businesses build
                  sustainable growth through clear capital structuring, informed financial
                  decisions, and disciplined compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-3xl p-10 shadow-premium">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Icon name="Target" size={26} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="leading-relaxed text-white/90">
                  To support individuals, professionals, and MSMEs by providing structured
                  business finance solutions, practical financial analysis, and reliable tax
                  and compliance support—enabling informed decisions with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
