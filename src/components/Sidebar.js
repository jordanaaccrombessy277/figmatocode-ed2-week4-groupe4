import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo1.svg"
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n-1) + '...' : str;
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>

      <aside className={`
        bg-custom-gradient text-white w-64 lg:w-64 h-screen overflow-y-auto
        fixed lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out z-20
        ${isOpen ? 'translate-x-0 w-11/12 max-w-sm' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="px-4 py-3 bg-white mb-6">
            <img src={logo} alt="Logo de l'entreprise" className="w-full max-w-[150px] mx-auto" />
          </div>
          <nav className="mb-8">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard/admin" className={`block py-2 px-4 rounded  ${isActive('/dashboard/admin') ? 'font-semibold' : 'hover:font-extrabold'}`}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/dashboard/admin" className={`block py-2 px-4 rounded ${isActive('/dashboard/archives') ? 'font-semibold' : 'hover:font-bold'}`}>
                  Archives
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-white size-10 rounded-full">
                  <img src="/assets/images/avatar.webp" alt="Profile" className="rounded-full" />  
                </div>
                <div className="text-sm">
                  <p>{truncate("Dr. Martin McDowney", 15)}</p>
                  <p>{truncate("martin.mcdowney@example.com", 20)}</p>
                </div>
              </div>
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-green-700 transition duration-150 ease-in-out">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;