import React from 'react';
import close from '../assets/close1.svg';

function HeaderHomeMobile({handleClickHamburger }) {
  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col items-center justify-center">
      <img src={close} className="absolute top-4 right-4 cursor-pointer" onClick={handleClickHamburger} alt="close menu" />
      <ul className="flex flex-col gap-5 mt-10">
         <li><a href="/" className="text-base text-blue-primary">Home</a></li>
         <li><a href="/" className="text-base text-gray-primary">About Us</a></li>
         <li><a href="/" className="text-base text-gray-primary">Services</a></li>
         <li><a href="/" className="text-base text-gray-primary">Contact Us</a></li>
      </ul>
    </div>
  );
}

export default HeaderHomeMobile;
