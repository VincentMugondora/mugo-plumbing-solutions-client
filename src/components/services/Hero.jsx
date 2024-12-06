import React from "react";
import { FaWrench, FaHome, FaWater, FaToilet, FaTint, FaFire } from "react-icons/fa";
import servicesData from "../../data/services.json";
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Create an icon mapping object
  const iconComponents = {
    FaWrench,
    FaHome,
    FaWater,
    FaToilet,
    FaTint,
    FaFire
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Professional plumbing solutions for residential and commercial properties. 
          With over 15 years of experience, we deliver quality workmanship and reliable service.
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-16 py-8">
        {servicesData.services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] 
            overflow-hidden transform transition-all duration-300 hover:-translate-y-2 
            hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] group
            max-w-sm mx-auto w-full flex flex-col"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover transform transition-transform 
                duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                <div className="text-blue-500 text-3xl">
                  {React.createElement(iconComponents[service.iconName])}
                </div>
              </div>
            </div>
            <div className="p-8 pt-12 text-center flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to={`/services/${service.id}`}
                  className="no-underline hover:no-underline focus:no-underline 
                  inline-block px-6 py-3 bg-blue-500 text-white rounded-lg 
                  font-semibold transform transition-all duration-300 
                  hover:bg-blue-600 hover:scale-105 hover:shadow-lg 
                  active:scale-95"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
