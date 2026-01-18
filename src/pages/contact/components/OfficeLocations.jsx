import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      name: 'Mumbai Head Office',
      address: '15th Floor, Nariman Point Tower\nNariman Point, Mumbai - 400021\nMaharashtra, India',
      phone: '+91 22 4567 8900',
      email: 'mumbai@arthlexadvisors.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
      lat: '18.9250',
      lng: '72.8258',
      isPrimary: true
    },
    {
      id: 2,
      name: 'Delhi Branch Office',
      address: 'Plot 42, Connaught Place\nNew Delhi - 110001\nDelhi, India',
      phone: '+91 11 2345 6789',
      email: 'delhi@arthlexadvisors.com',
      hours: 'Mon-Fri: 9:30 AM - 6:00 PM\nSat: 10:00 AM - 1:00 PM',
      lat: '28.6304',
      lng: '77.2177',
      isPrimary: false
    },
    {
      id: 3,
      name: 'Bangalore Branch Office',
      address: 'MG Road Business Center\nMahatma Gandhi Road\nBangalore - 560001\nKarnataka, India',
      phone: '+91 80 4123 5678',
      email: 'bangalore@arthlexadvisors.com',
      hours: 'Mon-Fri: 9:00 AM - 6:30 PM\nSat: By Appointment',
      lat: '12.9716',
      lng: '77.5946',
      isPrimary: false
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our Office Locations
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at any of our offices across India for in-person consultations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {offices?.map((office) => (
            <div
              key={office?.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {office?.isPrimary && (
                <div className="bg-primary text-white px-4 py-2 text-center">
                  <span className="text-xs md:text-sm font-semibold">HEAD OFFICE</span>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">
                  {office?.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-muted-foreground whitespace-pre-line">
                      {office?.address}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary flex-shrink-0" />
                    <a
                      href={`tel:${office?.phone?.replace(/\s/g, '')}`}
                      className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      {office?.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${office?.email}`}
                      className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      {office?.email}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-muted-foreground whitespace-pre-line">
                      {office?.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={office?.name}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${office?.lat},${office?.lng}&z=14&output=embed`}
                    className="border-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;