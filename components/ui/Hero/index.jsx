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
            <NavLink
              href="/services"
              className="text-blue-800 bg-white border border-white hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg transition duration-150"
            >
              Explore Services
            </NavLink>
            <NavLink
              href="/case-studies"
              className="text-red-600 bg-white border border-red-600 hover:bg-red-600 hover:text-white px-5 py-3 rounded-lg transition duration-150"
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
