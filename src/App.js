"use client";

import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact", "Resume"];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // Close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* Responsive Navigation */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          padding: isMobile ? "12px 16px" : "12px 20px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: isMobile ? "none" : "1200px",
            margin: isMobile ? "0" : "0 auto",
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

          {/* Navigation */}
          <nav style={{ position: "relative" }}>
            <ul
              style={{
                display: menuOpen || !isMobile ? "flex" : "none",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "10px" : "clamp(15px, 2vw, 25px)",
                listStyle: "none",
                margin: 0,
                padding: isMobile ? "15px" : 0,
                position: isMobile ? "absolute" : "static",
                top: isMobile ? "50px" : "unset",
                right: isMobile ? "10px" : "unset0",
                backgroundColor: isMobile ? "#ffffff" : "transparent",
                boxShadow: isMobile ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
                borderRadius: isMobile ? "12px" : "0",
                zIndex: 999,
                width: isMobile ? "200px" : "auto",
                minWidth: isMobile ? "180px" : "auto",
                transition: "all 0.3s ease",
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
                      padding: isMobile ? "10px 12px" : "8px 0",
                      transition: "all 0.3s ease",
                      display: "block",
                      borderRadius: isMobile ? "6px" : "0",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#3b82f6";
                      if (isMobile) {
                        e.target.style.backgroundColor = "#f1f5f9";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#64748b";
                      if (isMobile) {
                        e.target.style.backgroundColor = "transparent";
                      }
                    }}
                    onClick={() => isMobile && setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu */}
          {isMobile && (
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#3b82f6",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "8px",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                zIndex: 1000,
              }}
              onClick={toggleMenu}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f1f5f9";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
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
  );
};

export default App;