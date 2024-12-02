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
                            className="rounded-lg object-cover"
                            alt="Why Choose Us"
                            style={{
                                height: "600px", // Increased height
                                width: "450px", // Adjusted width
                            }}
                        />
                    </div>
                    <div
                        className={`max-w-xl mt-6 md:mt-0 lg:max-w-2xl transform transition-all duration-1000 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="mt-3 text-gray-600">
                            At AOR Global, we pride ourselves on being more than just a service provider; we’re your trusted partner in success. Here’s why organizations choose us:
                        </p>
                        <ul className="mt-4 list-disc list-inside text-gray-600 space-y-3">
                            <li>
                                <strong>Expertise Across Multiple Sectors:</strong> From shipping and clearing to sales, marketing, and advertising, we offer a comprehensive range of professional services tailored to meet diverse needs.
                            </li>
                            <li>
                                <strong>Proven Results:</strong> Our innovative strategies and solutions are designed to deliver measurable outcomes, helping businesses achieve and exceed their goals, including yearly revenue targets.
                            </li>
                            <li>
                                <strong>Client-Centric Approach:</strong> We prioritize understanding your unique needs, ensuring every solution is customized to maximize your success.
                            </li>
                            <li>
                                <strong>Timely and Reliable Service:</strong> With a strong commitment to efficiency, we ensure your projects are executed on time, every time.
                            </li>
                            <li>
                                <strong>Innovative Solutions:</strong> Leveraging the latest trends and technology, we craft creative strategies that give your business a competitive edge.
                            </li>
                            <li>
                                <strong>Experienced Team:</strong> Our team of dedicated professionals brings years of industry experience and passion for excellence to every project.
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-600">
                            Partner with AOR Global and experience exceptional service that drives results and elevates your business to new heights.
                        </p>
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
