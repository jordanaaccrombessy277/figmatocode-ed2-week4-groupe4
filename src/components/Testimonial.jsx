import React from 'react'


function Testimonial({img_testimonial}) {
  return (
    <div className="rounded-xl bg-white p-8">
         <p className="text-gray-primary text-sm md:text-lg italic pb-6">
           A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
         </p>
         
          <div className="flex flex-row gap-4 items-center">
              <img src={img_testimonial} className="w-" alt="img_testimonial" />
              <div className="flex flex-col gap-1">
                  <p className="text-blue-primary font-medium text-sm md:text-lg">Rifki Abdurachman</p>
                  <p className="text-gray-primary text-sm md:text-base">Product Designer</p>
              </div>
          </div>  
    </div>
  )
}

export default Testimonial