import React from "react";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo1.svg";
import menu from "../assets/menu1.svg";
import close from "../assets/close1.svg";
import chevreon_down from "../assets/chevron-down-black.svg";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="fixed navbar z-50 w-full bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          <a className="hidden sm:block" href="/dashboard">
            <img
              className=" pointer-events-none cursor-pointer"
              src={logo}
              alt="logo-icon"
            />
          </a>

          <div>
            <div>
              <h2 className="text-md sm:text-lg font-semibold">
                Dashboard user
              </h2>
            </div>
            <div>
              <p className="text-sm sm:text-md">Welcome, User</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-row items-center justify-center space-x-4 mt-2">
          <a href="/" className="text-gray hover:text-blue-primary">
            Home
          </a>
          <a href="/" className="text-gray hover:text-blue-primary">
            Logout
          </a>
          <div className="sm:flex flex-row justify-center items-center gap-2 hidden">
            <img
              className="pointer-events-none w-5 h-5 rounded-full"
              src={avatar}
              alt="avatar-icon-svg"
            />
            <div className="w-5 h-7 pt-1">
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
