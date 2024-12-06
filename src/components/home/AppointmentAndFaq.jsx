import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import faqsData from '../../assets/Faq.json'; // Adjust the path as necessary

const AppointmentAndFAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(0); // Initialize with 0 to show the first FAQ

  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/home/booking.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col md:flex-row items-start p-8 space-y-8 md:space-y-0 md:space-x-8 bg-[#101112] text-white relative"
    >
      <div className="container-fluid md:container flex flex-col md:flex-row items-start p-8 space-y-8 md:space-y-0 md:space-x-8 text-white relative z-10">
        {/* Appointment Form */}
        <div className="w-full flex items-center justify-center md:w-1/2"> {/* Set to 50% width */}
          <div className="bg-gradient-to-r from-[#1590FF] to-[#005CD9] p-4 rounded-lg w-[70%] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Book An Appointment</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Name *</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent text-white border-b border-dashed focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">Phone Number *</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border-b border-dashed text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full p-2 bg-transparent border-b border-dashed text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border-b border-dashed text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full p-2 bg-transparent border-b border-dashed text-white focus:outline-none"
                  rows="2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-1/2"> {/* Set to 50% width */}
          <h4 className="poppins-regular mb-3">FAQ</h4>
          <h1 className="poppins-semibold mb-8">Questions Answer</h1>
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedFAQ === index ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {index + 1}. {faq.question}
                  </h3>
                  <span className="text-xl">
                    {selectedFAQ === index ? <FaArrowDown /> : <FaArrowUp />}
                  </span>
                </div>
                {selectedFAQ === index && (
                  <>
                    {/* More visible horizontal rule only when selected */}
                    <hr className="my-2 border-blue-300" />
                    <p className="mt-2 text-sm">{faq.answer}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAndFAQ;