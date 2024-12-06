import React from "react";
import { motion } from "framer-motion";

// Simple star SVG component
const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "Homeowner",
    image: "/testimonials/emily.jpg",
    content:
      "The team was incredibly professional and efficient. They fixed our plumbing issue in no time and left everything spotless!",
    rating: 5,
    date: "2 weeks ago",
  },
  // Add more testimonials
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What Our Customers Say
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Don't just take our word for it. See what our valued customers have to
          say about our services.
        </motion.p>
      </div>

      {/* Stats Section */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
      >
        {[
          { label: "Happy Customers", value: "2,000+" },
          { label: "5-Star Reviews", value: "1,500+" },
          { label: "Years of Service", value: "15+" },
          { label: "Expert Plumbers", value: "50+" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Testimonials Grid - Updated star rating implementation */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating} />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <span className="text-sm text-gray-500">{testimonial.date}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          Ready to Experience Our Service?
        </h3>
        <p className="mb-6">
          Join our growing list of satisfied customers. Book your service today!
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
