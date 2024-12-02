"use client";

import AboutHero from "../components/ui/about-us/AboutHero";
import OurStrategies from "../components/ui/about-us/OurStrategies";
import LeadershipSection from "../components/ui/about-us/LeadershipSection";
import CTA from "../components/ui/CTA";

const AboutUs = () => {
  const leaders = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/bezos.jpeg", // Replace with actual image paths
    },
    {
      name: "Jane Smith",
      role: "Chief Marketing Officer",
      image: "/bezos.jpeg",
    },
    {
      name: "Michael Lee",
      role: "Operations Manager",
      image: "/bezos.jpeg", 
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      <AboutHero />
      <OurStrategies />
      <LeadershipSection leaders={leaders} />

      <div className="pb-16">
        <CTA />
      </div>
    </div>
  );
};

export default AboutUs;
