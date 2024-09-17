import React from 'react'


function Service({icon_service,title,whatsapp}) {
  return (
     <div className="rounded-xl bg-white p-8">
         <img
            className="pointer-events-none"
            src={icon_service}
            alt="-icon"
          />
         
          <p className="font-medium text-2xl pt-6 pb-3"> {title}</p>
          <p className="text-gray-primary text-sm pb-6">
            A shop where medicines are prepared and sold based on a doctor's prescription and medical goods are traded.
          </p>
          <a href="/" className="md:px-7 px-4 md:py-4 py-2 items-center text-base md:text-lg rounded-3xl bg-gradient-to-r from-blue-primary to-purple-primary flex flex-row md:gap-16 gap-3">
              <img src={whatsapp} alt="whatsapp" />
              <span className="font-semibold text-white ">Reservation</span>
          </a>
     </div>
  )
}

export default Service