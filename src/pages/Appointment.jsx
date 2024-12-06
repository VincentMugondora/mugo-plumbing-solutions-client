import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appointment = ({ user, plumberInfo = {}, plumberSlots = [] }) => {
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const navigate = useNavigate();

  const handleBookAppointment = async () => {
    if (!slotTime) {
      alert("Please select a time slot");
      return;
    }

    if (!user) {
      alert("Please login to book an appointment");
      navigate("/login");
      return;
    }

    const selectedDate = plumberSlots[slotIndex][0].datetime; // Get selected date from slots
    const bookingData = {
      plumberId: plumberInfo._id,
      plumberName: plumberInfo.name || "Unknown Plumber", // Default value
      plumberImage: plumberInfo.image || "", // Default value
      appointmentDate: selectedDate.toISOString().split("T")[0],
      appointmentTime: slotTime,
      fees: plumberInfo.fees || 0, // Default value
      user: {
        id: user.id || user._id, // Use user.id instead of user.uid
        name: user.name || user.displayName || "Anonymous", // Default value
        email: user.email || "", // Ensure this is the correct email
        role: user.role || "customer", // Set a default role if necessary
      },
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log("Sending booking data:", bookingData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings", // Ensure this URL is correct
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Log the error response
        console.error("Booking error:", errorData);
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.error}`
        );
      }

      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("There was an error booking your appointment. Please try again.");
    }
  };

  // Conditional rendering to handle undefined plumberInfo
  if (!plumberInfo.name) {
    return <div>Loading plumber information...</div>;
  }

  return (
    <div>
      <h1>Book an Appointment</h1>
      <div>
        <h2>Plumber: {plumberInfo.name}</h2>
        <img src={plumberInfo.image} alt={plumberInfo.name} />
        <p>Fees: ${plumberInfo.fees}</p>
      </div>
      <div>
        <h3>Select a Time Slot</h3>
        {plumberSlots.length > 0 ? (
          plumberSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => {
                setSlotIndex(index);
                setSlotTime(slot[0].time);
              }}
            >
              {slot[0].time}
            </button>
          ))
        ) : (
          <p>No available time slots.</p>
        )}
      </div>
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default Appointment;
