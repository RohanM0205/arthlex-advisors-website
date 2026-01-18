import React from 'react';
import Icon from '../../../components/AppIcon';

const TimeSlotSelector = ({ selectedTime, onTimeSelect, availableSlots }) => {
  return (
    <div className="w-full bg-card rounded-lg border border-border p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">
        Select Time Slot
      </h3>
      {availableSlots?.length === 0 ? (
        <div className="text-center py-8 md:py-12">
          <Icon name="Calendar" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-sm md:text-base text-muted-foreground">
            Please select a date to view available time slots
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {availableSlots?.map((slot) => (
            <button
              key={slot?.time}
              onClick={() => onTimeSelect(slot?.time)}
              disabled={!slot?.available}
              className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                selectedTime === slot?.time
                  ? 'border-primary bg-primary/5 shadow-md'
                  : slot?.available
                  ? 'border-border hover:border-primary/50 hover:shadow-sm'
                  : 'border-border bg-muted/50 cursor-not-allowed opacity-50'
              }`}
              aria-pressed={selectedTime === slot?.time}
            >
              <div className="text-center">
                <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {slot?.time}
                </div>
                {!slot?.available && (
                  <div className="text-xs text-muted-foreground">Booked</div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 md:mt-6 flex items-start space-x-2 text-xs md:text-sm text-muted-foreground">
        <Icon name="Clock" size={16} className="mt-0.5 flex-shrink-0" />
        <p>All times are in Indian Standard Time (IST). Consultation duration varies by type.</p>
      </div>
    </div>
  );
};

export default TimeSlotSelector;