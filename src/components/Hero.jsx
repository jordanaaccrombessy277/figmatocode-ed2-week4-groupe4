import React from 'react'
import doctor from "../assets/doctor.svg"
import pasient from '../assets/pasient.svg';

function Hero() {
  return (
    <div className={`w-full p-6 md:px-32 bg-blue-extralight items-center h-auto flex flex-col md:flex-row gap-5`}>
        <div className="md:w-3/5 w-full md:h-full h-auto">
            <h2 className="pb-4 font-bold text-3xl bg-gradient-to-r from-blue-primary to-purple-primary bg-clip-text text-transparent">Clinic 24 is ready to serve public complaints 24/7.</h2>
            <p className="pb-8 text-base text-gray-primary">A hospital is an integral part of a social and health organization with the function of providing comprehensive services.</p>
            <div className="flex">
                 <a href="#services" className="md:px-7 px-4 md:py-4 py-2 items-center text-sm rounded-3xl bg-gradient-to-r from-blue-primary to-purple-primary flex flex-row md:gap-2.5 gap-1">
                    <img src={pasient} alt="Register Pasien" />
                    <span className="font-semibold text-white">View services</span>
                </a>
            </div>
        </div>
        <div className="md:w-2/5 w-full md:h-full h-auto">
             <img
                className="w-full"
                src={doctor}
                alt="doctor"
              />
        </div>
    </div>
  )
}

export default Hero