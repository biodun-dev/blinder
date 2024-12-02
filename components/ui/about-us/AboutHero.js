"use client";

import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-blue-800 text-white py-16">
      <div className="space-y-8 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl font-extrabold sm:text-5xl transition duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Us
        </h1>
        <p
          className={`text-lg leading-relaxed transition duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Welcome to <strong>AOR Global Media</strong>, your reliable partner
          in providing outstanding services across different industries.
          Established with a vision to bridge gaps and create seamless
          services, we combine innovation, expertise, and dedication to meet
          the unique needs of our clients.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 transition duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4">
              To be recognized as a world-class, cost-effective, and timely
              end-to-end freight service provider, delivering quality and
              efficiency in all the services we provide.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4">
              Passionately growing our team, delivering innovative solutions
              that exceed all partners’ expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
