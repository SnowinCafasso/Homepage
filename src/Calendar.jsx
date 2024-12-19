import React from 'react';

const Calendar = ({ eventDate }) => {
  const formattedDate = new Date(eventDate).toISOString();
  const startDate = formattedDate; 
  const endDate = formattedDate; 

  const handleCalendarClick = () => {
    const calendarUrl = `https://calendar.google.com/calendar/event?action=TEMPLATE&text=${}&dates=${startDate}/${endDate}`; 
    window.location.href = calendarUrl;
  };

  return (
    <button onClick={handleCalendarClick}>
      Set Remainder
    </button>
  );
};

export default Calendar;