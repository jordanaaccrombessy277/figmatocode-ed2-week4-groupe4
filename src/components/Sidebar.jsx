import React from "react";
import avatar from "../assets/avatar.svg";
import chevreon_down_white from '../assets/chevron-down-white.svg';

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed sidebar xl:z-20 z-50 h-screen xl:w-52 w-44 bg-gradient-to-r from-purple-primary to-blue-primary text-white flex flex-col transform ${
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
      <div className="flex mb-4 flex-row mx-auto my-0 justify-center items-center rounded p-2 text-black">
        <div>
          <img
            className="pointer-events-none w-5 h-5 rounded-full"
            src={avatar}
            alt="avatar-icon-svg"
          />
        </div>
        <div className="text-white">
          <h3 className="text-sm sm:text-base">John Doe</h3>
          <div className="text-xs sm:text-sm">johnjoe@gmail.com</div>
        </div>
        <div className="w-10 h-10">
          <img src={chevreon_down_white} alt="chevreon_down_white" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
