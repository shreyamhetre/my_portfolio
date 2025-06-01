"use client"

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        padding: "clamp(40px, 8vw, 80px) 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#1e293b",
          fontWeight: 700,
          marginBottom: "clamp(30px, 5vw, 50px)",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          position: "relative",
        }}
      >
        Resume
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
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "clamp(30px, 5vw, 50px)",
          maxWidth: "600px",
          margin: "clamp(40px, 6vw, 60px) auto 0",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-10px)"
          e.target.style.boxShadow = "0 25px 50px rgba(0,0,0,0.12)"
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)"
          e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.08)"
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)",
            zIndex: 0,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 25px",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>

          <h3
            style={{
              color: "#1e293b",
              fontWeight: 700,
              marginBottom: "20px",
              fontSize: "clamp(20px, 3vw, 24px)",
            }}
          >
            My Resume
          </h3>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: "25px",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            A comprehensive overview of my skills, experience, and projects. Download my resume to learn more about my
            journey in web development and how I can contribute to your team's success.
          </p>

          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              color: "white",
              borderRadius: "12px",
              padding: "16px 35px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "clamp(14px, 2vw, 16px)",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px) scale(1.05)"
              e.target.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)"
              e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.3)"
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume