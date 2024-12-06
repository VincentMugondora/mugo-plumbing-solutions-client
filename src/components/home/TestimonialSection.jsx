import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsData from '../../assets/testimonials.json';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Define the range of testimonials to be sliced (0–6)
  const slicedTestimonials = testimonialsData.slice(0, 5);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slicedTestimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slicedTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-12">
      {/* Background Video Section */}
      <div className="relative w-full h-[70vh] bg-cover bg-center flex justify-center items-center bg-gray-800">
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/videos/plumber.mov"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
        ></video>

        {/* Video Overlay Text */}
        <h2 className="text-white text-3xl md:text-5xl font-bold z-10">
          Get a Plumber Now.
        </h2>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Testimonial Card */}
      <div className="relative -mt-[20vh] mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-blue-500 font-semibold">TESTIMONIAL</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Our Clients About Us
        </h3>
        <p className="text-gray-600 mb-8">
          {slicedTestimonials[currentIndex].feedback}
        </p>

        {/* Testimonial Avatars */}
        <div className="flex justify-center space-x-4 mb-6">
          {slicedTestimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-12 h-12 rounded-full border-2 ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <p className="text-xl font-semibold">
          {slicedTestimonials[currentIndex].name}
        </p>
        <p className="text-blue-500">{slicedTestimonials[currentIndex].role}</p>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            className="text-gray-600 hover:text-blue-500"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-600 hover:text-blue-500"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
