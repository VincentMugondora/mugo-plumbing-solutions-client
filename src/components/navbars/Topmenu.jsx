import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaClipboardList,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-700 text-white fixed w-full lg:hidden z-10 shadow-lg">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Mugo Plumbing</h1>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`fixed top-0 right-0 h-full bg-blue-800 text-white w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-4">
          <NavLink
            to="/"
            className="flex items-center p-4 hover:bg-orange-500 w-full"
          >
            <FaHome className="mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className="flex items-center p-4 hover:bg-green-500 w-full"
          >
            <FaUser className="mr-2" />
            Profile
          </NavLink>
          <NavLink
            to="/plumber-dashboard"
            className="flex items-center p-4 hover:bg-gray-500 w-full"
          >
            <FaTools className="mr-2" />
            Plumber Dashboard
          </NavLink>
          <NavLink
            to="/bookings"
            className="flex items-center p-4 hover:bg-orange-500 w-full"
          >
            <FaClipboardList className="mr-2" />
            Bookings
          </NavLink>
          <NavLink
            to="/book-now"
            className="flex items-center p-4 hover:bg-green-500 w-full"
          >
            <FaBook className="mr-2" />
            Book Now
          </NavLink>
          <NavLink
            to="/logout"
            className="flex items-center p-4 hover:bg-gray-500 w-full"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default TopMenu;
