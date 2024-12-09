import { useState, useEffect } from "react";
import {
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaSearch,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);
  const [trafficData, setTrafficData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookingsClick = () => {
    navigate("/bookings");
  };

  const handleUsersClick = () => {
    navigate("/users");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Fetch users
        const usersResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/auth/users",
          config
        );
        setTotalUsers(usersResponse.data.length);

        // Fetch bookings
        const bookingsResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/bookings",
          config
        );
        const pending = bookingsResponse.data.filter(
          (booking) => booking.status === "pending"
        );
        setPendingBookings(pending.length);

        // Fetch traffic data
        const trafficResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/traffic",
          config
        );
        setTrafficData(trafficResponse.data);

        // Fetch analytics data
        const analyticsResponse = await axios.get(
          "https://mugo-plumbing-solutions-api.onrender.com/api/analytics",
          config
        );
        setAnalyticsData(analyticsResponse.data);

        setIsLoading(false);
      } catch (err) {
        if (err.response?.status === 401) {
          setError("Unauthorized. Redirecting to login...");
          navigate("/login");
        } else {
          setError("An error occurred. Please try again later.");
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  // Prepare traffic chart data
  const trafficChartData = trafficData
    ? {
        labels: trafficData.labels,
        datasets: [
          {
            label: "Traffic",
            data: trafficData.values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
          },
        ],
      }
    : null;

  // Prepare analytics chart data
  const analyticsChartData = analyticsData
    ? {
        labels: analyticsData.labels,
        datasets: [
          {
            label: "Analytics",
            data: analyticsData.values,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
          },
        ],
      }
    : null;

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 flex justify-between items-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/admin.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex items-center justify-between w-full">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Admin Dashboard
          </h1>

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

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600 cursor-pointer"
            onClick={handleUsersClick}
          >
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
              <span>+25 new users this week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Revenue
            </h3>
            <p className="text-4xl font-bold text-green-600">$45,678</p>
            <div className="flex items-center mt-4 text-gray-500">
              <FaChartLine className="text-2xl mr-2" />
              <span>+10% this month</span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-600 cursor-pointer"
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
              <span>{`${pendingBookings} pending bookings`}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-purple-600">
          <h3 className="text-xl font-semibold">Traffic Data</h3>
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : trafficData ? (
            <div className="h-72">
              <Line data={trafficChartData} options={{ responsive: true }} />
            </div>
          ) : (
            <p className="text-gray-500">No traffic data available</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-green-600">
          <h3 className="text-xl font-semibold">Analytics Overview</h3>
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : analyticsData ? (
            <div className="h-72">
              <Line data={analyticsChartData} options={{ responsive: true }} />
            </div>
          ) : (
            <p className="text-gray-500">No analytics data available</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
