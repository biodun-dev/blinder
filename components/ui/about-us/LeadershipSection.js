"use client";

const LeadershipSection = ({ leaders }) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Leadership</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Meet the visionaries and dedicated professionals who lead AOR Global Media
          towards excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg">
              <img
                src={leader.image}
                alt={`${leader.name}'s photo`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-gray-600 mt-2">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
