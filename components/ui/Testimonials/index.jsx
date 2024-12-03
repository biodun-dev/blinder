import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Chidi Nwosu",
            title: "Freight Logistics Manager",
            quote: "AOR Global helped us optimize our freight operations, reducing transit times and ensuring seamless cargo movement. Their expertise has been invaluable in meeting tight deadlines."
        },
        {
            name: "Kemi Adeyemi",
            title: "Customs Clearance Specialist",
            quote: "Thanks to AOR Global, our freight logistics processes are now more efficient than ever. Their team provided tailored solutions that simplified complex shipments and saved costs."
        },
        {
            name: "Bisi Onyekachi",
            title: "Supply Chain Coordinator",
            quote: "AOR Global provided strategic freight solutions that transformed our supply chain. We’ve significantly minimized delays and achieved consistent operational success."
        },
        {
            name: "Aisha Suleiman",
            title: "Freight Forwarding Specialist",
            quote: "AOR Global’s logistics expertise has been a game changer for us. Their ability to streamline freight processes and ensure compliance has made our operations worry-free."
        },
        {
            name: "Tunde Owolabi",
            title: "Logistics and Transportation Manager",
            quote: "AOR Global’s innovative freight logistics strategies have allowed us to handle complex routes with ease. Their commitment to excellence is unmatched."
        },
        {
            name: "Ngozi Okafor",
            title: "E-Commerce Logistics Lead",
            quote: "AOR Global optimized our freight logistics framework, ensuring reliable last-mile deliveries and improving our overall efficiency. Their impact has been phenomenal."
        },
    ];

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See What Our Clients Are Saying
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Discover how AOR Global has empowered businesses with tailored freight logistics solutions that drive results.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <li key={idx} className="bg-white border p-4 rounded-xl">
                                <figure>
                                    <div className="flex items-center gap-x-4">
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
    