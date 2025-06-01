"use client"

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(20px, 5vw, 40px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "clamp(150px, 20vw, 200px)",
          height: "clamp(150px, 20vw, 200px)",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          animation: "float 6s ease-in-out infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "clamp(100px, 15vw, 150px)",
          height: "clamp(100px, 15vw, 150px)",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      ></div>

      <div style={{ maxWidth: "800px", zIndex: 2, padding: "0 15px" }}>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500,
            marginBottom: "15px",
            fontSize: "clamp(14px, 2vw, 16px)",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Hi, my name is
        </p>
        <h1
          style={{
            fontWeight: 800,
            marginBottom: "15px",
            fontSize: "clamp(2rem, 8vw, 4rem)",
            lineHeight: 1.1,
            animation: "fadeInUp 1s ease-out 0.2s both",
          }}
        >
          Shreya Mhetre
        </h1>
        <h2
          style={{
            fontWeight: 600,
            marginBottom: "25px",
            fontSize: "clamp(1.2rem, 5vw, 2.5rem)",
            lineHeight: 1.2,
            color: "rgba(255,255,255,0.8)",
            animation: "fadeInUp 1s ease-out 0.4s both",
          }}
        >
          I build things for the web.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: "600px",
            margin: "0 auto 35px",
            lineHeight: 1.6,
            fontSize: "clamp(14px, 3vw, 18px)",
            animation: "fadeInUp 1s ease-out 0.6s both",
          }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products that make a difference.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            color: "white",
            textDecoration: "none",
            padding: "clamp(12px, 2vw, 15px) clamp(25px, 4vw, 35px)",
            borderRadius: "50px",
            fontWeight: 600,
            fontSize: "clamp(14px, 2vw, 16px)",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            animation: "fadeInUp 1s ease-out 0.8s both",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)"
            e.target.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.4)"
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)"
            e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.3)"
          }}
        >
          Get In Touch
        </a>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  )
}

export default Home