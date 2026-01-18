import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = ({ selectedDate, onDateSelect, availableDates }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isDateAvailable = (day) => {
    const dateStr = `${year}-${String(month + 1)?.padStart(2, '0')}-${String(day)?.padStart(2, '0')}`;
    return availableDates?.includes(dateStr);
  };

  const isDateSelected = (day) => {
    if (!selectedDate) return false;
    const dateStr = `${year}-${String(month + 1)?.padStart(2, '0')}-${String(day)?.padStart(2, '0')}`;
    return selectedDate === dateStr;
  };

  const handleDateClick = (day) => {
    const dateStr = `${year}-${String(month + 1)?.padStart(2, '0')}-${String(day)?.padStart(2, '0')}`;
    if (isDateAvailable(day)) {
      onDateSelect(dateStr);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground">
          {monthNames?.[month]} {year}
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={previousMonth}
            className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-border hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Previous month"
          >
            <Icon name="ChevronLeft" size={18} />
          </button>
          <button
            onClick={nextMonth}
            className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-border hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Next month"
          >
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
        {dayNames?.map((day) => (
          <div
            key={day}
            className="text-center text-xs md:text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {Array.from({ length: startingDayOfWeek })?.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth })?.map((_, index) => {
          const day = index + 1;
          const available = isDateAvailable(day);
          const selected = isDateSelected(day);

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={!available}
              className={`aspect-square rounded-md text-sm md:text-base font-medium transition-all ${
                selected
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : available
                  ? 'bg-muted hover:bg-primary/10 text-foreground'
                  : 'bg-transparent text-muted-foreground/40 cursor-not-allowed'
              }`}
              aria-label={`${day} ${monthNames?.[month]} ${year}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-4 md:mt-6 flex items-start space-x-2 text-xs md:text-sm text-muted-foreground">
        <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
        <p>Available dates are highlighted. Select a date to view time slots.</p>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;