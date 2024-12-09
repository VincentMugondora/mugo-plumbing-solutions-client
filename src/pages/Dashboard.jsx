import React from "react";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary

const Dashboard = () => {
  const { user } = useAuth(); // Get the logged-in user from AuthContext

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.name || "User"}
        </h1>
        <p className="text-gray-600">Here is your latest dashboard overview.</p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-700">Total Bookings</h3>
          <p className="text-4xl font-bold text-blue-600">25</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-700">
            Active Subscriptions
          </h3>
          <p className="text-4xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-700">Support Tickets</h3>
          <p className="text-4xl font-bold text-blue-600">2</p>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-xl font-bold text-gray-700 p-6">
          Recent Activities
        </h3>
        <table className="min-w-full bg-gray-100">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Date</th>
              <th className="text-left px-6 py-3 text-sm font-medium">
                Activity
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 text-sm text-gray-700">Dec 1, 2024</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                Booking #12345
              </td>
              <td className="px-6 py-4 text-sm text-blue-600">Completed</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 text-sm text-gray-700">Dec 3, 2024</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                Profile Update
              </td>
              <td className="px-6 py-4 text-sm text-blue-600">Pending</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">Dec 5, 2024</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                Payment #45678
              </td>
              <td className="px-6 py-4 text-sm text-blue-600">Failed</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
