import React from "react";

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 md:p-16 rounded-xl shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Mugo Plumbing Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Professional Plumbing{" "}
              <span className="text-blue-600">Solutions</span> You Can Trust
            </h2>
          </div>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
              <div className="text-blue-500 transform transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Our Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 20 Years of Quality Plumbing Service and Customer
                  Satisfaction. Trusted by thousands of homeowners.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
              <div className="text-blue-500 transform transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  24/7 Commitment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock Emergency Service with Reliable, Professional
                  Solutions when you need them most.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
              <div className="text-blue-500 transform transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Our Promise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivering Excellence in Every Job with 100% Guaranteed
                  Workmanship and Customer Satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="relative group col-span-2 md:col-span-1">
              <img
                src="/about/about-4.jpg"
                alt="Professional Plumber at Work"
                className="w-full h-80 object-cover rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 2 */}
            <div className="relative group col-span-2 md:col-span-1">
              <img
                src="/about/about-7.jpg"
                alt="Professional Plumbing Equipment"
                className="w-full h-80 object-cover rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 3 */}
            <div className="relative group col-span-2">
              <img
                src="/about/about-6.jpg"
                alt="Quality Plumbing Service"
                className="w-full h-64 object-cover rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
