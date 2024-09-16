// DisplaySelectedDate.jsx
import React from 'react';

function DisplaySelectedDate({ selectedDate }) {
  return (
    <div>
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default DisplaySelectedDate;
