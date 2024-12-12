"use client";

import AboutHero from "../components/ui/about-us/AboutHero";
import OurStrategies from "../components/ui/about-us/OurStrategies";
import LeadershipSection from "../components/ui/about-us/LeadershipSection";
import CTA from "../components/ui/CTA";

const AboutUs = () => {
  const leaders = [
    {
      name: "Ridwan Oladayo",
      role: "Head Of Operations",
      image: "/operations.jpeg", 
    },
    {
      name: "Abdulquadri Abisola",
      role: "Team Lead",
      image: "/teamlead.jpeg",
    },
    {
      name: "Aderounmu Lateef",
      role: "IT Officer",
      image: "/IT.jpeg", 
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      {/* <AboutHero />
      <OurStrategies />
      <LeadershipSection leaders={leaders} /> */}

      {/* <div className="pb-16">
        <CTA />
      </div> */}
    </div>
  );
};

export default AboutUs;
