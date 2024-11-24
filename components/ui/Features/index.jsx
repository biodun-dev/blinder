import SectionWrapper from "../../SectionWrapper";

const Features = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            ),
            title: "Marketing & Brand Strategy",
            desc: "Crafting tailored marketing and branding strategies that resonate with your audience and boost engagement."
        },
        {
            icon: (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25L14.25 12 9.75 6.75" />
                </svg>
            ),
            title: "Targeted Advertising Campaigns",
            desc: "Executing focused ad campaigns designed to maximize ROI and expand your reach effectively."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
            title: "Sales Strategy & Execution",
            desc: "Developing and implementing sales strategies that drive measurable results and improve customer acquisition."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5v3m6-4.5h9m-9 6h6" />
                </svg>
            ),
            title: "Data-Driven Market Research",
            desc: "Providing actionable insights through comprehensive market analysis and performance tracking."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            ),
            title: "Staff Training in Sales & Marketing",
            desc: "Equipping your team with essential skills and knowledge to excel in sales and marketing."
        },
    ];

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-4">Our Expertise</h2>
                <p className="text-center text-gray-700">
                    Driving growth through innovative solutions and tailored strategies.
                </p>
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    {features.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3"
                        >
                            <div className="w-12 h-12 border text-blue-800 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-blue-800 font-semibold">{item.title}</h4>
                            <p className="text-gray-700">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Features;
