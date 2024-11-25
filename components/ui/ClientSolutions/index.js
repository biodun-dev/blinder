import React from "react";
import SectionWrapper from "../../SectionWrapper";

const ClientSolutions = () => {
    const solutions = [
        {
            icon: "/icons/retail.svg",
            title: "Retail Businesses",
            desc: "Optimized marketing strategies that helped retail businesses boost sales by up to 40%.",
        },
        {
            icon: "/icons/transport.svg",
            title: "Logistics Companies",
            desc: "Implemented end-to-end logistics frameworks to reduce delivery times and costs.",
        },
        {
            icon: "/icons/technology.svg",
            title: "Tech Startups",
            desc: "Provided growth-driven market research to help startups penetrate new markets successfully.",
        },
        {
            icon: "/icons/education.svg",
            title: "Educational Platforms",
            desc: "Designed targeted campaigns that increased user engagement and enrollment rates.",
        },
        {
            icon: "/icons/healthcare.svg",
            title: "Healthcare Providers",
            desc: "Developed tailored strategies to improve patient outreach and brand trust.",
        },
        {
            icon: "/icons/manufacturing.svg",
            title: "Manufacturing Firms",
            desc: "Streamlined supply chains and marketing efforts to expand market share effectively.",
        },
    ];

    return (
        <SectionWrapper>
            {/* Top Blur */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 via-gray-50 to-transparent pointer-events-none"></div>
            <div id="client-solutions" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tailored Solutions for Every Industry
                    </h2>
                    <p>
                        Explore how AOR Global Media has delivered impactful solutions across diverse industries.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                    <img src={item.icon} alt={item.title} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                                    <p className="mt-3">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ClientSolutions;
