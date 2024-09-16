import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css';
import DisplaySelectedDate from '../Components/selectedDate'

function MakingAppointment() {

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Pass the selected date to the child component
    // Here, you can use a callback function or state management
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      if (date < firstDayOfMonth || date > lastDayOfMonth) {
        return 'react-calendar__tile--disabled';
      }
    }
    return null;
  };

  return (
   <div className='flex inset-0 fixed justify-center items-center'>
      <div className="bg-white shadow-md rounded-md p-10 border-gray-100 border-[1px]">
        <h1 className="lg:text-4xl text-2xl font-Sora-Bold text-center">
          Book your appointment
        </h1>
        <div className="flex flex-col lg:flex-row gap-3">
          {/* La div du clandrier */}
          <div className='border'>
               <div className="Sample">
                  <div className="Sample__container">
                    <main className="Sample__container__content">
                      <Calendar
                        onChange={handleDateChange}
                        value={date}
                        tileClassName={tileClassName}
                      />
                      <DisplaySelectedDate selectedDate={date} />
                    </main>
                  </div>
                </div> 
          </div>
          {/* la div des inputs */}
          <div className="border">
            Date selectionne ici
          </div>
         
        </div>
        
      </div>
   </div>
  )
}

export default MakingAppointment
