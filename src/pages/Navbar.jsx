import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleLogout = () => {
    logout();
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -5,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
  };

  const handleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <main className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium flex items-center gap-1 ${
                    activeDropdown === "services" ? "text-blue-600" : ""
                  }`}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-50"
                      onMouseEnter={() => handleMouseEnter("services")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      >
                        All Services
                      </Link>
                      <Link
                        to="/services/residential"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      >
                        Residential Plumbing
                      </Link>
                      <Link
                        to="/services/commercial"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      >
                        Commercial Plumbing
                      </Link>
                      <Link
                        to="/services/emergency"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      >
                        Emergency Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/plumbers"
                className="hover:text-blue-600 text-black transition-colors"
              >
                Our Plumbers
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-600 text-black transition-colors"
              >
                Contact Us
              </Link>

              {/* Pages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("pages")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`hover:text-blue-600 transition-colors flex items-center gap-1 ${
                    activeDropdown === "pages" ? "text-blue-600" : ""
                  }`}
                >
                  Pages
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "pages" ? "rotate-180" : ""
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "pages" && (
                  <div
                    className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-50"
                    onMouseEnter={() => handleMouseEnter("pages")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      Booking
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/testimonials"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      Appointments
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Profile and Mobile Menu Toggle */}
            <div className="flex items-center">
              {/* Profile Section - Only visible on large screens */}
              <div className="hidden lg:flex items-center space-x-4">
                {user ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("profile")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center space-x-2 hover:text-blue-600">
                      <img
                        src={user.avatar || "/default-avatar.png"}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border border-gray-200"
                      />
                      <span>{user.name || "Profile"}</span>
                    </button>
                    {activeDropdown === "profile" && (
                      <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-50">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          My Profile
                        </Link>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/bookings"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          My Bookings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-2 hover:text-blue-600 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button - Visible on medium and small screens */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="mobile-menu-button p-2 rounded-md hover:bg-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu - Move outside of nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[49]"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-md bg-white shadow-2xl z-[50] flex flex-col"
            >
              {/* Mobile Menu Content */}
              <div className="h-full flex flex-col">
                {/* Header with Logo and Close Button */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleMenuItemClick}>
                      <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="px-4 py-6 space-y-2">
                    {/* User Profile Section if logged in */}
                    {user && (
                      <motion.div
                        custom={0}
                        variants={menuItemVariants}
                        className="flex items-center space-x-4 px-4 py-3 mb-6 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={user.avatar || "/default-avatar.png"}
                          alt="Profile"
                          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                        />
                        <div>
                          <div className="font-medium text-black">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Links */}
                    <motion.div custom={1} variants={menuItemVariants}>
                      <Link
                        to="/"
                        onClick={handleMenuItemClick}
                        className="group flex items-center space-x-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          Home
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div custom={2} variants={menuItemVariants}>
                      <Link
                        to="/about"
                        onClick={handleMenuItemClick}
                        className="group flex items-center space-x-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          About
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div custom={3} variants={menuItemVariants}>
                      <Link
                        to="/contact"
                        onClick={handleMenuItemClick}
                        className="group flex items-center space-x-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          Contact
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div custom={4} variants={menuItemVariants}>
                      <Link
                        to="/plumbers"
                        onClick={handleMenuItemClick}
                        className="group flex items-center space-x-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          Our Plumbers
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>

                    {/* Services Dropdown */}
                    <motion.div custom={5} variants={menuItemVariants}>
                      <button
                        onClick={() => handleMobileDropdown("services")}
                        className="group flex items-center justify-between w-full p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          Services
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                        <motion.svg
                          className="w-5 h-5 text-black"
                          animate={{
                            rotate: activeDropdown === "services" ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === "services" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 pl-4 border-l border-gray-200"
                          >
                            <Link
                              to="/services/residential"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Residential Plumbing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                            <Link
                              to="/services/commercial"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Commercial Plumbing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                            <Link
                              to="/services/emergency"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Emergency Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Pages Dropdown */}
                    <motion.div custom={6} variants={menuItemVariants}>
                      <button
                        onClick={() => handleMobileDropdown("pages")}
                        className="group flex items-center justify-between w-full p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-black relative">
                          Pages
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                        </span>
                        <motion.svg
                          className="w-5 h-5 text-black"
                          animate={{
                            rotate: activeDropdown === "pages" ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === "pages" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 pl-4 border-l border-gray-200"
                          >
                            <Link
                              to="/pages/booking"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Booking
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                            <Link
                              to="/pages/blogs"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Blogs
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                            <Link
                              to="/pages/testimonials"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Testimonials
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                            <Link
                              to="/pages/appointments"
                              onClick={handleMenuItemClick}
                              className="group block py-3 px-4 text-black"
                            >
                              <span className="relative">
                                Appointments
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Footer Actions */}
                    <motion.div
                      custom={7}
                      variants={menuItemVariants}
                      className="pt-6 mt-6 border-t border-gray-200"
                    >
                      {user ? (
                        <>
                          <Link
                            to="/profile"
                            onClick={handleMenuItemClick}
                            className="group block py-3 px-4 text-black"
                          >
                            <span className="relative">
                              My Profile
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                            </span>
                          </Link>
                          <Link
                            to="/dashboard"
                            onClick={handleMenuItemClick}
                            className="group block py-3 px-4 text-black"
                          >
                            <span className="relative">
                              Dashboard
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                            </span>
                          </Link>
                          <Link
                            to="/bookings"
                            onClick={handleMenuItemClick}
                            className="group block py-3 px-4 text-black"
                          >
                            <span className="relative">
                              My Bookings
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                            </span>
                          </Link>
                          <button
                            onClick={() => {
                              handleLogout();
                              handleMenuItemClick();
                            }}
                            className="group block w-full py-3 px-4 text-black"
                          >
                            <span className="relative">
                              Logout
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all group-hover:w-full"></span>
                            </span>
                          </button>
                        </>
                      ) : (
                        <div className="space-y-2">
                          <Link
                            to="/login"
                            onClick={handleMenuItemClick}
                            className="group flex items-center justify-center w-full p-4 text-black rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="relative">
                              Login
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                            </span>
                          </Link>
                          <Link
                            to="/register"
                            onClick={handleMenuItemClick}
                            className="flex items-center justify-center w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Create Account
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
