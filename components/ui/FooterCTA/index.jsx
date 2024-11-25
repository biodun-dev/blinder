import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Partner with AOR Global
                </h2>
                <p className="mt-3 text-gray-600">
                Transform your business with tailored strategies, expert logistics solutions, and data-driven insights. Together, we’ll streamline operations, seize new opportunities, and achieve lasting success.

                </p>
                <NavLink
                    href="/contact-us"
                    className="mt-4 inline-block font-medium text-sm text-white bg-red-600 hover:bg-red-500 active:bg-red-700 px-5 py-3 rounded-lg"
                >
                    Get in Touch
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
);

export default FooterCTA;
