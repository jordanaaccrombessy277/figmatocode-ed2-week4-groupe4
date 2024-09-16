import React from 'react'
import img_testimonial from "../assets/img_testimonial.svg"
import Testimonial from "./Testimonial"

function Testimonials() {
  return (
    <div className={`w-full p-6 md:px-32 md:py-32 bg-blue-extralight`}>
         <p className="text-blue-dark pb-6 font-semibold text-2xl text-center"> Testimonial by Patient</p>
         <p className="text-gray-primary text-base md:px-32 text-center pb-6">
           A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
         </p>
         <div className="pt-10 grid md:grid-cols-2 grid-cols-1 gap-9">
             <Testimonial img_testimonial={img_testimonial} />
             <Testimonial img_testimonial={img_testimonial} />
             <Testimonial img_testimonial={img_testimonial} />
             <Testimonial img_testimonial={img_testimonial} />
         </div>
    </div>
  )
}

export default Testimonials