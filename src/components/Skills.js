"use client";

import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillsData = {
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
    ],
  };

  const activeItems = skillsData[activeTab];

  return (
    <section
      id="skills"
      style={{
        padding: "clamp(40px, 8vw, 80px) 20px",
        maxWidth: "1200px",
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
        Skills & Tools
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
          gap: window.innerWidth > 768 ? "clamp(40px, 6vw, 80px)" : "clamp(20px, 4vw, 40px)",
          alignItems: "flex-start",
          marginTop: "clamp(40px, 6vw, 60px)",
        }}
      >
        <div>
          <h3
            style={{
              color: "#1e293b",
              fontWeight: 700,
              marginBottom: "20px",
              fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
              lineHeight: 1.3,
            }}
          >
            What My Programming Skills Include?
          </h3>
          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: "35px",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            I develop simple, intuitive and responsive user interfaces that help users get things done with less effort
            and time using modern technologies and best practices.
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setActiveTab("skills")}
              style={{
                backgroundColor: activeTab === "skills" ? "#3b82f6" : "white",
                color: activeTab === "skills" ? "white" : "#64748b",
                border: activeTab === "skills" ? "none" : "2px solid #e2e8f0",
                borderRadius: "50px",
                padding: "12px 30px",
                fontWeight: 600,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  activeTab === "skills" ? "0 4px 15px rgba(59, 130, 246, 0.3)" : "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              style={{
                backgroundColor: activeTab === "tools" ? "#3b82f6" : "white",
                color: activeTab === "tools" ? "white" : "#64748b",
                border: activeTab === "tools" ? "none" : "2px solid #e2e8f0",
                borderRadius: "50px",
                padding: "12px 30px",
                fontWeight: 600,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === "tools" ? "0 4px 15px rgba(59, 130, 246, 0.3)" : "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              Tools
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: "clamp(15px, 2vw, 20px)",
            width: "100%",
          }}
        >
          {activeItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "clamp(15px, 3vw, 25px) clamp(10px, 2vw, 20px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #e2e8f0",
                minHeight: "100px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-10px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
                e.target.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
                e.target.style.borderColor = "#e2e8f0";
              }}
            >
              <img
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                style={{
                  width: "clamp(35px, 5vw, 45px)",
                  height: "clamp(35px, 5vw, 45px)",
                  marginBottom: "12px",
                  transition: "transform 0.3s ease",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <p
                style={{
                  color: "#334155",
                  fontSize: "clamp(11px, 1.5vw, 13px)",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;