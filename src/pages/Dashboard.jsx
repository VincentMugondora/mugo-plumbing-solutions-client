import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import { useState } from "react";

const UserDashboard = () => {
  const { user, logout, loading, error } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {user?.name}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* User Info and Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800">User Stats</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between text-gray-700">
              <span>Total Orders</span>
              <span className="font-semibold text-blue-600">15</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Active Subscriptions</span>
              <span className="font-semibold text-blue-600">3</span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Recent Activity
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between text-gray-700">
              <span>Last Login</span>
              <span className="font-semibold text-gray-500">Yesterday</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Recent Order</span>
              <span className="font-semibold text-blue-600">Order #142</span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Actions</h3>
          <div className="mt-4 space-y-4">
            <button
              onClick={() => setIsEditing(true)}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Edit Profile
            </button>
            <Link
              to={`/profile/${user?.id}`} 
              className="block py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              View My Profile
            </Link>

            <button
              onClick={logout}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
