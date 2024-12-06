import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import affordable from "/home/affordable.png";
import app from "/home/app.png";
import certificate from "/home/certicate.png";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-router-dom";

const InstallationServices = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [techniciansCount, setTechniciansCount] = useState(0);
  const sectionRef = useRef(null);
  const lastElementRef = useRef(null); // Reference for the last element
  const projectsTarget = 560;
  const techniciansTarget = 180;
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting(projectsTarget, setProjectsCount);
          startCounting(techniciansTarget, setTechniciansCount);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observer for the last element
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when last element is in view
        }
      },
      { threshold: 1.0 } // Trigger when the last element is fully visible
    );

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = (target, setCounter) => {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCounter(current);
    }, 20);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 md:px-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16"
    >
      {/* Left Column: Header and Images */}
      <div className="w-full md:w-1/2 flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h3 className="poppins-light heading">
            24/7 HASSLE-FREE
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Home And Business Installation Services
          </h2>
        </div>

        {/* Images with Overlay Metric Card */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side larger image */}
          <img
            src="/home/h1-about-img-01.jpg"
            alt="Lighting Installation"
            className={`rounded-lg w-full h-[95%] mt-3 object-cover transition-transform duration-500 ${
              isVisible ? "transform-none" : "transform scale-110"
            }`} // Scale effect
          />

          {/* Right side stacked images */}
          <div className="space-y-4">
            <img
              src="/home/h1-about-img-02.jpg"
              alt="Plumbing Installation"
              className={`rounded-lg w-full h-[200px] lg:h-[300px] object-cover transition-transform duration-500 ${
                isVisible ? "transform-none" : "transform scale-110"
              }`} // Scale effect
            />
            <img
              src="/home/h1-about-img-03.jpg"
              alt="Technician"
              className={`rounded-lg w-full h-[200px] lg:h-[300px] object-cover transition-transform duration-500 ${
                isVisible ? "transform-none" : "transform scale-110"
              }`} // Scale effect
            />
          </div>

          {/* Yellow Metric Card Overlay in the Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0096D2] text-white rounded-lg py-6 px-4 text-center shadow-lg w-[80%] max-w-[10rem] transform -translate-y-8">
              <h3 className="text-3xl font-bold">{projectsCount}+</h3>
              <p className="font-semibold mt-1">Projects Done</p>
              <hr className="my-4 border-black" />
              <h3 className="text-3xl font-bold">{techniciansCount}+</h3>
              <p className="font-semibold mt-1">Technicians</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Paragraph and Service Details */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Paragraph */}
        <p className="text-gray-600 poppins-regular mt-1 mb-8 max-w-md">
          At Mugo Plumbing Solutions we are dedicated to providing reliable
          top-quality plumbing services to meet the needs of both residential
          and commercial clients. With years of experience and a commitment to
          excellence we take pride in offering solutions that are not only
          efficient but also designed to withstand the test of time.
        </p>

        {[
          {
            icon: affordable,
            title: "Customized Solution",
            text: "Plumbing problems don’t wait for business hours, and neither do we. Our emergency services are available around the clock.",
          },
          {
            icon: certificate,
            title: "Affordable Pricing",
            text: "Transparency is key. We provide honest, upfront pricing so you’ll never be surprised by hidden costs.",
          },
          {
            icon: app,
            title: "All-In-One Service",
            text: "We prioritize clear communication, respect for your property, and a commitment to getting the job done right the first time.",
          },
          {
            icon: "/home/plumber.png",
            title: "Expert Technicians",
            text: "Our team of highly trained professionals has the expertise to tackle any plumbing challenge.",
          },
        ].map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-gray-100">
              <img src={feature.icon} alt="icon" className="w-[50px]" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 mt-1">{feature.text}</p>
            </div>
          </div>
        ))}

        {/* Last Element Reference */}
        <div ref={lastElementRef} className="flex items-center space-x-4 mt-8">
          <Link
            to={"/about"}
            className="px-10 py-3 no-underline bg-[#222222] text-white rounded-full text-sm font-semibold"
          >
            Read More
          </Link>
          <div className="hidden lg:flex items-center gap-2 relative">
            <FaPhoneAlt className="text-[#0096D2] text-5xl" />
            <BiMessageRoundedDots className="absolute text-black text-lg left-[30px] top-[20%]" />
            <div className="flex flex-col">
              <p className="text-xl font-semibold -mb-[5px]">000 123 456 789</p>
              <p className="text-gray-500 text-sm mt-[5px]">Call For Booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationServices;
