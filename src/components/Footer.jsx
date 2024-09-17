import React from 'react'
import logo_white from "../assets/logo_white.svg"
import whatsapp from "../assets/whatsapp.svg"
import facebook from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"


function Footer() {
  return (
    <div className={`w-full text-white p-6 md:px-32 md:py-16 bg-blue-dark-dark h-auto`}>
         <div className="flex flex-col md:flex-row gap-5 w-full justify-between">
              <div className="lg:w-6/12 w-full">
                  <img src={logo_white} className="h-8 sm:h-10 md:h-16 pointer-events-none cursor-pointer" alt="logo" />
                  <p className="italic py-6 w-2/3 text-gray-400">Jl. Lebak Bulus I Kav. 29 Cilandak South Jakarta, DKI Jakarta, Indonesia 12340</p>
                  <div className="flex flex-row gap-6">
                     <img src={youtube} alt="youtube" />
                     <img src={facebook} alt="facebook" />
                     <img src={whatsapp} alt="whatsapp" />
                  </div>
              </div>
              <div className="lg:w-2/12 w-full">
                 <p className="font-semibold text-lg pb-6">Company Info</p>
                 <ul className="flex flex-col text-gray-400 gap-2">
                    <li><a href="/" className="text-sm">About Us</a></li>
                    <li><a href="/" className="text-sm">Blog</a></li>
                    <li><a href="/" className="text-sm">Service</a></li>
                    <li><a href="/" className="text-sm">Contact Us</a></li>
                 </ul>
              </div>
              <div className="lg:w-2/12 w-full">
                 <p className="font-semibold text-lg pb-6">Branch</p>
                 <ul className="flex flex-col text-gray-400 gap-2">
                    <li><a href="/" className="text-sm">Tangerang</a></li>
                    <li><a href="/" className="text-sm">Jakarta</a></li>
                    <li><a href="/" className="text-sm">Surabaya</a></li>
                    <li><a href="/" className="text-sm">Bekasi</a></li>
                 </ul>
              </div>
              <div className="lg:w-2/12 w-full">
                 <p className="font-semibold text-lg pb-6">Contact Us</p>
                 <ul className="flex flex-col text-gray-400 gap-2">
                    <li><a href="/" className="text-sm">+626564465455</a></li>
                    <li><a href="/" className="text-sm">info@klinik24.com</a></li>
                    <li><a href="/" className="text-sm">Telp: +5646544654</a></li>
                 </ul>
              </div>
         </div>
         <hr className="my-10 border border-gray-100" />
         <p className="text-gray-400 text-center">Copyright © Klinik24 2022</p>
    </div>
  )
}

export default Footer