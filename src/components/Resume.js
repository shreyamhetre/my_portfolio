// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';

// const Resume = () => {
//   return (
//     <section
//       id="resume"
//       style={{
//         padding: '100px 20px',
//         maxWidth: 1200,
//         margin: '0 auto',
//         backgroundColor: '#0a192f',
//         color: '#ccd6f6',
//         fontFamily: 'Poppins, sans-serif',
//         textAlign: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: '#112240',
//           borderRadius: '10px',
//           padding: '40px',
//           maxWidth: '600px',
//           margin: '0 auto',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//           },
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             color: '#64ffda',
//             fontWeight: 400,
//             marginBottom: 20,
//           }}
//         >
//           Resume
//         </Typography>
//         <Typography
//           variant="body1"
//           style={{
//             color: '#8892b0',
//             lineHeight: 1.7,
//             marginBottom: 30,
//             fontSize: '1rem',
//           }}
//         >
//           A detailed overview of my skills, experience, and projects. Download my resume to learn more about my journey in web development and how I can contribute to your team.
//         </Typography>
//         <Button
//           href="/resume.pdf" // Assumes resume.pdf is in the public directory
//           download
//           target="_blank"
//           variant="contained"
//           sx={{
//             backgroundColor: '#64ffda',
//             color: '#0a192f',
//             borderRadius: '4px',
//             padding: '12px 30px',
//             textTransform: 'none',
//             fontWeight: 600,
//             fontSize: '1rem',
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               backgroundColor: 'rgba(100, 255, 218, 0.8)',
//               transform: 'scale(1.05)',
//             },
//           }}
//         >
//           Download Resume
//         </Button>
//       </Box>
//     </section>
//   );
// };

// export default Resume;


"use client"

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        padding: "100px 20px",
        maxWidth: 1200,
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        color: "#333333",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#333333",
          fontWeight: 600,
          marginBottom: 40,
          fontSize: "2.5rem",
          position: "relative",
        }}
      >
        Resume
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
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "40px",
          maxWidth: "600px",
          margin: "60px auto 0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          border: "1px solid #f0f0f0",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-10px)"
          e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.1)"
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)"
          e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(255,107,107,0.1) 100%)",
            zIndex: -1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "-20px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,107,107,0.15) 0%, rgba(255,107,107,0.05) 100%)",
            zIndex: -1,
          }}
        ></div>

        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#800080"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: "20px", opacity: 0.8 }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>

        <h3
          style={{
            color: "#333333",
            fontWeight: 600,
            marginBottom: 20,
            fontSize: "24px",
          }}
        >
          My Resume
        </h3>

        <p
          style={{
            color: "#666666",
            lineHeight: 1.7,
            marginBottom: 30,
            fontSize: "16px",
          }}
        >
          A detailed overview of my skills, experience, and projects. Download my resume to learn more about my journey
          in web development and how I can contribute to your team.
        </p>

        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#800080",
            color: "white",
            borderRadius: "6px",
            padding: "14px 30px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(255,107,107,0.2)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#ff5252"
            e.target.style.transform = "translateY(-2px) scale(1.05)"
            e.target.style.boxShadow = "0 6px 8px rgba(255,107,107,0.3)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#800080"
            e.target.style.transform = "translateY(0) scale(1)"
            e.target.style.boxShadow = "0 4px 6px rgba(255,107,107,0.2)"
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
