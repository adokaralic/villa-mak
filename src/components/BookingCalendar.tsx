'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface BookingCalendarProps {
  unavailableDates?: string[];
  onDateRangeSelect?: (checkIn: Date, checkOut: Date) => void;
}

export default function BookingCalendar({ unavailableDates = [], onDateRangeSelect }: BookingCalendarProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    if (!checkIn) {
      setCheckIn(date);
    } else if (!checkOut) {
      if (date > checkIn) {
        setCheckOut(date);
        onDateRangeSelect?.(checkIn, date);
      } else {
        setCheckIn(date);
        setCheckOut(null);
      }
    } else {
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  const isDateUnavailable = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return unavailableDates.includes(dateStr);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    let classes = '';

    if (isDateUnavailable(date)) {
      classes += ' bg-red-200 text-red-700 cursor-not-allowed';
    }

    if (checkIn && date.toDateString() === checkIn.toDateString()) {
      classes += ' bg-primary text-white';
    }

    if (checkOut && date.toDateString() === checkOut.toDateString()) {
      classes += ' bg-secondary text-white';
    }

    if (checkIn && checkOut) {
      if (date > checkIn && date < checkOut) {
        classes += ' bg-blue-100';
      }
    }

    return classes;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Select Dates</h2>
      <Calendar
        onChange={() => {}} // Handled by tileOnClick
        tileClassName={tileClassName}
        onClickDay={handleDateClick}
        minDate={new Date()}
      />
      {checkIn && checkOut && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <p className="text-gray-700">
            <strong>Check-in:</strong> {checkIn.toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Check-out:</strong> {checkOut.toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
