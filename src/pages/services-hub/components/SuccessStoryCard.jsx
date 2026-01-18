import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessStoryCard = ({ story }) => {
  return (
    <div className="bg-card rounded-lg p-6 md:p-8 border border-border hover:shadow-lg transition-all">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <Icon name="TrendingUp" size={24} className="text-success" />
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1">{story?.clientType}</h4>
          <p className="text-sm text-muted-foreground">{story?.industry}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-foreground mb-4 leading-relaxed">
        {story?.challenge}
      </p>
      <div className="bg-success/5 p-4 rounded-lg mb-4">
        <h5 className="text-sm font-semibold text-success mb-2">Outcome</h5>
        <p className="text-sm text-foreground">{story?.outcome}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {story?.metrics?.map((metric, index) => (
          <div key={index} className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{metric?.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground">{metric?.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoryCard;