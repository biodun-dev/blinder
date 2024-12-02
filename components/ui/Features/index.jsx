import React, { useEffect, useState, useRef } from "react";
import {
    FaUserTie,
    FaChartLine,
    FaBullhorn,
    FaUsers,
    FaLightbulb,
    FaGraduationCap,
} from "react-icons/fa";
import SectionWrapper from "../../SectionWrapper";
import OurExpertise from "../logistics/index";

const Features = () => {
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
            icon: <FaUserTie className="text-4xl text-blue-600" />,
            title: "Recruitment and Training",
            desc: "We help businesses source skilled professionals and support employee growth with personalized training programs.",
            link: "/solutions/recruitment-training",
            hoverColor: "hover:bg-blue-100",
        },
        {
            icon: <FaChartLine className="text-4xl text-green-600" />,
            title: "Sales Strategy and Execution",
            desc: "We create and implement customized sales strategies to increase revenue and market share.",
            link: "/solutions/sales-strategy",
            hoverColor: "hover:bg-red-100",
        },
        {
            icon: <FaBullhorn className="text-4xl text-purple-600" />,
            title: "Targeted Advertising Campaigns",
            desc: "We craft impactful ad campaigns to maximize ROI, focusing on platforms and demographics that deliver results.",
            link: "/solutions/advertising",
            hoverColor: "hover:bg-yellow-100",
        },
        {
            icon: <FaUsers className="text-4xl text-yellow-600" />,
            title: "Staff Training in Sales & Marketing",
            desc: "Our training programs improve team performance with essential skills like communication, negotiation, and lead generation.",
            link: "/solutions/staff-training",
            hoverColor: "hover:bg-green-100",
        },
        {
            icon: <FaLightbulb className="text-4xl text-red-600" />,
            title: "Marketing and Brand Strategy",
            desc: "We curate marketing and branding strategies that showcase your business's unique values and build lasting loyalty.",
            link: "/solutions/marketing-branding",
            hoverColor: "hover:bg-purple-100",
        },
        {
            icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
            title: "Business Development Programs",
            desc: "Comprehensive programs to foster growth, innovation, and long-term success in your industry.",
            link: "/solutions/business-development",
            hoverColor: "hover:bg-blue-100",
        },
    ];

    return (
        <div>
            <OurExpertise />
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
                                Other Services
                            </h2>
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
                                            <p className="mt-3 text-gray-600">{item.desc}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
};

export default Features;
