import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
