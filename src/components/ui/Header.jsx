import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services-hub' },
    { label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location?.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}

          <div
           className="flex items-center cursor-pointer group"
           onClick={() => handleNavigation('/homepage')}
          >
          <img
           src="/assets/images/mainLogo.png"
           alt="Arthlex Advisors"
           className="h-36 md:h-50 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`text-base font-medium transition-colors duration-300 relative group ${
                  isActivePath(item?.path) 
                    ? 'text-primary' :'text-foreground hover:text-primary'
                }`}>
                {item?.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                  isActivePath(item?.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
              <Icon name="Shield" size={14} />
              <span>Trusted</span>
            </div> */}
            <Button
              variant="default"
              onClick={() => handleNavigation('/book-consultation')}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-blue-50 text-primary' :'text-foreground hover:bg-gray-50'
                  }`}>
                  {item?.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                {/* <div className="flex items-center justify-center space-x-2 px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  <Icon name="Shield" size={14} />
                  <span>Trusted</span>
                </div> */}
                <Button
                  variant="default"
                  onClick={() => handleNavigation('/book-consultation')}
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  className="bg-primary hover:bg-primary/90 rounded-xl">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
