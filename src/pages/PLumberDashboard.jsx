import React from "react";

const PLumberDashboard = () => {
  console.log("Rendering Plumber Dashboard");

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen">
      {/* Main Content */}
      <div className="p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to Your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Action Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-700">
              Service Requests
            </h2>
            <p className="text-sm text-gray-500">
              Manage and view service requests
            </p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
              View Requests
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-700">
              Pending Payments
            </h2>
            <p className="text-sm text-gray-500">View and manage payments</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
              Manage Payments
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-700">
              Customer Feedback
            </h2>
            <p className="text-sm text-gray-500">
              See the latest feedback from customers
            </p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
              View Feedback
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700">
            Recent Activity
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between">
              <span className="text-gray-700">
                Completed service for John Doe
              </span>
              <span className="text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">
                Received payment from Jane Smith
              </span>
              <span className="text-gray-500">1 day ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">
                New service request from Bob Marley
              </span>
              <span className="text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PLumberDashboard;
