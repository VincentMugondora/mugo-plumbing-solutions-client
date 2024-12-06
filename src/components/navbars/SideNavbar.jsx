import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTools,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaClipboardList,
  FaBook,
  FaCog,
  FaUserShield,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook
import UserProfile from "../miscellenous/UserProfile"; // Import the UserProfile component

const SideNavbar = () => {
  const { logout } = useAuth(); // Get the logout function from context
  const [isOpen, setIsOpen] = useState(true); // State for toggling sidebar visibility
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Perform logout functionality
    logout();
    setShowLogoutModal(false); // Close modal after logout
  };

  return (
    <div
      className={`bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden text-white py-4 hidden lg:block transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } flex flex-col`}
      style={{ padding: "0px 1px" }} // Allow the sidebar to take full height of the screen
    >
      {/* Navbar Header */}
      <div className="flex items-center justify-between p-[1.2rem]">
        <h1
          className={`text-2xl font-bold transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          } border-b border-blue-500 pb-2 w-full`} // Full width with border
        >
          Mugo Plumbing
        </h1>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none lg:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 p-2 flex-grow">
        {[
          { to: "/", icon: <FaHome />, label: "Home" },
          { to: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
          {
            to: "/dashboard/plumber-dashboard",
            icon: <FaTools />,
            label: "Plumber Dashboard",
          },
          {
            to: "/dashboard/admin-dashboard",
            icon: <FaUserShield />,
            label: "Admin Dashboard",
          },
          { to: "/profile", icon: <FaUser />, label: "Profile" },
          { to: "/bookings", icon: <FaClipboardList />, label: "Bookings" },
          { to: "/book-now", icon: <FaBook />, label: "Book Now" },
          { to: "/settings", icon: <FaCog />, label: "Settings" },
        ].map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200"
          >
            {React.cloneElement(item.icon, {
              className: `mr-2 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`,
            })}
            {isOpen && item.label}
          </NavLink>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutModal(true)} // Show logout modal
          className="flex items-center hover:bg-blue-800 p-2 rounded transition duration-200"
        >
          <FaSignOutAlt
            className={`mr-2 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          {isOpen && "Logout"}
        </button>
      </nav>

      {/* User Profile Component at the Bottom */}
      <div className="mt-auto p-4 border-t border-blue-500">
        <UserProfile isOpen={isOpen} />
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)} // Close the modal
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration=200"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout} // Handle logout
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration=200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavbar;
