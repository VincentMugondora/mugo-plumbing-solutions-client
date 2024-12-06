import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Booking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.id) return;

      try {
        const response = await axios.get(
          `http://localhost:5000/api/bookings/user/${user.id}`
        );
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
      <h2 className="text-5xl font-extrabold text-indigo-700 mt-8 mb-6 text-center">
        Your Bookings
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">No bookings found.</p>
      ) : (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200 hover:scale-105 transition-transform duration-300 border border-transparent rounded-xl shadow-lg p-6"
            >
              {/* Plumber Image */}
              <div className="w-32 h-32 mb-4 lg:mb-0 lg:mr-6">
                <img
                  src={
                    booking.plumberImage || "https://via.placeholder.com/150"
                  }
                  alt={booking.plumberName}
                  className="w-full h-full rounded-full object-cover border-4 border-indigo-600"
                />
              </div>

              {/* Booking Info */}
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                  {booking.plumberName}
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(booking.appointmentDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Time:</span>{" "}
                  {booking.appointmentTime}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Fees:</span> ${booking.fees}
                </p>
                <p
                  className={`text-sm font-medium mt-4 ${
                    booking.status === "confirmed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {booking.status.charAt(0).toUpperCase() +
                    booking.status.slice(1)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Booking;
