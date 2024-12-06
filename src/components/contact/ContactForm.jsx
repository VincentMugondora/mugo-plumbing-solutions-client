import {
  FaHeadset,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 gap-12">
        {/* Chat Section */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-2xl p-4 lg:w-1/4 text-center transform hover:scale-105 transition-transform duration-300 ml-16">
          <div className="text-5xl mb-4 animate-bounce">
            <FaHeadset className="mx-auto" />
          </div>
          <h3 className="text-2xl font-bold">Chat With Us Live!</h3>
          <p className="text-lg mt-2 text-blue-100">
            Get instant support from our dedicated team. We're here to help you
            24/7.
          </p>
          <button className="bg-white text-blue-500 font-bold px-6 py-2 mt-6 rounded-full shadow-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300">
            START CHAT
          </button>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-[30vw] h-[80vh] lg:w-1/4">
          <img
            src="/contact/contac.PNG"
            alt="Representative"
            className="rounded-xl h-full -mb-1 w-full object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="rounded-xl p-4 lg:w-2/5">
          <p className="text-blue-600 font-bold tracking-wider uppercase mb-1 flex items-center gap-2">
            <FaPaperPlane className="animate-pulse" /> Contact Us
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Let's Connect!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-2 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-2 pl-12 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Similar pattern for other inputs */}
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full p-2 pl-12 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>{" "}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Phone Number*"
                  className="w-full p-2 pl-12 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* ... similar pattern for phone and subject inputs ... */}

            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold w-full py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
