import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUser , FaTools, FaBars, FaTimes, FaHome, FaSignOutAlt, FaClipboardList, FaBook } from "react-icons/fa"; 

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-blue-700 text-white h-full hidden lg:block transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-2xl font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Mugo Plumbing</h1>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-2">
        <NavLink to="/" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaHome className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Home"}
        </NavLink>
        <NavLink to="/dashboard" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaTachometerAlt className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Dashboard"}
        </NavLink>
        <NavLink to="/plumber-dashboard" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaTools className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Plumber Dashboard"}
        </NavLink>
        <NavLink to="/profile" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaUser  className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Profile"}
        </NavLink>
        <NavLink to="/bookings" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaClipboardList className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Bookings"}
        </NavLink>
        <NavLink to="/book-now" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaBook className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Book Now"}
        </NavLink>
        <NavLink to="/logout" className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200">
          <FaSignOutAlt className={`mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          {isOpen && "Logout"}
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNavbar;