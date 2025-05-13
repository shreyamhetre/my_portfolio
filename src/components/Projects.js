// import React from 'react';
// import { Typography, Box } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Ai-Research-Assistant',
//       description: 'A personal portfolio website built with React and Material UI to showcase my projects and skills.',
//       githubLink: 'https://github.com/shreyamhetre/Ai-research-Assistant',
//     },
//     {
//       title: 'E-commerce ',
//       description: 'A full-stack e-commerce application with user authentication, product listings, and payment integration.',
//       githubLink: 'https://github.com/varadbhogayata/ecommerce-platform',
//     },
//     {
//       title: 'Task Manager',
//       description: 'A task management app with features like task creation, categorization, and deadline tracking.',
//       githubLink: 'https://github.com/varadbhogayata/task-manager',
//     },
//     {
//       title: 'Weather App',
//       description: 'A weather forecasting app that provides real-time weather updates using a public API.',
//       githubLink: 'https://github.com/varadbhogayata/weather-app',
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       style={{
//         padding: '100px 20px',
//         maxWidth: 1200,
//         margin: '0 auto',
//         backgroundColor: '#0a192f',
//         color: '#ccd6f6',
//         fontFamily: 'Poppins, sans-serif',
//       }}
//     >
//       <Typography
//         variant="h4"
//         style={{
//           color: '#64ffda',
//           fontWeight: 400,
//           marginBottom: 40,
//           textAlign: 'center',
//         }}
//       >
//         Some Things I've Built
//       </Typography>
//       <Box
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 20,
//           flexWrap: 'wrap',
//           justifyContent: 'center',
          
//         }}
//       >
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             className="card"
//             sx={{
//               width: 250,
//               height: 120,
//               transition: 'all 0.5s',
//               boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.2), -15px -15px 30px rgba(60, 60, 60, 0.1)',
//               textAlign: 'center',
//               overflow: 'hidden',
//               borderRadius: '5px',
//               backgroundColor: '#112240',
//               cursor: 'pointer',
//               border: '0.5px solid white',
//               '&:hover': {
//                 height: 260,
//                 background: 'linear-gradient(360deg, #112240 60%, #0a192f 70%)',
//               },
//               '&:hover .header': {
//                 clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 96%)',
//               },
//             }}
//           >
//             <Box
//               className="header"
//               sx={{
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: '#0a192f',
//                 marginBottom: '16px',
//                 transition: 'all 0.5s',

//                 border: '1px solid white'
//               }}
//             >
//               <Box
//                 className="img-box"
//                 sx={{
//                   width: '50px',
//                   height: '50px',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',

//                 }}
//               >
//                 {/* Icon placeholder - You can replace with project-specific icons */}
//                 <svg width="40" height="40" viewBox="0 0 24 24">
//                   <path
//                     fill="none"
//                     d="M0 0h24v24H0z"
//                   />
//                   <path
//                     d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
//                     fill="#64ffda"
//                   />
//                 </svg>
//               </Box>
//               <Typography
//                 className="title"
//                 sx={{
//                   fontSize: '10px',
//                   letterSpacing: '0.1em',
//                   fontWeight: 700,
//                   textTransform: 'uppercase',
//                   padding: '4px 0 14px 0',
//                   transition: 'all 0.5s',
//                   color: '#64ffda',

//                 }}
//               >
//                 {project.title}
//               </Typography>
//             </Box>
//             <Box
//               className="content"
//               sx={{
//                 display: 'block',
//                 textAlign: 'left',
//                 color: '#ccd6f6',
//                 margin: '0 18px',
//                 position: 'relative',
//                 height: '120px',
//               }}
//             >
//               <Typography
//                 sx={{
//                   transition: 'all 0.5s',
//                   fontSize: '0.8em',
//                   marginBottom: '8px',
//                   lineHeight: 1.6,
//                 }}
//               >
//                 {project.description}
//               </Typography>
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: '20px',
//                   right: '5px',

//                 }}
//               >
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     color: '#64ffda',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px',
//                   }}
//                   className="btn-link"
//                   sx={{
//                     '&:hover': {
//                       transform: 'scale(1.1)',
//                     },
//                   }}
//                 >
//                   <GitHubIcon style={{ fontSize: 24 }} />
//                 </a>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </section>
//   );
// };

// export default Projects;


"use client"

const Projects = () => {
  const projects = [
    {
      title: "AI Research Assistant",
      description:
        "A tool that helps researchers find, organize, and analyze academic papers using natural language processing and machine learning.",
      githubLink: "https://github.com/shreyamhetre/Ai-research-Assistant",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product listings, and payment integration.",
      githubLink: "https://github.com/varadbhogayata/ecommerce-platform",
    },
    {
      title: "Task Manager",
      description: "A task management app with features like task creation, categorization, and deadline tracking.",
      githubLink: "https://github.com/varadbhogayata/task-manager",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that provides real-time weather updates using a public API.",
      githubLink: "https://github.com/varadbhogayata/weather-app",
    },
  ]

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        maxWidth: 1200,
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#333333",
          fontWeight: 600,
          marginBottom: 40,
          fontSize: "2.5rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        Some Things I've Built
        <div
          style={{
            content: '""',
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            backgroundColor: "#800080",
            borderRadius: "2px",
          }}
        ></div>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              border: "1px solid #f0f0f0",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-10px)"
              e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)"
            }}
          >
            <div
              style={{
                height: "160px",
                backgroundColor: "#800080",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "60px",
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
                </svg>
              </div>
            </div>

            <div
              style={{
                padding: "25px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#333333",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#666666",
                  lineHeight: "1.6",
                  fontSize: "15px",
                  flex: 1,
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#800080",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff5252"
                    e.target.style.gap = "12px"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#800080"
                    e.target.style.gap = "8px"
                  }}
                >
                  View on GitHub
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

                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,107,107,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#800080",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255,107,107,0.2)"
                    e.target.style.transform = "scale(1.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255,107,107,0.1)"
                    e.target.style.transform = "scale(1)"
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
