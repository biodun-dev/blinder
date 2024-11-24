import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 bg-white text-blue-800">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        {/* Title with Blue */}
        <h1 className="text-4xl text-blue-900 font-extrabold mx-auto sm:text-6xl">
          Empowering Growth through Strategic Insights and Collaborative Excellence
        </h1>
        {/* Subtitle with Blue */}
        <p className="max-w-xl mx-auto text-blue-700">
          AOR delivers strategic insights, innovative solutions, and data-driven strategies for measurable success and sustainable growth.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          {/* Primary Button with Blue */}
          <NavLink
            href="/get-started"
            className="text-white bg-blue-800 hover:bg-blue-600 active:bg-blue-900 px-5 py-3 rounded-lg"
          >
            Start building
          </NavLink>
          <NavLink
            href="#cta"
            className="text-red-600 border border-red-600 bg-white hover:bg-red-50 active:bg-red-100 px-5 py-3 rounded-lg"
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
