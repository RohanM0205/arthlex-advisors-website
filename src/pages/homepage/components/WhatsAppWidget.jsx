import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hi, I would like to know more about your financial advisory services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-slide-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                <Icon name="MessageCircle" size={20} color="white" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">Arthlex Advisors</div>
                <div className="text-xs text-success flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Hi there! 👋\nHow can we help you today?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-success hover:bg-success/90 text-white rounded-lg py-2 px-4 text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Start Chat</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-success hover:bg-success/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp chat"
      >
        <Icon name={isExpanded ? "X" : "MessageCircle"} size={28} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;