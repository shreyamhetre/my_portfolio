// import React from 'react';
// import { Typography, Button, Box, IconButton } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

// const Contact = () => {
//   return (
//     <section 
//       id="contact" 
//       style={{ 
//         padding: '100px 20px', 
//         textAlign: 'center', 
//         maxWidth: 800, 
//         margin: '0 auto',
//         backgroundColor: '#0a192f',
//         color: '#ccd6f6',
//         fontFamily: 'Poppins, sans-serif',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '60vh',
//       }}
//     >
//       <Typography 
//         variant="h2" 
//         style={{ 
//           color: '#64ffda', 
//           fontWeight: 600, 
//           marginBottom: 40,
//           fontSize: '3.5rem',
//         }}
//       >
//         Get In Touch
//       </Typography>
      
//       <Typography 
//         variant="body1" 
//         style={{ 
//           color: '#8892b0', 
//           lineHeight: 1.8, 
//           marginBottom: 60,
//           maxWidth: 600,
//           fontSize: '1.1rem',
//         }}
//       >
//         I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
//       </Typography>
      
//       <Box 
//         sx={{
//           display: 'flex',
//           gap: '30px',
//           marginBottom: '40px',
//           justifyContent: 'center',
//         }}
//       >
//         <IconButton 
//           href="mailto:varadbhogayata@gmail.com" 
//           target="_blank"
//           aria-label="Email"
//           sx={{
//             color: '#64ffda',
//             border: '2px solid #64ffda',
//             borderRadius: '50%',
//             padding: '15px',
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               backgroundColor: 'rgba(100, 255, 218, 0.1)',
//               transform: 'translateY(-5px)',
//             }
//           }}
//         >
//           <EmailIcon sx={{ fontSize: 30 }} />
//         </IconButton>
        
//         <IconButton 
//           href="https://www.linkedin.com/in/varadbhogayata" 
//           target="_blank"
//           aria-label="LinkedIn"
//           sx={{
//             color: '#64ffda',
//             border: '2px solid #64ffda',
//             borderRadius: '50%',
//             padding: '15px',
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               backgroundColor: 'rgba(100, 255, 218, 0.1)',
//               transform: 'translateY(-5px)',
//             }
//           }}
//         >
//           <LinkedInIcon sx={{ fontSize: 30 }} />
//         </IconButton>
        
//         <IconButton 
//           href="https://github.com/shreyamhetre" 
//           target="_blank"
//           aria-label="GitHub"
//           sx={{
//             color: '#64ffda',
//             border: '2px solid #64ffda',
//             borderRadius: '50%',
//             padding: '15px',
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               backgroundColor: 'rgba(100, 255, 218, 0.1)',
//               transform: 'translateY(-5px)',
//             }
//           }}
//         >
//           <GitHubIcon sx={{ fontSize: 30 }} />
//         </IconButton>
//       </Box>
      
//     </section>
//   );
// };

// export default Contact;


"use client"

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        textAlign: "center",
        maxWidth: 800,
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
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
        Get In Touch
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

      <p
        style={{
          color: "#666666",
          lineHeight: 1.8,
          marginBottom: 60,
          maxWidth: 600,
          fontSize: "18px",
        }}
      >
        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want
        to say hi, I'll try my best to get back to you!
      </p>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          width: "100%",
          maxWidth: "500px",
          border: "1px solid #f0f0f0",
          marginBottom: "50px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#444444",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#800080"
                e.target.style.boxShadow = "0 0 0 3px rgba(255,107,107,0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#444444",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#800080"
                e.target.style.boxShadow = "0 0 0 3px rgba(255,107,107,0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#444444",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Your message here..."
              rows={5}
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#800080"
                e.target.style.boxShadow = "0 0 0 3px rgba(255,107,107,0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#800080",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "14px 20px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "10px",
              boxShadow: "0 4px 6px rgba(255,107,107,0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ff5252"
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 6px 8px rgba(255,107,107,0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#800080"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 6px rgba(255,107,107,0.2)"
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <a
          href="mailto:shreya.mhetre@example.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          style={{
            color: "#666666",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            border: "1px solid #f0f0f0",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#800080"
            e.target.style.color = "white"
            e.target.style.transform = "translateY(-5px)"
            e.target.style.boxShadow = "0 10px 20px rgba(255,107,107,0.3)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white"
            e.target.style.color = "#666666"
            e.target.style.transform = "translateY(0)"
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/shreya-mhetre"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{
            color: "#666666",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            border: "1px solid #f0f0f0",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#800080"
            e.target.style.color = "white"
            e.target.style.transform = "translateY(-5px)"
            e.target.style.boxShadow = "0 10px 20px rgba(255,107,107,0.3)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white"
            e.target.style.color = "#666666"
            e.target.style.transform = "translateY(0)"
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a
          href="https://github.com/shreyamhetre"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{
            color: "#666666",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            border: "1px solid #f0f0f0",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#800080"
            e.target.style.color = "white"
            e.target.style.transform = "translateY(-5px)"
            e.target.style.boxShadow = "0 10px 20px rgba(255,107,107,0.3)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white"
            e.target.style.color = "#666666"
            e.target.style.transform = "translateY(0)"
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <svg
            width="20"
            height="20"
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
    </section>
  )
}

export default Contact
