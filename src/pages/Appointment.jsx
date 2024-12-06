import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect, useContext, useState } from "react";
import { assets } from "../assets/assets";
import RelatedPlumbers from "../components/RelatedPlumbers";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios"; 

const Appointment = () => {
  const { plumberId } = useParams();
  const { currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [plumberInfo, setPlumberInfo] = useState(null);
  const [plumberSlots, setPlumberSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth(); 

  // Debug: Log the user object
  console.log("Logged-in User:", user);

  // Fetch plumber info by ID
  const fetchPlumberInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/plumbers/id/${plumberId}`
      );
      setPlumberInfo(response.data);
      getAvailableSlots(); 
    } catch (error) {
      console.error("Error fetching plumber info:", error);
      navigate("/plumbers"); // Redirect if plumber not found
    }
  };

  // Get available slots for booking
  const getAvailableSlots = () => {
    setPlumberSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setPlumberSlots((prev) => [...prev, timeSlots]);
    }
  };

  // Handle booking appointment
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

    console.log("User ID:", user.uid || user._id);
    console.log("Logged-in User:", user);

    const selectedDate = plumberSlots[slotIndex][0].datetime; // Get selected date from slots
    const bookingData = {
      plumberId: plumberInfo._id,
      plumberName: plumberInfo.name,
      plumberImage: plumberInfo.image,
      appointmentDate: selectedDate.toISOString().split("T")[0],
      appointmentTime: slotTime,
      fees: plumberInfo.fees,
      user: user.uid || user,
      userName: user.displayName || user,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("Sending booking data:", bookingData);

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Booking successful!");
    } catch (error) {
      console.log("Booking error:", error);
    }
  };

  useEffect(() => {
    fetchPlumberInfo();
  }, [plumberId]);

  return (
    plumberInfo && (
      <div className="container mt-14">
        {/* ------- Plumber Details ------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="bg-primary w-[40vw] object-left-top h-[40vh] object-cover sm:max-w-72 rounded-lg"
              src={plumberInfo.image}
              alt={plumberInfo.name} 
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* -------- Plumber Info -------- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {plumberInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex item-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {plumberInfo.speciality} - {plumberInfo.experience}
              </p>
            </div>
            {/* ------- Plumber About ------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {plumberInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol} {plumberInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ------- Booking Slots ------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-grey-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {plumberSlots.length > 0 &&
              plumberSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center flex flex-col items-center justify-center py-[15px] min-w-[65px] rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-700"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Display available times for the selected slot */}
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-[15px]">
            {plumberSlots.length > 0 &&
              slotIndex < plumberSlots.length &&
              plumberSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-[15px] py-[6px] rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Book Appointment Button */}
          <button
            onClick={handleBookAppointment}
            disabled={!slotTime}
            className={`text-white text-sm font-light px-[30px] py-[10px] rounded-full my-[15px] ${
              slotTime
                ? "bg-primary hover:bg-primary/90"
                : "bg-gray-400 cursor-notallowed"
            }`}
          >
            Book an appointment
          </button>
        </div>

        {/* ------- Listing Related Plumbers ------- */}
        <RelatedPlumbers plumberId={plumberId} city={plumberInfo.city} />
      </div>
    )
  );
};

export default Appointment;
