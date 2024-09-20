import React from 'react'
import calendar_blue from "../assets/calendar-blue.svg"
import calendar from "../assets/calendar.svg"

function Reserve() {
  return (
    <div id='contact' className={`w-full px-6 py-8 md:px-32 bg-blue-extralight flex h-auto items-center flex-col md:flex-row gap-10`}>
         <div className="bg-gradient-to-r from-blue-primary to-purple-primary w-full h-auto rounded-3xl p-6 md:py-16 md:px-32 flex flex-col items-center">
            <p className="font-semibold text-lg md:text-2xl text-white text-center pb-2"> Book our services now</p>
            <p className="text-white text-sm md:text-base pb-8 text-center">
              A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
               <a href="/" className="px-4 py-2 md:py-3 items-center text-sm md:text-base rounded-3xl border border-white flex flex-row gap-2">
                  <img src={calendar} alt="calendar icon" />
                  <span className="font-semibold text-white">Check Doctor's Shedule</span>
               </a>
               <a href="/making-appointment" className="px-4 py-2 md:py-3 items-center text-sm md:text-base rounded-3xl bg-white flex flex-row gap-2">
                  <img src={calendar_blue} alt="calendar" />
                  <span className="font-semibold text-blue-primary">Reservation</span>
               </a>
            </div>
         </div>
    </div>
  )
}

export default Reserve