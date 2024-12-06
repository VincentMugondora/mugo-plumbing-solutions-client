import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg mb-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="">
          <div className="">
            <img src="/about/new.png" alt="" />
          </div>
        </div>

        {/* Subscription Form */}
        <div className="space-y-4">
            <h5 className="poppins-regular text-blue-500">STAY UPDATED</h5>
          <h2 className="text-3xl font-semibold text-gray-800">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-gray-600">
            Join <span className="font-bold">52,000+</span> people on our
            newsletter.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your mail..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
