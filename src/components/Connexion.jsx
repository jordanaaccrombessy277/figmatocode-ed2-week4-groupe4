import React from 'react'
import img_relationship from "../assets/img_relationship.svg"
import whatsapp from "../assets/whatsapp.svg"

function Connexion() {
  return (
    <div className={`w-full p-6 md:px-32 md:pt-16 bg-blue-extralight flex h-auto items-center flex-col md:flex-row gap-10`}>
         <div className="md:w-1/2 w-full">
            <p className="font-semibold text-2xl pb-3"> Luxury facilities that humanize humans</p>
            <p className="text-gray-primary text-base pb-6">
              A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
            </p>
            <div className="flex">
                 <a href="/" className="md:px-7 px-4 md:py-4 py-2 items-center text-sm md:text-lg rounded-3xl bg-gradient-to-r from-blue-primary to-purple-primary flex flex-row md:gap-5 gap-3">
                    <img src={whatsapp} alt="whatsapp" />
                    <span className="font-semibold text-white ">Reservation</span>
                 </a>
            </div>
         </div>
          <div className="md:w-1/2 w-full md:h-full h-auto">
            <img src={img_relationship} alt="img_relationship" className="w-full h-full" />
         </div>
    </div>
  )
}

export default Connexion