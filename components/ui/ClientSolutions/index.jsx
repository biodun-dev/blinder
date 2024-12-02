import { useEffect, useState, useRef } from "react";
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
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
            ),
            title: "Retail Businesses",
            desc: "Boost sales and customer engagement with targeted, data-driven marketing strategies.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m7.5-9h-15a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0018 6.75z" />
                </svg>
            ),
            title: "Logistics Companies",
            desc: "Streamline delivery operations and reduce costs with advanced logistics frameworks.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75L12 12m0 0l3.75 3.75M12 12V3" />
                </svg>
            ),
            title: "Tech Startups",
            desc: "Accelerate growth with tailored strategies to break into competitive markets.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5zM2.25 9.75a7.5 7.5 0 0115 0v4.5a7.5 7.5 0 01-15 0v-4.5z" />
                </svg>
            ),
            title: "Educational Platforms",
            desc: "Increase enrollments and engagement with customized learning campaigns.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5V6.75a3.75 3.75 0 10-7.5 0v3.75m-2.25 6.75h12.75a1.125 1.125 0 001.125-1.125v-4.5A1.125 1.125 0 0018.75 10.5H5.25a1.125 1.125 0 00-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            ),
            title: "Healthcare Providers",
            desc: "Enhance patient outreach and trust with personalized healthcare solutions.",
        },
    ];

    return (
        <>

            <SectionWrapper>
                <div
                    ref={sectionRef}
                    id="features"
                    className="custom-screen text-gray-600"
                >


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


                    <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className={`space-y-3 transform transition duration-700 ease-in-out ${
                                    isVisible
                                        ? "opacity-100 translate-y-0 blur-none"
                                        : "opacity-0 translate-y-10 blur-md"
                                }`}
                                style={{
                                    transitionDelay: `${idx * 0.3}s`,
                                }}
                            >
                                <div className="w-12 h-12 border text-gray-800 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold hover:text-[#FF0000]">
                                    {item.title}
                                </h4>
                                <p className="text-gray-800">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </SectionWrapper>
        </>
    );
};

export default ClientSolutions;
