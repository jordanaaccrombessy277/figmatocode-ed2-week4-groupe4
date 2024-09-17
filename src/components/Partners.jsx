import React from 'react'
import logo_karmen from "../assets/logo_karmen.svg"
import logo_ciputra from "../assets/logo_ciputra.svg"
import logo_jude from "../assets/logo_jude.svg"
import logo_mayapada from "../assets/logo_mayapada.svg"
import logo_siloam from "../assets/logo_siloam.svg"


function Partners() {
  return (
    <div className={`w-full px-6 py-12 md:px-32 bg-blue-light-gray`}>
         <p className="text-blue-dark pb-6 font-semibold text-2xl text-center">
             Partners & Friends
         </p>
         <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-12 place-items-center items-center">
            <img className="w-[126px] h-[91px] lg:w-full lg:h-auto" src={logo_karmen} alt="doctor"/>
            <img className="w-full w-[120px] h-[91px] lg:w-full lg:h-auto" src={logo_ciputra} alt="doctor"/>
            <img className="w-full w-[94px] h-[78px] lg:w-full lg:h-auto" src={logo_jude} alt="doctor"/>
            <img className="w-full w-[182px] h-[54px] lg:w-full lg:h-auto" src={logo_mayapada} alt="doctor"/>
            <img className="w-full w-[256px] h-[64px] lg:w-full lg:h-auto" src={logo_siloam} alt="doctor"/>
         </div>
    </div>
  )
}

export default Partners