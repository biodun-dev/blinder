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
    <section className="relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
        {/* Subtle Texture Overlay */}
        <div
          className="absolute inset-0 bg-pattern opacity-20"
          style={{
            backgroundImage: "url('/images/texture.svg')",
            backgroundSize: "400px 400px",
          }}
        ></div>
        {/* Floating Particles */}
        <div className="absolute inset-0 animate-float bg-particles opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-10 text-white max-w-6xl mx-auto text-center">
        <div className="space-y-6">
          {/* Headline */}
          <h1
            className={`text-5xl font-extrabold sm:text-7xl leading-tight tracking-wide transition duration-1000 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-md translate-y-10"
            }`}
          >
            Empowering Growth Through Innovation
          </h1>
          {/* Subheadline */}
          <p
            className={`max-w-3xl mx-auto text-lg sm:text-xl font-medium transition duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-md translate-y-10"
            }`}
          >
            Discover data-driven strategies, seamless logistics, and tailored solutions designed for your business success.
          </p>
          {/* Buttons */}
          <div
            className={`flex items-center justify-center gap-x-5 font-medium text-sm transition duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 filter-none translate-y-0"
                : "opacity-0 blur-md translate-y-10"
            }`}
          >
            {/* Primary Button */}
            <NavLink
              href="/services"
              className="bg-blue-600 text-white hover:bg-blue-500 hover:shadow-xl px-6 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Services
            </NavLink>
            {/* Secondary Button */}
            <NavLink
              href="/case-studies"
              className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-700 hover:from-blue-200 hover:to-blue-400 hover:text-blue-800 px-6 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
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
