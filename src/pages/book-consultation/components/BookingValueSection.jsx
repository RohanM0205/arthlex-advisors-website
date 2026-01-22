import React from 'react';

/**
 * BookingValueSection
 * Used on the Book Consultation page to build trust
 * and explain value after the booking flow.
 */
const BookingValueSection = () => {
  return (
    <>
      {/* ================= VALUE SECTION ================= */}
      <section className="mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              'What You’ll Get',
              'Clarity, strategy, and actionable guidance tailored to your needs'
            ],
            [
              'Who It’s For',
              'Businesses, professionals, startups, and growth-focused individuals'
            ],
            [
              'How It Works',
              'Simple steps with human follow-up and expert consultation'
            ]
          ].map(([title, desc]) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-background to-muted/40 border rounded-2xl p-8 text-center
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center
                           group-hover:bg-primary group-hover:text-white transition"
              >
                <span className="text-xl font-bold">✓</span>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section
        className="mt-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10
                   rounded-3xl border p-12 text-center max-w-5xl mx-auto shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4">
          Trusted Financial Advisory
        </h3>

        <p className="text-muted-foreground text-base leading-relaxed">
          Arthlex Advisors blends regulatory expertise with real-world business
          experience to help you make confident, compliant, and profitable decisions.
        </p>
      </section>
    </>
  );
};

export default BookingValueSection;
