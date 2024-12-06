import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaArrowLeft, FaWrench, FaHome, FaWater, 
  FaToilet, FaTint, FaFire, FaCheck, 
  FaPhoneAlt, FaClock, FaShieldAlt 
} from "react-icons/fa";
import servicesData from "../../data/services.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.services.find(s => s.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const iconComponents = {
    FaWrench, FaHome, FaWater, FaToilet, FaTint, FaFire
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
          <Link to="/services" className="text-blue-500 hover:text-blue-600">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const features = service.features || [];
  const benefits = service.benefits || [];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link 
            to="/services" 
            className="no-underline hover:no-underline focus:no-underline
            inline-flex items-center text-white mb-8 group w-fit 
            hover:translate-x-[-4px] transition-transform"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Info Cards Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Our Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaPhoneAlt, 
                title: "24/7 Service", 
                text: "Available for emergency calls anytime you need us" 
              },
              { 
                icon: FaClock, 
                title: "Fast Response", 
                text: "Quick and efficient service delivery guaranteed" 
              },
              { 
                icon: FaShieldAlt, 
                title: "Guaranteed Work", 
                text: "100% satisfaction guaranteed on all services" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 
                transition-all duration-300 border border-gray-100 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 flex items-center 
                  justify-center mx-auto mb-4">
                    <item.icon className="text-blue-500 text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How We Can Help
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>{service.fullDescription || service.description}</p>
          </div>
        </div>

        {/* Features and Benefits */}
        {(features.length > 0 || benefits.length > 0) && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-500/10 p-2 rounded-lg mr-3">
                    <FaCheck className="text-blue-500" />
                  </span>
                  Features
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {benefits.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-500/10 p-2 rounded-lg mr-3">
                    <FaShieldAlt className="text-blue-500" />
                  </span>
                  Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us now for a free consultation and estimate
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/book"
                className="no-underline hover:no-underline focus:no-underline
                inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg 
                font-medium transform transition-all duration-300 text-sm
                hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Book Now
                <FaArrowLeft className="ml-2 rotate-180" />
              </Link>
              <Link
                to="/contact"
                className="no-underline hover:no-underline focus:no-underline
                inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg 
                font-medium transform transition-all duration-300 text-sm
                hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Contact Us Now
                <FaArrowLeft className="ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 