// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Icon from '../AppIcon';

// const Footer = () => {
//   const navigate = useNavigate();
//   const currentYear = new Date()?.getFullYear();

//   const footerSections = {
//     company: {
//       title: 'Company',
//       links: [
//         { label: 'About Us', path: '/about-us' },
//         { label: 'Services', path: '/services-hub' },
//         { label: 'Contact', path: '/contact' }
//       ]
//     },
//     services: {
//       title: 'Services',
//       links: [
//         { label: 'Tax Planning', path: '/services-hub' },
//         { label: 'Business Advisory', path: '/services-hub' },
//         { label: 'Compliance', path: '/services-hub' },
//         { label: 'Startup Support', path: '/services-hub' }
//       ]
//     },
//     resources: {
//       title: 'Resources',
//       links: [
//         { label: 'Regulatory Updates', path: '/homepage' },
//         { label: 'Tax Calculator', path: '/homepage' },
//         { label: 'FAQ', path: '/homepage' },
//         { label: 'Blog', path: '/homepage' }
//       ]
//     }
//   };

//   const socialLinks = [
//     { name: 'Linkedin', icon: 'Linkedin', url: '#' },
//     { name: 'Twitter', icon: 'Twitter', url: '#' },
//     { name: 'Facebook', icon: 'Facebook', url: '#' },
//     { name: 'Instagram', icon: 'Instagram', url: '#' }
//   ];

//   const handleNavigation = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleSocialClick = (url) => {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         <div className="footer-grid">
//           <div className="footer-section">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10">
//                 <Icon name="TrendingUp" size={24} color="white" />
//               </div>
//               <span className="text-2xl font-bold text-white font-headline">
//                 Arthlex Advisors
//               </span>
//             </div>
//             <p className="footer-section-description">
//               Strategic financial advisory services for growth-focused businesses and high-earning professionals. Building confidence through clarity in complex financial landscapes.
//             </p>
//             <div className="footer-social">
//               {socialLinks?.map((social) => (
//                 <button
//                   key={social?.name}
//                   onClick={() => handleSocialClick(social?.url)}
//                   className="footer-social-link"
//                   aria-label={social?.name}
//                 >
//                   <Icon name={social?.icon} size={18} />
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-section-title">{footerSections?.company?.title}</h3>
//             <div className="footer-links">
//               {footerSections?.company?.links?.map((link) => (
//                 <button
//                   key={link?.path}
//                   onClick={() => handleNavigation(link?.path)}
//                   className="footer-link"
//                 >
//                   {link?.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-section-title">{footerSections?.services?.title}</h3>
//             <div className="footer-links">
//               {footerSections?.services?.links?.map((link) => (
//                 <button
//                   key={link?.label}
//                   onClick={() => handleNavigation(link?.path)}
//                   className="footer-link"
//                 >
//                   {link?.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-section-title">{footerSections?.resources?.title}</h3>
//             <div className="footer-links">
//               {footerSections?.resources?.links?.map((link) => (
//                 <button
//                   key={link?.label}
//                   onClick={() => handleNavigation(link?.path)}
//                   className="footer-link"
//                 >
//                   {link?.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <p className="footer-copyright">
//               © {currentYear} Arthlex Advisors. All rights reserved.
//             </p>
//             <div className="footer-bottom-links">
//               <button
//                 onClick={() => handleNavigation('/homepage')}
//                 className="footer-bottom-link"
//               >
//                 Privacy Policy
//               </button>
//               <button
//                 onClick={() => handleNavigation('/homepage')}
//                 className="footer-bottom-link"
//               >
//                 Terms of Service
//               </button>
//               <button
//                 onClick={() => handleNavigation('/homepage')}
//                 className="footer-bottom-link"
//               >
//                 Disclaimer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about-us' },
        { label: 'Services', path: '/services-hub' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Tax Planning', path: '/services-hub' },
        { label: 'Business Advisory', path: '/services-hub' },
        { label: 'Compliance', path: '/services-hub' },
        { label: 'Startup Support', path: '/services-hub' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Regulatory Updates', path: '/homepage' },
        { label: 'Tax Calculator', path: '/homepage' },
        { label: 'FAQ', path: '/homepage' },
        { label: 'Blog', path: '/homepage' }
      ]
    }
  };

  /* ================= SOCIAL LINKS (UPDATED) ================= */
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/arthlex-advisors-6651b43a7'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://www.instagram.com/arthlex.advisors?utm_source=qr&igsh=NjhsOWR4ODB5bGZm'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: 'https://wa.me/917498242139?text=Hello%20ArthLex%20Advisors%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20understand%20how%20you%20can%20help%20with%20financial%20advisory%20and%20compliance%20support.%20Looking%20forward%20to%20connecting.'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-section">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10">
                <Icon name="TrendingUp" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold text-white font-headline">
                Arthlex Advisors
              </span>
            </div>

            <p className="footer-section-description">
              Strategic financial advisory services for growth-focused businesses and
              high-earning professionals. Building confidence through clarity in complex
              financial landscapes.
            </p>

            {/* SOCIAL */}
            <div className="footer-social">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-section">
            <h3 className="footer-section-title">{footerSections.company.title}</h3>
            <div className="footer-links">
              {footerSections.company.links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="footer-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-section">
            <h3 className="footer-section-title">{footerSections.services.title}</h3>
            <div className="footer-links">
              {footerSections.services.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path)}
                  className="footer-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div className="footer-section">
            <h3 className="footer-section-title">{footerSections.resources.title}</h3>
            <div className="footer-links">
              {footerSections.resources.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path)}
                  className="footer-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Arthlex Advisors. All rights reserved.
            </p>

            <div className="footer-bottom-links">
              <button
                onClick={() => handleNavigation('/homepage')}
                className="footer-bottom-link"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('/homepage')}
                className="footer-bottom-link"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavigation('/homepage')}
                className="footer-bottom-link"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
