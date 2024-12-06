import Hero from "./Hero";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <Hero />
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Enhanced background pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-40"
          // style={{
          //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          // }}
        ></div>

        {/* Section Header - updated colors */}
        <div className="text-center mb-16 px-4 relative">
          <p className="text-blue-600 font-bold tracking-wider uppercase mb-3">
            Contact Info
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact & Join Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
            Let's connect and explore how we can work together to achieve your
            goals.
          </p>
        </div>

        {/* Contact Info Cards - updated alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {/* Location Card - showing one card as example */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group backdrop-blur-sm bg-white/90">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300"></div>
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="text-blue-600 text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-blue-50 p-3 rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-600 font-medium text-sm tracking-wider">
                  Location
                </p>
                <h3 className="text-xl font-bold text-gray-800">Visit Us At</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10 font-medium">
              22 Muriranyenze Street
              <br />
              Mufakose, Harare
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group backdrop-blur-sm bg-white/90">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300"></div>
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="text-blue-600 text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-blue-50 p-3 rounded-xl">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-600 font-medium text-sm tracking-wider">
                  24*7 SERVICE
                </p>
                <h3 className="text-xl font-bold text-gray-800">Call Us On</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10 font-medium">
              Tel: +263-776-477-958
              <br />
              Mob: +263-776-477-958
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600 text-3xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <FaEnvelope />
              </div>
              <p>DROP A LINE..</p>
              <h3 className="text-xl font-semibold text-gray-800">
                Mail Address
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              mugoplumbers@gmail.com
              <br />
              vinmugondora@gamil.com
            </p>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="text-blue-600 text-3xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <FaClock />
              </div>
              <p>OFFICE HOURS..</p>
              <h3 className="text-xl font-semibold text-gray-800">
                Opening Time
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Mon - Fri: 9am - 6pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
