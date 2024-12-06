import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaSearch,
} from "react-icons/fa";
import axios from "axios"; // Import Axios for HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalUsers, setTotalUsers] = useState(0); // State for total users
  const [pendingBookings, setPendingBookings] = useState(0); // State for pending bookings
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookingsClick = () => {
    navigate("/bookings"); // Navigate to the bookings page
  };

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users
        const usersResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/auth/users"
        );
        setTotalUsers(usersResponse.data.length);

        // Fetch bookings
        const bookingsResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/bookings"
        );
        const pending = bookingsResponse.data.filter(
          (booking) => booking.status === "pending"
        );
        setPendingBookings(pending.length);

        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 flex justify-between items-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/admin.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Dashboard Title */}
          <h1 className="text-4xl font-extrabold tracking-wide">
            Admin Dashboard
          </h1>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg shadow-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            <FaSearch className="absolute left-3 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: User Stats */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-800">Total Users</h3>
            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
            )}
            <div className="flex items-center mt-4 text-gray-500">
              <FaUsers className="text-2xl mr-2" />
              <span>
                {isLoading
                  ? "Fetching user data..."
                  : "+25 new users this week"}
              </span>
            </div>
          </div>

          {/* Card 2: Revenue Stats */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Revenue
            </h3>
            <p className="text-4xl font-bold text-green-600">$45,678</p>
            <div className="flex items-center mt-4 text-gray-500">
              <FaChartLine className="text-2xl mr-2" />
              <span>+10% this month</span>
            </div>
          </div>

          {/* Card 3: Bookings Stats */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-600 cursor-pointer"
            onClick={handleBookingsClick}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Pending Bookings
            </h3>
            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p className="text-4xl font-bold text-orange-600">
                {pendingBookings}
              </p>
            )}
            <div className="flex items-center mt-4 text-gray-500">
              <FaClipboardList className="text-2xl mr-2" />
              <span>
                {isLoading
                  ? "Fetching booking data..."
                  : `${pendingBookings} pending bookings`}
              </span>
            </div>
          </div>
        </div>

        {/* Chart or More Detailed Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Activity Overview
          </h3>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Chart Placeholder</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
