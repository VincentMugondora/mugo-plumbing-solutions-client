import React from "react";

const PricingPlans = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center md:text-left mb-10">
        <p className="text-blue-600 font-semibold uppercase">Our Price Plan</p>
        <h2 className="text-3xl font-bold text-gray-800">
          Choose The Right Plan Which You Need!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center sm:text-center">
          <h3 className="text-xl font-semibold text-gray-700">Basic Plan</h3>
          <p className="text-gray-500 mb-4">
            Start free which you learn more about our services
          </p>
          <div className="text-4xl font-bold text-gray-800 mb-2">$150</div>
          <p className="text-gray-500 mb-6">/month</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>Maintained Equipment</li>
            <li>10% Discount on Repairing</li>
            <li>Inspection 2 Times Monthly</li>
            <li>Unlimited Call In Free</li>
            <li>No Charges for checking</li>
            <li>Offer New Coupons</li>
          </ul>
          <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Purchase Plan →
          </button>
        </div>

        {/* Silver Plan */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-700">Silver Plan</h3>
          <p className="text-gray-500 mb-4">
            Start free which you learn more about our services
          </p>
          <div className="text-4xl font-bold text-blue-600 mb-2">$180</div>
          <p className="text-gray-500 mb-6">/month</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>Maintained Equipment</li>
            <li>10% Discount on Repairing</li>
            <li>Inspection 2 Times Monthly</li>
            <li>Unlimited Call In Free</li>
            <li>No Charges for checking</li>
            <li>Offer New Coupons</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Purchase Plan →
          </button>
        </div>

        {/* Golden Plan */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Golden Plan</h3>
          <p className="text-gray-500 mb-4">
            Start free which you learn more about our services
          </p>
          <div className="text-4xl font-bold text-gray-800 mb-2">$200</div>
          <p className="text-gray-500 mb-6">/month</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>Maintained Equipment</li>
            <li>10% Discount on Repairing</li>
            <li>Inspection 2 Times Monthly</li>
            <li>Unlimited Call In Free</li>
            <li>No Charges for checking</li>
            <li>Offer New Coupons</li>
          </ul>
          <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Purchase Plan →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
