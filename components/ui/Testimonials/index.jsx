import SectionWrapper from "../../SectionWrapper"
const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Chidi Nwosu",
            title: "Logistics Manager at TransitPro",
            quote: "AOR Global revolutionized my business operations with tailored strategies and expert logistics solutions. We’ve streamlined processes and seized new growth opportunities like never before."
        },
        {
            avatar: "https://images.unsplash.com/photo-1558435607-cbdbea18350b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Kemi Adeyemi",
            title: "Marketing Strategist",
            quote: "Thanks to AOR Global, we optimized our logistics and marketing strategies, achieving measurable results. Our operations are now seamless, and our sales have seen a substantial increase."
        },
        {
            avatar: "https://images.unsplash.com/photo-1563122870-6bfeb71ddf31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Bisi Onyekachi",
            title: "Operations Consultant",
            quote: "Working with AOR Global was a game changer. Their data-driven insights and logistics expertise allowed us to streamline operations and achieve sustainable success."
        },
        {
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Aisha Suleiman",
            title: "Supply Chain Specialist",
            quote: "AOR Global helped us build a solid logistics framework and marketing strategies that not only saved us time but also uncovered new opportunities for growth."
        },
        {
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Tunde Owolabi",
            title: "Business Development Lead at InnovateNaija",
            quote: "In a challenging business environment, AOR Global provided the expertise we needed to optimize our logistics and marketing. The results have been phenomenal, even in tough times."
        },
        {
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Ngozi Okafor",
            title: "E-Commerce Operations Manager",
            quote: "We were struggling with inefficient logistics and marketing. AOR Global’s tailored solutions transformed our business, helping us scale and achieve long-term success."
        }
    ];

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See What Others Are Saying About Us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Discover how we’ve helped businesses streamline operations, embrace growth, and achieve measurable success.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <li key={idx} className="bg-white border p-4 rounded-xl">
                                <figure>
                                    <div className="flex items-center gap-x-4">
                                        <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                        <div>
                                            <span className="block text-gray-800 font-semibold">{item.name}</span>
                                            <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="mt-6 text-gray-700">
                                            {item.quote}
                                        </p>
                                    </blockquote>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
