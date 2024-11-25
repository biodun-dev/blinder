import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ctaImage from "../../../public/cta-image.jpg";
import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const CTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
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

    return (
        <SectionWrapper id="cta" className="pb-0">
            <div ref={sectionRef} className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div
                        className={`flex-1 sm:hidden lg:block transform transition-all duration-1000 ${
                            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
                        }`}
                    >
                        <Image
                            src={ctaImage}
                            className="rounded-lg md:max-w-lg"
                            alt="Empowering Businesses with Strategic Insights"
                        />
                    </div>
                    <div
                        className={`max-w-xl mt-6 md:mt-0 lg:max-w-2xl transform transition-all duration-1000 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Empower Your Business with AOR Global
                        </h2>
                        <p className="mt-3 text-gray-600">
                            In partnership with AOR Global, businesses unlock growth potential through strategic insights, innovative solutions, and measurable results, ensuring success in today’s competitive landscape.
                        </p>
                        <ul className="mt-4 list-disc list-inside text-gray-600">
                            <li>Marketing & Brand Strategy</li>
                            <li>Targeted Advertising Campaigns</li>
                            <li>Sales Strategy & Execution</li>
                            <li>Data-Driven Market Research</li>
                            <li>Staff Training in Sales & Marketing</li>
                        </ul>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-6 font-medium text-sm text-blue-800 bg-white border border-blue-800 hover:bg-blue-800 hover:text-white px-5 py-3 rounded-lg transition duration-150"
                        >
                            Get Started
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA;
