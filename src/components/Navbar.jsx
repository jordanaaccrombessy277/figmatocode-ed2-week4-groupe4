import React from "react";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from '../assets/close.svg';
import chevreon_down from '../assets/chevron-down-black.svg';

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="fixed navbar z-50 w-full bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <a href="/dashboard">
          <img
            className="h-8 sm:h-10 pointer-events-none cursor-pointer"
            src={logo}
            alt="logo-icon"
          />
        </a>
        <nav className="flex flex-row items-center justify-center space-x-4 mt-2">
          <a href="/" className="text-gray hover:text-blue-primary">
            Home
          </a>
          <a href="/" className="text-gray hover:text-blue-primary">
            Logout
          </a>
          <div className="sm:flex flex-row justify-between items-center gap-2 hidden">
            <img
              className="pointer-events-none w-5 h-5 rounded-full"
              src={avatar}
              alt="avatar-icon-svg"
            />
            <div className="w-7 h-7">
              <img src={chevreon_down} alt="chevreon_down" />
            </div>
          </div>
          <button className="xl:hidden w-5 h-5" onClick={toggleSidebar}>
            <img src={isSidebarOpen ? close : menu} alt="menu-icon" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
