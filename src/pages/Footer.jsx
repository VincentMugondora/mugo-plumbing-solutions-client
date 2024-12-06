import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 px-6">
      <div className="container">
        {/* Logo and Contact Section */}
        <div className="col-span-1 border-b flex flex-col md:flex-row py-6 mb-16 justify-between items-center  space-y-4">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500 text-3xl font-bold">
              <img className="w-40" src="/logo.png" alt="" />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-blue-500 rounded-full p-3">
              <FaPhoneAlt className="text-3xl text-white" />
            </div>
            <div className="flex text-sm leading-tight items-center flex-col">
              <p className="text-white">Requesting A Call:</p>
              <span>(263) 776 477 958</span>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* second section */}
        <div className="container border-b pb-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-2 text-white">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 text-white poppins-regular no-underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-blue-400 text-white poppins-regular no-underline"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/pages"
                  className="hover:text-blue-400 text-white poppins-regular no-underline"
                >
                  Our Pages
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-blue-400 text-white poppins-regular no-underline"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="  text-white poppins-regular no-underline hover:text-blue-400"
                >
                  Pricing
                </a>
              </li>
            </div>
          </div>

          {/* Popular Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Popular Services
            </h3>
            <div className="space-y-2">
              <li>
                <a
                  href="popular-services"
                  className="text-white poppins-regular no-underline hover:text-blue-400"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="services"
                  className="text-white poppins-regular no-underline hover:text-blue-400"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white poppins-regular no-underline hover:text-blue-400"
                >
                  Our Project
                </a>
              </li>
              <li>
                <a
                  href="blog"
                  className="text-white poppins-regular no-underline hover:text-blue-400"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-white poppins-regular no-underline hover:text-blue-400"
                >
                  FAQ
                </a>
              </li>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Working Hours</h3>
            <div className="space-y-2">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Recent Posts</h3>
            <div className="flex items-start space-x-2">
              <img src="/home/service1.jpg" alt="Post" className="w-12 h-12" />
              <div>
                <a
                  href="#"
                  className="text-white no-underline text-sm leading-tight hover:text-blue-500"
                >
                  Revitalising Your People In To a Retail Sown-turn.
                </a>
                <div className="text-gray-400 text-sm flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>Apr 05 2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <img src="/home/service.jpg" alt="Post" className="w-12 h-12" />
              <div>
                <a
                  href="/blog"
                  className="text-white no-underline text-sm leading-tight hover:text-blue-500"
                >
                  Revitalising Your People In To a Retail Sown-turn.
                </a>
                <div className="text-gray-400 text-sm flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>Mar 14 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-gray-500 text-sm text-center lg:text-left">
            &copy; 2024 Mugo Plumbing Solutions. All Rights Reserved.
          </p>
          <div className="text-gray-400 flex space-x-4 text-sm">
            <a href="/settings" className="hover:text-blue-400">
              Setting & Privacy
            </a>
            <a href="/faq" className="hover:text-blue-400">
              FAQ
            </a>
            <a href="/support" className="hover:text-blue-400">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
