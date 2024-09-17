import React from 'react'
import potion from "../assets/potion.svg"
import heart from "../assets/heart.svg"
import pick from "../assets/pick.svg"
import whatsapp from "../assets/whatsapp.svg"
import Service from "./Service"


function Services() {
  return (
    <div id="services" className={`w-full px-6 py-10 md:px-32 md:py-28 bg-blue-extralight`}>
       
        <div className="flex flex-col md:flex-row gap-5 md:gap-14 md:justify-between">
            <p className="font-semibold w-full md:w-1/2 text-2xl text-blue-dark">
               List of Services
            </p>
            <p className="text-gray-primary w-full md:w-1/2 text-base">
               A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
            </p>
        </div>
         <div className="pt-10 grid md:grid-cols-3 grid-cols-1 gap-9">
             <Service icon_service={potion} title={`24 Hour Pharmacy`} whatsapp={whatsapp} />
             <Service icon_service={heart} title={`Medical Check Up`} whatsapp={whatsapp} />
             <Service icon_service={pick} title={`Professional Doctor`} whatsapp={whatsapp} />  
         </div>
    </div>
  )
}

export default Services