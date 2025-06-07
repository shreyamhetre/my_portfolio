"use client";

import { useEffect, useRef } from "react";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer at Equations Work",
      period: "March 2024 - June 2025",
      description:
        "Worked as a Software Engineer, focusing on developing scalable web applications using modern technologies and best practices.",
    },
    {
      title: "Software Engineer at Equations Work",
      period: "June 2023 - March 2024",
      description:
        "Developed an image annotation tool within an ML platform, enabling users to upload images and download annotations in XML/TXT formats, increasing annotation efficiency by 30%",
    },
    {
      title: "Frontend Developer at S2R2 Technologies",
      period: "Jun 2023 - April 2023",
      description: "Specialized in creating responsive user interfaces and implementing modern frontend frameworks.",
    },
    {
      title: "Web Development Team Member at GDSC",
      period: "Aug 2022 - Jun 2023",
      description: "Collaborated with team members on various web development projects and community initiatives.",
    },
  ];

  const boxRefs = useRef([]);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      boxRefs.current.forEach((box, index) => {
        if (!box) return;

        const rect = box.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
          box.style.opacity = 1;
          box.style.transform = "translateX(0)";
        } else {
          box.style.opacity = 0;
          box.style.transform = index % 2 === 0 ? "translateX(-150px)" : "translateX(150px)";
        }
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      style={{
        padding: "clamp(40px, 8vw, 80px) 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#f8fafc",
      }}
    >
      <h2
        style={{
          color: "#1e293b",
          fontWeight: 700,
          marginBottom: "clamp(30px, 5vw, 50px)",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          textAlign: "center",
          position: "relative",
        }}
      >
        Where I've Worked
        <div
          style={{
            content: '""',
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            borderRadius: "2px",
          }}
        ></div>
      </h2>

      <div
        style={{
          position: "relative",
          padding: "0 clamp(10px, 2vw, 20px)",
          maxWidth: "800px",
          margin: "clamp(40px, 6vw, 60px) auto 0",
        }}
      >
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            background: "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)",
            transform: "translateX(-50%)",
            display: window.innerWidth > 768 ? "block" : "none",
          }}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "clamp(30px, 5vw, 50px)",
              flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? "row" : "row-reverse") : "column",
              opacity: 0,
              transform: index % 2 === 0 ? "translateX(-150px)" : "translateX(150px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <div
              style={{
                width: window.innerWidth > 768 ? "40%" : "100%",
                padding: "clamp(15px, 3vw, 25px)",
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                position: "relative",
                textAlign: window.innerWidth > 768 ? (index % 2 === 0 ? "right" : "left") : "left",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  color: "#1e293b",
                  fontWeight: 600,
                  marginBottom: "12px",
                  fontSize: "clamp(16px, 2vw, 18px)",
                  lineHeight: 1.3,
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  color: "#3b82f6",
                  marginBottom: "15px",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontWeight: 600,
                }}
              >
                {exp.period}
              </p>
              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.6,
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  margin: 0,
                }}
              >
                {exp.description}
              </p>

              {/* Arrow - only show on desktop */}
              {window.innerWidth > 768 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    [index % 2 === 0 ? "right" : "left"]: -12,
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    [index % 2 === 0 ? "borderLeft" : "borderRight"]: "12px solid white",
                    transform: "translateY(-50%)",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
              )}
            </div>

            {/* Circle Marker - only show on desktop */}
            {window.innerWidth > 768 && (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  boxShadow: "0 0 0 4px white, 0 0 0 8px rgba(59, 130, 246, 0.2)",
                }}
              />
            )}

            {window.innerWidth > 768 && <div style={{ width: "60%" }} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;