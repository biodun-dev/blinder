import SectionWrapper from "../../SectionWrapper";

const Features = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 6l3 14a2 2 0 002 2h8a2 2 0 002-2l3-14M5.5 10h13" />
                </svg>
            ),
            title: "Logistics",
            desc: "Streamlining supply chain processes with reliable and efficient logistics solutions tailored to your business needs.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
            ),
            title: "Marketing & Brand Strategy",
            desc: "Crafting tailored marketing and branding strategies that resonate with your audience and boost engagement.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m7.5-9h-15a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0018 6.75z" />
                </svg>
            ),
            title: "Targeted Advertising Campaigns",
            desc: "Executing focused ad campaigns designed to maximize ROI and expand your reach effectively.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75L12 12m0 0l3.75 3.75M12 12V3" />
                </svg>
            ),
            title: "Sales Strategy & Execution",
            desc: "Developing and implementing sales strategies that drive measurable results and improve customer acquisition.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5zM2.25 9.75a7.5 7.5 0 0115 0v4.5a7.5 7.5 0 01-15 0v-4.5z" />
                </svg>
            ),
            title: "Data-Driven Market Research",
            desc: "Providing actionable insights through comprehensive market analysis and performance tracking.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5V6.75a3.75 3.75 0 10-7.5 0v3.75m-2.25 6.75h12.75a1.125 1.125 0 001.125-1.125v-4.5A1.125 1.125 0 0018.75 10.5H5.25a1.125 1.125 0 00-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            ),
            title: "Staff Training in Sales & Marketing",
            desc: "Equipping your team with essential skills and knowledge to excel in sales and marketing.",
        },
    ];

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Our Expertise</h2>
                <p className="text-center text-gray-800">
                    Driving growth through innovative solutions and tailored strategies.
                </p>
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    {features.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3 transform transition duration-300 ease-out hover:scale-105"
                            style={{
                                animation: `rise 0.4s ease-in-out ${(idx * 0.3) + 0.2}s forwards`,
                                opacity: 0,
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
            <style jsx>{`
                @keyframes rise {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </SectionWrapper>
    );
};

export default Features;
