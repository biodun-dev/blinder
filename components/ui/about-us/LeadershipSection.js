"use client";

import { useEffect, useState, useRef } from "react";

const LeadershipSection = ({ leaders }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ backgroundColor: "#f9fafb", padding: "4rem 0" }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1f2937",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-in, transform 1s ease-in",
          }}
        >
          Our Leadership
        </h2>
        <p
          style={{
            marginTop: "1rem",
            color: "#6b7280",
            lineHeight: "1.75",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-in 200ms, transform 1s ease-in 200ms",
          }}
        >
          Meet the visionaries and dedicated professionals who lead AOR Global
          towards excellence.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          {leaders.map((leader, index) => (
            <div
              key={index}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 1s ease-in ${index * 200}ms, transform 1s ease-in ${index * 200}ms`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "39rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  backgroundColor: "#f9fafb", 
                }}
              >
                <img
                  src={leader.image}
                  alt={`${leader.name}'s photo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensures images fill the container proportionally
                  }}
                />
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                  }}
                >
                  {leader.name}
                </h3>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#6b7280",
                  }}
                >
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
