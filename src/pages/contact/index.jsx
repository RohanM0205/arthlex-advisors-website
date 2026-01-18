import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service', disabled: true },
    { value: 'income-tax', label: 'Income Tax Advisory' },
    { value: 'business-finance', label: 'Business Finance' },
    { value: 'gst-services', label: 'GST Services' },
    { value: 'project-finance', label: 'Project Finance' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  // const handleSubmit = (e) => {
  //   e?.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   setTimeout(() => {
  //     setIsSubmitted(true);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       service: '',
  //       message: ''
  //     });

  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 5000);
  //   }, 500);
  // };

    /* ==============================
     SEND WHATSAPP MESSAGE
  ============================== */
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    const whatsappMessage = `
  Hello Arthlex Advisors Team,
  
  I am reaching out through your website to inquire about your services. Please find my details below:
  
  ━━━━━━━━━━━━━━━━━━━━
  Name: ${formData.name}
  Email: ${formData.email}
  Contact Number: ${formData.phone}
  Service Interested In: ${formData.service || 'General Inquiry'}
  
  Message:
  "${formData.message}"
  ━━━━━━━━━━━━━━━━━━━━
  
  Kindly let me know the next steps or a convenient time to connect.
  
  Thank you.
  
  Regards,
  ${formData.name}
  `.trim();
  
    // Admin WhatsApp number (without + or spaces)
    const adminWhatsAppNumber = "917498242139";
  
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
  
    // WhatsApp redirect URL
    const whatsappURL = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;
  
    // Redirect user to WhatsApp
    window.open(whatsappURL, "_blank");
  };
  

  return (
    <>
      <Helmet>
        <title>Contact Us - Arthlex Advisors</title>
        <meta name="description" content="Get in touch with Arthlex Advisors for expert financial advisory services. We're here to help with your tax, finance, and business needs." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="main-content flex-grow">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                  <Icon name="Mail" size={16} />
                  <span>Contact Us</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Let's Start a Conversation
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Have questions? We're here to help. Reach out to us through any of the channels below.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon name="Phone" size={28} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Mon-Fri, 9AM-6PM IST</p>
                  <a href="tel:+91 7498242139" className="text-blue-600 font-semibold hover:underline">
                    +91 22 4567 8900
                  </a>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon name="Mail" size={28} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
                  <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
                  <a href="mailto:contact@arthlexadvisors.com" className="text-green-600 font-semibold hover:underline">
                    contact@arthlexadvisors.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon name="MessageCircle" size={28} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Quick response guaranteed</p>
                  <a
                    href="https://wa.me/7498242139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-semibold hover:underline">
                    +91  74982 42139
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form & Office Location */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>

                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-semibold">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Name"
                      type="text"
                      placeholder="Your full name"
                      value={formData?.name}
                      onChange={(e) => handleChange('name', e?.target?.value)}
                      error={errors?.name}
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData?.email}
                        onChange={(e) => handleChange('email', e?.target?.value)}
                        error={errors?.email}
                        required
                      />

                      <Input
                        label="Phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData?.phone}
                        onChange={(e) => handleChange('phone', e?.target?.value)}
                        error={errors?.phone}
                        required
                      />
                    </div>

                    <Select
                      label="Service"
                      placeholder="Select a service"
                      options={serviceOptions}
                      value={formData?.service}
                      onChange={(value) => handleChange('service', value)}
                    />

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        placeholder="Tell us how we can help..."
                        value={formData?.message}
                        onChange={(e) => handleChange('message', e?.target?.value)}
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                      {errors?.message && (
                        <p className="text-sm text-destructive">{errors?.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      iconName="Send"
                      iconPosition="right"
                      className="w-full bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Office Location */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Visit Our Office
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We'd love to meet you in person. Schedule an appointment before visiting.
                  </p>

                  <div className="bg-white rounded-2xl shadow-premium p-8 border border-gray-100 mb-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Address</h3>
                          <p className="text-muted-foreground">
                          Tarun Raj Niwas, Block Opp - C 931, Kurla Camp, Ravindra Nagar,<br />
                          Ulhasnagar - 421 005, Maharashtra, India                          
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Saturday: 9:00 AM - 6:00 PM<br />                            
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  {/* <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500">Map Integration</p>
                    </div>
                  </div> */}

                  {/* CLICKABLE GOOGLE MAP */}

                  <p className="text-sm text-center mt-3 text-muted-foreground">
                    Click on the map to open Google Maps
                  </p>
                  <a
                    href="https://www.google.com/maps?q=Tarun+Raj+Niwas+Ulhasnagar+421005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition"
                  >
                    <iframe
                      title="Arthlex Advisors Location"
                      src="https://www.google.com/maps?q=Tarun%20Raj%20Niwas%20Ulhasnagar%20421005&output=embed"
                      width="100%"
                      height="140"
                      style={{ border: 0 }}
                      loading="lazy"
                      className="w-full"
                    />
                  </a>

                  

                  <div className="mt-8">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.location.href = '/book-consultation'}
                      iconName="Calendar"
                      iconPosition="left"
                      className="w-full rounded-xl border-2">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;