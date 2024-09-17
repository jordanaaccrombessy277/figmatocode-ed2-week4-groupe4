import React, { useState } from 'react';
import logo from '../assets/logo1.svg';
import pasient from '../assets/pasient.svg';
import menu from '../assets/menu1.svg';
import HeaderHomeMobile from '../components/HeaderHomeMobile';

function HeaderHome() {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const handleClickHamburger = () => {
    setIsOpenHeader(!isOpenHeader);
  };

  return (
    <header className="p-6 md:px-32 flex h-auto gap-2 items-center bg-blue-extralight justify-between">
      <div className="flex flex-row gap-16 items-center">
        <img
          className="h-8 sm:h-10 md:h-full pointer-events-none cursor-pointer"
          src={logo}
          alt="logo-icon"
        />
        
        <ul className="lg:flex lg:flex-row gap-5 hidden">
          <li><a href="/" className="text-base text-blue-primary">Home</a></li>
          <li><a href="/" className="text-base text-gray-primary">About Us</a></li>
          <li><a href="/" className="text-base text-gray-primary">Services</a></li>
          <li><a href="/" className="text-base text-gray-primary">Contact Us</a></li>
        </ul>

        {isOpenHeader && <HeaderHomeMobile handleClickHamburger={handleClickHamburger} />}
      </div>
      <a href="/signup" className="md:px-7 px-4 md:py-4 py-2 items-center text-[8px] md:text-sm rounded-3xl bg-gradient-to-r from-blue-primary to-purple-primary flex flex-row md:gap-2.5 gap-1">
          <img src={pasient} alt="Register Pasien" />
          <span className="font-semibold text-white">Patient Register</span>
      </a>
      <img src={menu} className="lg:hidden cursor-pointer" onClick={handleClickHamburger} alt="menu" />
    </header>
  );
}

export default HeaderHome;
