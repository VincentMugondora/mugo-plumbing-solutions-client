import React from "react";

const AboutUsHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[300px] md:h-[400px] px-4 text-center py-8">
        <h1 className="text-3xl text-center md:text-5xl font-bold">About Us</h1>
        <nav className="flex absolute bottom-0 gap-2 text-sm md:text-base">
          <a
            href="/"
            className="px-4 py-2 no-underline bg-white text-blue-700 rounded-t-lg hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-4 py-2 bg-blue-600 no-underline text-white rounded-t-lg hover:bg-blue-700"
          >
            About Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AboutUsHero;
