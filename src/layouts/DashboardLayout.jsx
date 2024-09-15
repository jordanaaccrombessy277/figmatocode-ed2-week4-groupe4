import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from '../assets/close.svg';
function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed z-0 w-full bg-white shadow p-4">
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
          <button
            className="xl:hidden w-5 h-5"
            onClick={toggleSidebar}
          >
            <img src={isSidebarOpen ? close : menu}  alt="menu-icon" />
          </button>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        <aside
          className={`fixed -z-20 h-screen xl:w-52 w-44 bg-gradient-to-r from-purple-primary to-blue-primary text-white flex flex-col transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 transition-transform duration-300`}
        >
          <div className="p-4 text-lg xl:text-xl font-semibold">Dashboard</div>
          <nav className="flex-1 p-4">
            <ul>
              <li className="mb-4">
                <a
                  href="/dashboard"
                  className="bg-white text-center text-black p-2 rounded block"
                >
                  My Appointment
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex mb-4 flex-row space-x-4 w-fit mx-auto my-0 justify-center items-center rounded p-2 text-black bg-white">
            <div>
              <img
                className="pointer-events-none w-5 h-5 rounded-full"
                src={avatar}
                alt="avatar-icon-svg"
              />
            </div>
            <div>
              <h3>Username</h3>
            </div>
          </div>
        </aside>

        <main className="max-w-full xl:ml-52 p-3 sm:p-6 -z-40 mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
