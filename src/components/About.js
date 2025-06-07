"use client";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(40px, 8vw, 80px) 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
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
        About Me
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
          display: "grid",
          gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
          gap: "clamp(30px, 5vw, 50px)",
          alignItems: "center",
          marginTop: "clamp(40px, 6vw, 60px)",
        }}
      >
        <div>
          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
              marginBottom: "25px",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            I’m a Software Engineer with 1.5 years of experience at Equations Work, where I’ve built AI-powered platforms, sustainable tech solutions, and AR/VR-enabled tools. My expertise spans full-stack development with Python, React, and Node.js, complemented by a strong foundation in AI/ML frameworks like TensorFlow, PyTorch, and LangChain, as well as cloud-based systems using Docker and Jenkins.
          </p>
          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
              marginBottom: "25px",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            As an incoming Master’s student in Computer Science at Arizona State University, I’m passionate about leveraging technology to create intelligent, impactful applications. I’m actively seeking Summer 2026 internships and part-time roles to deepen my expertise in AI/ML and advanced tech domains, and I’m open to networking and collaboration opportunities to drive innovation.
          </p>
        </div>

        <div>
          <h3 style={{ color: "#334155", marginBottom: "20px", fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600 }}>
            Technologies I Work With
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
              marginBottom: "35px",
            }}
          >
            {[
              "Python",
              "React",
              "Node.js",
              "TypeScript",
              "TensorFlow",
              "PostgreSQL",
              "Docker",
              "FastAPI"
            ].map((tech, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#64748b",
                  fontSize: "clamp(13px, 2vw, 15px)",
                }}
              >
                <span
                  style={{
                    color: "#3b82f6",
                    marginRight: "12px",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontWeight: "bold",
                  }}
                >
                  ▸
                </span>
                {tech}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="#resume"
              style={{
                display: "inline-block",
                padding: "12px 25px",
                border: "2px solid #3b82f6",
                color: "#3b82f6",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3b82f6";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#3b82f6";
              }}
            >
              View Resume
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "12px 25px",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;