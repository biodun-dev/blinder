import {
    FaTruck,
    FaChartLine,
    FaUserAlt,
    FaLeaf,
    FaDatabase,
    FaRocket,
  } from "react-icons/fa";
  
  const InsightsAndTrends = () => {
    const insights = [
      {
        icon: (
          <FaTruck className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Future of Logistics",
        desc: "Discover how automation and technology are reshaping supply chains and delivery processes.",
        link: "#logistics",
      },
      {
        icon: (
          <FaChartLine className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Digital Marketing Trends",
        desc: "Learn about the latest strategies to enhance customer engagement and drive conversions online.",
        link: "#digital-marketing",
      },
      {
        icon: (
          <FaUserAlt className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Customer Behavior Insights",
        desc: "Understand shifting consumer habits and preferences to stay ahead in competitive markets.",
        link: "#customer-behavior",
      },
      {
        icon: (
          <FaLeaf className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Sustainable Practices",
        desc: "Explore how businesses are integrating sustainability into operations for long-term growth.",
        link: "#sustainability",
      },
      {
        icon: (
          <FaDatabase className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Data-Driven Decision Making",
        desc: "Leverage analytics to gain actionable insights and refine your business strategies effectively.",
        link: "#data-driven",
      },
      {
        icon: (
          <FaRocket className="text-3xl text-gray-800 group-hover:text-red-600" />
        ),
        title: "Emerging Technologies",
        desc: "Stay ahead by adopting cutting-edge technologies that transform operations and marketing.",
        link: "#emerging-tech",
      },
    ];
  
    return (
      <div className="w-full bg-gray-50 py-16">
        <div id="insights-trends" className="text-gray-600 px-6">
          <div className="text-center">
            <h2 className="text-gray-800 text-4xl font-bold sm:text-5xl">
              Insights & Trends
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the latest insights and trends shaping the future of
              marketing, logistics, and business innovation.
            </p>
          </div>
          <div className="mt-16 relative">
            {/* Blur overlays */}
            <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
            {/* Horizontal Scrolling Wrapper */}
            <div className="overflow-hidden w-full hide-scrollbar relative">
              <div className="flex gap-x-8 animate-marquee whitespace-nowrap flex-nowrap w-max">
                {insights.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex-shrink-0 w-96 h-[400px] bg-white shadow-lg hover:shadow-xl rounded-lg transition transform hover:scale-105 border border-gray-100 p-8 flex flex-col"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gray-100 rounded-full">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-red-600 break-words whitespace-normal">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-6 flex-grow">
                      <p className="text-gray-600 break-words whitespace-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="px-6 py-2 bg-white text-red-600 border border-red-600 rounded-lg shadow-md hover:bg-red-600 hover:text-white focus:outline-none focus:ring focus:ring-red-300 text-sm transition"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
                {/* Duplicate the list for seamless scrolling */}
                {insights.map((item, idx) => (
                  <div
                    key={`copy-${idx}`}
                    className="group flex-shrink-0 w-96 h-[400px] bg-white shadow-lg hover:shadow-xl rounded-lg transition transform hover:scale-105 border border-gray-100 p-8 flex flex-col"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gray-100 rounded-full">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-red-600 break-words whitespace-normal">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-6 flex-grow">
                      <p className="text-gray-600 break-words whitespace-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="px-6 py-2 bg-white text-red-600 border border-red-600 rounded-lg shadow-md hover:bg-red-600 hover:text-white focus:outline-none focus:ring focus:ring-red-300 text-sm transition"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InsightsAndTrends;
  