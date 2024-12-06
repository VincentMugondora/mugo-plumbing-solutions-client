import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Booking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.id && user?.role !== "admin") return;

      try {
        const endpoint =
          user?.role === "admin"
            ? "http://localhost:5000/api/bookings"
            : `http://localhost:5000/api/bookings/user/${user.id}`;
        const response = await axios.get(endpoint);
        setBookings(response.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  const deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
      setSelectedBooking(null);
      console.log("Booking deleted successfully");
    } catch (err) {
      console.error("Error deleting booking:", err);
      setError("Failed to delete the booking. Please try again.");
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 mb-12">
      <h2 className="text-4xl font-extrabold text-indigo-700 mt-8 mb-6 text-center">
        {user?.role === "admin" ? "All Bookings" : "Your Bookings"}
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["all", "pending", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === status
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      {filteredBookings.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">No bookings found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-gradient-to-b from-white to-indigo-50 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer p-6 relative"
              onClick={() => setSelectedBooking(booking)}
            >
              {/* Plumber Image */}
              <div className="relative w-full h-32 mb-4">
                <img
                  src={
                    booking.plumberImage || "https://via.placeholder.com/150"
                  }
                  alt={booking.plumberName}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Basic Info */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                {booking.plumberName}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {new Date(booking.appointmentDate).toLocaleDateString()}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-md ${
                  booking.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : booking.status === "pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {booking.status.charAt(0).toUpperCase() +
                  booking.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Overlay Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg relative">
            {/* Exit Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setSelectedBooking(null)}
            >
              <span className="text-2xl">&times;</span>
            </button>

            {/* Booking Details */}
            <div>
              <h3 className="text-2xl font-extrabold text-indigo-700 mb-4">
                {selectedBooking.plumberName}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(
                    selectedBooking.appointmentDate
                  ).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {selectedBooking.appointmentTime}
                </p>
                <p>
                  <strong>Fees:</strong> ${selectedBooking.fees}
                </p>
                <p>
                  <strong>Customer:</strong> {selectedBooking.user.name} (
                  {selectedBooking.user.email})
                </p>
                <p>
                  <strong>Status:</strong> {selectedBooking.status}
                </p>
              </div>

              {/* Admin Delete Button */}
              {user?.role === "admin" && (
                <button
                  onClick={() => deleteBooking(selectedBooking._id)}
                  className="mt-6 w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-400"
                >
                  Delete Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
