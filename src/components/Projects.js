// "use client";

// import { useState, useEffect } from "react";

// const Projects = () => {
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const projects = [
//     {
//       title: "AI Research Assistant",
//       description:
//         "An AI-powered research assistant built with Agentic RAG architecture, enabling autonomous agents to handle document parsing, retrieval, and academic query resolution. Features include multi-turn Q&A, smart summarization, MCQ generation, and semantic search.",
//       githubLink: "https://github.com/shreyamhetre/Ai-research-Assistant",
//       technologies: ["Python", "React.js", "LangChain", "Gemini API", "pgvector", "Docker", "CrewAI"],
//     },
//     {
//       title: "SmartCue",
//       description:
//         "A task management system integrating GitHub issues, Calendar, and an AI assistant. Built with FastAPI, PostgreSQL, and React.js, it offers AI-driven task creation, real-time GitHub synchronization, and a custom meeting calendar with dynamic event styling.",
//       githubLink: "https://github.com/shreyamhetre/SmartCue",
//       technologies: ["Python", "React.js", "FastAPI", "PostgreSQL", "Gemini API", "Material UI"],
//     },
//     {
//       title: "E-commerce Platform",
//       description: "Add your description here.",
//       githubLink: "https://github.com/varadbhogayata/ecommerce-platform",
//       technologies: ["React", "Express", "MongoDB", "Stripe"],
//     },
//     {
//       title: "Task Manager Pro",
//       description: "Add your description here.",
//       githubLink: "https://github.com/varadbhogayata/task-manager",
//       technologies: ["React", "Firebase", "Material-UI"],
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       style={{
//         padding: "clamp(40px, 8vw, 80px) 20px",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         backgroundColor: "#ffffff",
//       }}
//     >
//       <h2
//         style={{
//           color: "#1e293b",
//           fontWeight: 700,
//           marginBottom: "clamp(30px, 5vw, 50px)",
//           fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
//           textAlign: "center",
//           position: "relative",
//         }}
//       >
//         Some Things I've Built
//         <div
//           style={{
//             content: '""',
//             position: "absolute",
//             bottom: "-15px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "60px",
//             height: "4px",
//             background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
//             borderRadius: "2px",
//           }}
//         ></div>
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: windowWidth > 768 ? "repeat(4, 1fr)" : "1fr",
//           gap: "clamp(15px, 2vw, 30px)",
//           marginTop: "clamp(40px, 6vw, 60px)",
//         }}
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "white",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//               transition: "all 0.3s ease",
//               border: "1px solid #e2e8f0",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               maxWidth: windowWidth > 480 ? "unset" : "95vw",
//               margin: windowWidth > 480 ? "unset" : "0 auto",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-10px)";
//               e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
//             }}
//           >
//             <div
//               style={{
//                 height: "180px",
//                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                 position: "relative",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <svg
//                 width="80"
//                 height="80"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="rgba(255,255,255,0.3)"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
//               </svg>
//             </div>

//             <div
//               style={{
//                 padding: "clamp(20px, 3vw, 30px)",
//                 flex: 1,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: windowWidth > 480 ? "flex-start" : "center",
//                 textAlign: windowWidth > 480 ? "left" : "center",
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "clamp(16px, 2vw, 20px)",
//                   fontWeight: "700",
//                   marginBottom: "15px",
//                   color: "#1e293b",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 {project.title}
//               </h3>

//               <p
//                 style={{
//                   color: "#64748b",
//                   lineHeight: "1.6",
//                   fontSize: "clamp(13px, 1.5vw, 15px)",
//                   flex: 1,
//                   marginBottom: "20px",
//                   wordBreak: "break-word",
//                 }}
//               >
//                 {project.description}
//               </p>

//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "8px",
//                   marginBottom: "25px",
//                   justifyContent: windowWidth > 480 ? "flex-start" : "center",
//                 }}
//               >
//                 {project.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       backgroundColor: "#f1f5f9",
//                       color: "#475569",
//                       padding: "4px 12px",
//                       borderRadius: "20px",
//                       fontSize: "clamp(10px, 1.2vw, 12px)",
//                       fontWeight: "500",
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div style={{ display: "flex", gap: "12px", justifyContent: windowWidth > 480 ? "flex-start" : "center", width: "100%", marginTop: "auto" }}>
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     color: "#3b82f6",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     fontSize: "clamp(12px, 1.5vw, 14px)",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.color = "#1d4ed8";
//                     e.target.style.gap = "12px";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.color = "#3b82f6";
//                     e.target.style.gap = "8px";
//                   }}
//                 >
//                   View Code
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";

import { useState, useEffect } from "react";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: "AI Research Assistant",
      description:
        "An AI-powered research assistant built with Agentic RAG architecture, enabling autonomous agents to handle document parsing, retrieval, and academic query resolution. Features include multi-turn Q&A, smart summarization, MCQ generation, and semantic search.",
      githubLink: "https://github.com/shreyamhetre/Ai-research-Assistant",
      technologies: ["Python", "React.js", "LangChain", "Gemini API", "pgvector", "Docker", "CrewAI"],
    },
    {
      title: "SmartCue",
      description:
        "A task management system integrating GitHub issues, Calendar, and an AI assistant. Built with FastAPI, PostgreSQL, and React.js, it offers AI-driven task creation, real-time GitHub synchronization, and a custom meeting calendar with dynamic event styling.",
      githubLink: "https://github.com/shreyamhetre/SmartCue",
      technologies: ["Python", "React.js", "FastAPI", "PostgreSQL", "Gemini API", "Material UI"],
    },
    {
      title: "Cyber Security Project",
      description:
        "A collaborative cyber security project focused on developing tools and techniques to enhance system security. Worked with a team to implement secure authentication mechanisms and vulnerability scanning features, contributing to robust cybersecurity solutions.",
      githubLink: "https://github.com/AryaPatil-25/Cyber-Security-Project",
      technologies: ["Python", "Flask", "SQL", "OWASP ZAP", "Docker"],
    },
    {
      title: "Chatbot",
      description:
        "An intelligent chatbot designed to handle conversational tasks with natural language understanding. Built with modern NLP frameworks, it supports interactive dialogues, query resolution, and integration with various APIs for enhanced functionality.",
      githubLink: "https://github.com/shreyamhetre/chatbot",
      technologies: ["Python", "TensorFlow", "Flask", "NLTK", "REST APIs"],
    },
  ];

  return (
    <section
      id="projects"
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
        Some Things I've Built
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
          gridTemplateColumns: windowWidth > 768 ? "repeat(4, 1fr)" : "1fr",
          gap: "clamp(15px, 2vw, 30px)",
          marginTop: "clamp(40px, 6vw, 60px)",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #e2e8f0",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              maxWidth: windowWidth > 480 ? "unset" : "95vw",
              margin: windowWidth > 480 ? "unset" : "0 auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
            }}
          >
            <div
              style={{
                height: "180px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
              </svg>
            </div>

            <div
              style={{
                padding: "clamp(20px, 3vw, 30px)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: windowWidth > 480 ? "flex-start" : "center",
                textAlign: windowWidth > 480 ? "left" : "center",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "#1e293b",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.6",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  flex: 1,
                  marginBottom: "20px",
                  wordBreak: "break-word",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "25px",
                  justifyContent: windowWidth > 480 ? "flex-start" : "center",
                }}
              >
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "clamp(10px, 1.2vw, 12px)",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: windowWidth > 480 ? "flex-start" : "center", width: "100%", marginTop: "auto" }}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1d4ed8";
                    e.target.style.gap = "12px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#3b82f6";
                    e.target.style.gap = "8px";
                  }}
                >
                  View Code
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;