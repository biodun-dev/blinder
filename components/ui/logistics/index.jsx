import { useState, useEffect } from "react";
import Link from "next/link";

const OurExpertise = () => {
  const images = [
    "/image2.jpg",
    "/image10.jpg",
    "/image1.jpg",
    "/image11.jpg",
    "/image3.jpg",
    "/image12.jpg",
    "/image5.jpg",
    "/image4.jpg",
  ];

  const services = [
    {
      title: "Air Freight",
      description:
        "At AOR Global, we turn your logistical challenges into seamless solutions, ensuring a secure and timely delivery of goods across local and international destinations. Prioritizing affordability, safety, and delivering an exceptional customer experience, ensuring your significant freight needs are met with the utmost care and professionalism.",
    },
    {
      title: "Sea Freight",
      description:
        "Sea freight offers cost-effective solutions for bulk and international shipping needs. We ensure seamless global connectivity with precision and reliability. Empower your business with logistics that drive success.",
    },
    {
      title: "Custom Brokerage",
      description:
        "Seamless customs clearance services simplify international trade, ensuring compliance and hassle-free transactions. Trust us to handle your documentation and regulatory requirements with expertise.",
    },
    {
      title: "Warehousing and Distribution",
      description:
        "Our warehousing and distribution services offer seamless storage and delivery solutions to keep your supply chain running smoothly. With state-of-the-art facilities, your goods are in safe hands.",
    },
    {
      title: "Integrated Logistics",
      description:
        "Integrated logistics solutions that simplify your supply chain management, enabling efficiency and cost optimization at every stage of your operations.",
    },
    {
      title: "Technology-Driven Logistics",
      description:
        "We leverage cutting-edge technologies to provide smarter, more efficient logistics solutions tailored to meet your unique business needs.",
    },
    {
      title: "Tailored Supply Chains",
      description:
        "Customizable supply chain solutions designed to suit your specific business goals, ensuring smooth operations and scalability.",
    },
    {
      title: "Global Connectivity",
      description:
        "Empower your business with global connectivity, enabling seamless trade and transportation to all corners of the world.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTranslateX(
        (prevTranslateX) => (prevTranslateX - 100) % (images.length * 100)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{
          transform: `translateX(${translateX}%)`,
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-start">
  <div className="text-white px-8 py-4 max-w-3xl ml-8 font-poppins">
    <h2 className="text-[2.5rem] font-bold mb-6">
      {services[currentImageIndex].title}
    </h2>
    <p className="text-[1.14rem] leading-relaxed mb-6">
      {services[currentImageIndex].description}
    </p>
    <Link
  href="/get-started"
  className="inline-block w-auto font-medium text-sm text-white bg-blue-600 hover:bg-black px-5 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg no-underline"
>
  Contact Us
</Link>
  </div>
</div>
    </div>
  );
};

export default OurExpertise;
