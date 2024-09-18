import React from 'react';

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
const minutes = ['00', '30'];

const TimeSelect = ({ selectedTime, onTimeChange }) => {
  const handleTimeChange = (e) => {
    onTimeChange(e.target.value);
  };

  return (
    <div className="flex flex-col cursor-pointer">
      <label className="text-lg font-medium mb-2">Select Time:</label>
      <div className="relative cursor-pointer">
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        >
          {hours.map((hour) =>
            minutes.map((minute) => {
              const time = `${hour}:${minute}`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })
          )}
        </select>
        
      </div>
    </div>
  );
};

export default TimeSelect;
