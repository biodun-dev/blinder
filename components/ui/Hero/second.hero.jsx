import NavLink from "../NavLink";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="pt-32 pb-10 bg-blue-800 text-white">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl font-extrabold mx-auto sm:text-6xl transition duration-1000 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-sm translate-y-10"
            }`}
          >
            Empowering Growth through Strategic Insights and Seamless Logistics
          </h1>
          <p
            className={`max-w-xl mx-auto transition duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-sm translate-y-10"
            }`}
          >
            At AOR Global, we empower businesses with data-driven strategies,
            tailored logistics, and measurable results to excel in today's
            competitive landscape.
          </p>
          <div
            className={`flex items-center justify-center gap-x-3 font-medium text-sm transition duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-sm translate-y-10"
            }`}
          >
            {/* Primary Button */}
            <NavLink
              href="/services"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg px-5 py-3 rounded-lg transition-all duration-200"
            >
              Explore Services
            </NavLink>
            {/* Secondary Button with Improved Hover */}
            <NavLink
              href="/case-studies"
              className="bg-gradient-to-br from-red-100 to-red-200 text-red-600 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white px-5 py-3 rounded-lg transition-all duration-200 shadow-lg"
            >
              View Case Studies
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



