// import React, { useState } from 'react';
// import { Typography, Box, Button } from '@mui/material';

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState('skills');

//   const skillsData = {
//     skills: [
//       { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//       { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//       { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//       { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
//       { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//       { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//       { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
//       { name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
//     ],
//     tools: [
//       { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//       { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
//       { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
//       { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
//       { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
//     ],
//   };

//   const activeItems = skillsData[activeTab];

//   return (
//     <section
//       id="skills"
//       style={{
//         padding: '100px 20px',
//         maxWidth: 1200,
//         margin: '0 auto',
//         backgroundColor: '#0a192f',
//         color: '#ccd6f6',
//         fontFamily: 'Poppins, sans-serif',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: { xs: '40px', md: '80px' },
//           alignItems: { xs: 'center', md: 'flex-start' },
//         }}
//       >
//         {/* Left Side - Title and Description */}
//         <Box
//           sx={{
//             flex: '1',
//             maxWidth: { xs: '100%', md: '500px' },

//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               position: 'relative',

//             }}
//           >
//             <Box sx={{ ml: { xs: 0, md: 4 }, position: 'relative',  }}>
//               <Box
//                 sx={{
//                   width: '3px',
//                   height: '80px',
//                   backgroundColor: '#64ffda',
//                   position: 'absolute',
//                   left: '-20px',
//                   top: '10px',
//                   display: { xs: 'none', md: 'block' },
//                 }}
//               />
//               <Typography
//                 variant="h3"
//                 sx={{
//                   color: '#ccd6f6',
//                   fontWeight: 700,
//                   mb: 3,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 What My Programming Skills Included?
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: '#8892b0',
//                   lineHeight: 1.7,
//                   mb: 4,
//                   fontSize: '1rem',
//                 }}
//               >
//                 I develop simple, intuitive and responsive user interface that helps
//                 users get things done with less effort and time with those
//                 technologies.
//               </Typography>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   gap: '10px',
//                 }}
//               >
//                 <Button
//                   onClick={() => setActiveTab('skills')}
//                   sx={{
//                     backgroundColor: activeTab === 'skills' ? '#64ffda20' : 'transparent',
//                     color: activeTab === 'skills' ? '#64ffda' : '#8892b0',
//                     border: activeTab === 'skills' ? '1px solid #64ffda' : '1px solid #8892b0',
//                     borderRadius: '4px',
//                     padding: '10px 30px',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': {
//                       backgroundColor: '#64ffda10',
//                     },
//                   }}
//                 >
//                   Skills
//                 </Button>
//                 <Button
//                   onClick={() => setActiveTab('tools')}
//                   sx={{
//                     backgroundColor: activeTab === 'tools' ? '#64ffda20' : 'transparent',
//                     color: activeTab === 'tools' ? '#64ffda' : '#8892b0',
//                     border: activeTab === 'tools' ? '1px solid #64ffda' : '1px solid #8892b0',
//                     borderRadius: '4px',
//                     padding: '10px 30px',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': {
//                       backgroundColor: '#64ffda10',
//                     },
//                   }}
//                 >
//                   Tools
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right Side - Skill Icons */}
//         <Box
//           sx={{
//             flex: '1',
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
//             gap: '20px',
//             width: '100%',

//           }}
//         >
//           {activeItems.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 backgroundColor: '#112240',
//                 borderRadius: '10px',
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer',
//                 '&:hover': {
//                   transform: 'translateY(-10px)',
//                   boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//                   backgroundColor: '#1a2c4e',
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src={item.icon}
//                 alt={item.name}
//                 sx={{
//                   width: '40px',
//                   height: '40px',
//                   marginBottom: '10px',
//                   padding: '10px',
//                 }}
//               />
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: '#ccd6f6',
//                   fontSize: '0.8rem',
//                   fontWeight: 500,
//                   textAlign: 'center',
//                 }}
//               >
//                 {item.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </section>
//   );
// };

// export default Skills;

"use client"

import { useState } from "react"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills")

  const skillsData = {
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  }

  const activeItems = skillsData[activeTab]

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        maxWidth: 1200,
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
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
        Skills & Tools
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
          display: "flex",
          flexDirection: window.innerWidth > 768 ? "row" : "column",
          gap: window.innerWidth > 768 ? "80px" : "40px",
          alignItems: window.innerWidth > 768 ? "flex-start" : "center",
          marginTop: "60px",
        }}
      >
        {/* Left Side - Title and Description */}
        <div
          style={{
            flex: "1",
            maxWidth: window.innerWidth > 768 ? "500px" : "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <h3
                style={{
                  color: "#333333",
                  fontWeight: 700,
                  marginBottom: "20px",
                  fontSize: "28px",
                  lineHeight: 1.2,
                }}
              >
                What My Programming Skills Include?
              </h3>
              <p
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginBottom: "30px",
                  fontSize: "16px",
                }}
              >
                I develop simple, intuitive and responsive user interface that helps users get things done with less
                effort and time with those technologies.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <button
                  onClick={() => setActiveTab("skills")}
                  style={{
                    backgroundColor: activeTab === "skills" ? "#800080" : "white",
                    color: activeTab === "skills" ? "white" : "#666666",
                    border: activeTab === "skills" ? "none" : "1px solid #dddddd",
                    borderRadius: "30px",
                    padding: "10px 25px",
                    textTransform: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: activeTab === "skills" ? "0 4px 10px rgba(255,107,107,0.3)" : "none",
                  }}
                >
                  Skills
                </button>
                <button
                  onClick={() => setActiveTab("tools")}
                  style={{
                    backgroundColor: activeTab === "tools" ? "#800080" : "white",
                    color: activeTab === "tools" ? "white" : "#666666",
                    border: activeTab === "tools" ? "none" : "1px solid #dddddd",
                    borderRadius: "30px",
                    padding: "10px 25px",
                    textTransform: "none",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: activeTab === "tools" ? "0 4px 10px rgba(255,107,107,0.3)" : "none",
                  }}
                >
                  Tools
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Skill Icons */}
        <div
          style={{
            flex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {activeItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #f0f0f0",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-10px)"
                e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"
                e.target.style.backgroundColor = "#fff"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)"
                e.target.style.backgroundColor = "#fff"
              }}
            >
              <img
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              />
              <p
                style={{
                  color: "#444444",
                  fontSize: "14px",
                  fontWeight: 500,
                  textAlign: "center",
                  margin: 0,
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
