import NavLink from "../NavLink";

const Hero = () => (
  <section>
    {/* Add top padding to account for the fixed navbar height */}
    <div className="pt-32 pb-28 bg-blue-800 text-white">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mx-auto sm:text-6xl">
          Empowering Growth through Strategic Insights and Collaborative Excellence
        </h1>
        {/* Subtitle */}
        <p className="max-w-xl mx-auto">
        At AOR Global , we empower businesses with data-driven strategies, tailored solutions, and measurable results to thrive and succeed in today's competitive landscape.
        </p>
        {/* Buttons */}
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          {/* Primary Button */}
          <NavLink
            href="/services"
            className="text-blue-800 bg-white border border-white hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg transition duration-150"
          >
            Explore Services
          </NavLink>
          {/* Secondary Button */}
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

export default Hero;
