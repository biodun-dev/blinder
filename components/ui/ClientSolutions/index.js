import React, { useEffect, useState, useRef } from "react";
import {
    FaShoppingCart,
    FaTruck,
    FaLaptopCode,
    FaBook,
    FaHeartbeat,
    FaIndustry,
} from "react-icons/fa";
import SectionWrapper from "../../SectionWrapper";

const ClientSolutions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const solutions = [
        {
            icon: <FaShoppingCart className="text-4xl text-blue-600" />,
            title: "Retail Businesses",
            desc: "Boost sales and customer engagement with targeted, data-driven marketing strategies.",
            link: "/solutions/retail",
            hoverColor: "hover:bg-red-100",
        },
        {
            icon: <FaTruck className="text-4xl text-green-600" />,
            title: "Logistics Companies",
            desc: "Streamline delivery operations and reduce costs with advanced logistics frameworks.",
            link: "/solutions/logistics",
            hoverColor: "hover:bg-blue-100",
        },
        {
            icon: <FaLaptopCode className="text-4l text-purple-600" />,
            title: "Tech Startups",
            desc: "Accelerate growth with tailored strategies to break into competitive markets.",
            link: "/solutions/tech-startups",
            hoverColor: "hover:bg-red-100",
        },
        {
            icon: <FaBook className="text-4xl text-yellow-600" />,
            title: "Educational Platforms",
            desc: "Increase enrollments and engagement with customized learning campaigns.",
            link: "/solutions/education",
            hoverColor: "hover:bg-blue-100",
        },
        {
            icon: <FaHeartbeat className="text-4xl text-red-600" />,
            title: "Healthcare Providers",
            desc: "Enhance patient outreach and trust with personalized healthcare solutions.",
            link: "/solutions/healthcare",
            hoverColor: "hover:bg-red-100",
        },
        {
            icon: <FaIndustry className="text-4xl text-indigo-600" />,
            title: "Manufacturing Firms",
            desc: "Expand market share with streamlined supply chains and optimized processes.",
            link: "/solutions/manufacturing",
            hoverColor: "hover:bg-blue-100",
        },
    ];

    return (
        <div
            ref={sectionRef}
            style={{
                backgroundColor: "#f8f9fa",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SectionWrapper>
                <div id="client-solutions" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2
                            className={`text-gray-800 text-3xl font-semibold sm:text-4xl transition-all duration-1000 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        >
                            Tailored Solutions for Every Industry
                        </h2>
                        <p
                            className={`mt-4 text-lg transition-all duration-1000 delay-200 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        >
                            Discover how our expertise drives impactful results across diverse sectors.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {solutions.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`group relative bg-white shadow-md transition-all duration-1000 ease-in-out transform ${
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    } hover:-translate-y-2 overflow-hidden ${item.hoverColor}`}
                                    style={{
                                        borderRadius: "1rem 1rem 0 0",
                                        height: "320px",
                                        clipPath: "inset(0px 0px -20px 0px)",
                                        transitionDelay: `${idx * 0.2}s`,
                                    }}
                                >
                                    <a href={item.link} className="block h-full p-6">
                                        <div className="flex items-center gap-x-4">
                                            <div className="flex-none w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-inner">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="mt-3 text-gray-600">
                                            {item.desc}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ClientSolutions;
