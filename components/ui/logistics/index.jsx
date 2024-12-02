import { useState, useEffect } from "react";

const OurExpertise = () => {
  const images = [
    "/image2.jpg",
    "/image7.jpg",
    "/image1.jpg",
    "/image4.jpg",
    "/image3.jpg",
    "/image6.jpg",
    "/image5.jpg",
    "/image8.jpg",
    
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

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-transparent flex items-center justify-start">
        <div className="text-white px-8 py-4 max-w-3xl ml-8 font-poppins">
          <h2 className="text-[2.5rem] font-bold mb-6">Our Expertise</h2>
          <p className="text-[1.14rem] leading-relaxed">
            Our logistics solutions deliver unparalleled expertise in air and
            sea freight. From time-sensitive air cargo to cost-efficient
            maritime shipping, we ensure seamless global connectivity with
            precision and reliability. Empower your business with logistics that
            drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
