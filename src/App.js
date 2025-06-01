"use client"

import Home from "./components/Home"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

const App = () => {
  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact", "Resume"]

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#2c3e50",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        lineHeight: 1.6,
      }}
    >
      {/* Mobile-first Navigation */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          padding: "12px 20px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              color: "#3b82f6",
              margin: 0,
              fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shreya Mhetre
          </h1>

          {/* Mobile Navigation - Hidden on small screens, shown as hamburger */}
          <nav style={{ display: window.innerWidth > 768 ? "block" : "none" }}>
            <ul
              style={{
                display: "flex",
                gap: "clamp(15px, 2vw, 25px)",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "clamp(12px, 1.5vw, 14px)",
                      fontWeight: 500,
                      position: "relative",
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#3b82f6"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#64748b"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#3b82f6",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </header>

      <main style={{ marginTop: "70px" }}>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </main>

      <footer
        style={{
          padding: "30px 20px",
          textAlign: "center",
          color: "#64748b",
          backgroundColor: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)" }}>© 2025 Shreya Mhetre.</p>
      </footer>
    </div>
  )
}

export default App