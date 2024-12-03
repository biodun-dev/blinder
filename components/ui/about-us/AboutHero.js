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
    <>
      {/* About Section */}
      <section className="bg-blue-800 text-white py-16 font-poppins">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1
            className={`text-4xl sm:text-5xl font-bold transition duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            About Us
          </h1>
          <p
            className={`text-lg leading-relaxed mt-6 transition duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Welcome to <strong className="font-playfair">AOR Global</strong>, your reliable partner in providing outstanding services across different industries. Established with a vision to bridge gaps and create seamless services, we combine innovation, expertise, and dedication to meet the unique needs of our clients.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-50 to-blue-100 font-roboto">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#60A5FA"
              d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,181.3C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-4xl font-bold text-blue-800">Our Vision</h3>
          <p
            className={`mt-6 text-lg leading-relaxed text-gray-700 transition duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            To be recognized as a world-class, cost-effective, and timely end-to-end freight service provider, delivering quality and efficiency in all the services we provide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 bg-black font-playfair">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#333333"
              d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,181.3C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3
            className={`text-4xl font-semibold text-white transition duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Our Mission
          </h3>
          <p
            className={`mt-6 text-lg leading-relaxed text-gray-300 transition duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Passionately growing our team, delivering innovative solutions that exceed all partners’ expectations.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
