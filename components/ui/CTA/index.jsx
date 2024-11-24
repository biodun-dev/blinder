import Image from "next/image";
import ctaImage from "../../../public/cta-image.jpg";
import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image
                            src={ctaImage}
                            className="rounded-lg md:max-w-lg"
                            alt="Empowering Businesses with Strategic Insights"
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Empower Your Business with AOR Global 
                        </h2>
                        <p className="mt-3 text-gray-600">
                            In partnership with AOR Global , businesses unlock growth potential through strategic insights, innovative solutions, and measurable results, ensuring success in today’s competitive landscape.
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
