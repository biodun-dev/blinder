"use client"; // Ensure this runs as a client component

import { useState, useEffect } from "react";

const OurStrategies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2
          className={`text-3xl font-bold text-gray-800 text-center transition duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Strategies
        </h2>
        <p
          className={`mt-4 text-gray-600 text-center leading-relaxed transition duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          At AOR Global, we focus on innovative strategies that empower
          businesses to excel in today’s competitive markets.
        </p>

        {/* Staggered Animation for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div
            className={`bg-gray-50 shadow-lg p-6 rounded-lg transition duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">
              Data-Driven Insights
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Leveraging analytics and market data to drive decision-making and
              create effective strategies tailored to your goals.
            </p>
          </div>
          <div
            className={`bg-gray-50 shadow-lg p-6 rounded-lg transition duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">
              Customer-Centric Solutions
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Prioritizing customer needs to develop solutions that deliver value
              and drive brand loyalty.
            </p>
          </div>
          <div
            className={`bg-gray-50 shadow-lg p-6 rounded-lg transition duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">
              Seamless Logistics
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Ensuring efficient handling, clearing, and delivery of goods across
              local and international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrategies;
