import React, { useState } from 'react';
import menu from "../assets/menu1.svg"

function Header({ onSearch, toggleSidebar }) {
  const [showDoctorInfo, setShowDoctorInfo] = useState(false);

  const toggleDoctorInfo = () => {
    setShowDoctorInfo(!showDoctorInfo);
  };

  return (
    <header className="bg-white shadow-md z-10">
      <div className="container-fluid mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="lg:hidden text-gray-600 p-2 rounded-md ms*"
            onClick={toggleSidebar}
          >
            <img src={menu} alt="Menu" width={24} height={24} />
          </button>
          <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-800 hidden lg:block">Dashboard admin</h1>
          <div className="text-lg font-semibold mb-1 max-md:text-base max-sm:text-sm">Welcome, Admin</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <div className="hidden md:block">
            <input
              type="search"
              placeholder="Rechercher un patient..."
              className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div className="relative">
            <button onClick={toggleDoctorInfo} className="flex items-center space-x-2 rounded-full px-4 transition duration-150 ease-in-out">
              <div className="bg-white size-10 rounded-full">
                <img src="/assets/images/avatar.webp" alt="Profile" className="rounded-full" />  
              </div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDoctorInfo && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold">Dr. Martin McDowney</p>
                  <p className="text-xs text-gray-600">General practitioner</p>
                  <p className="text-xs text-gray-600">Email: martin.mcdowney@example.com</p>
                </div>
                <div className="border-t border-gray-100"></div>
                <a href="#" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">My profil</a>
                <a href="#" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">LogOut</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;