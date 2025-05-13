// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';
// import Image from '../components/girlImage.png'; // Adjust the path as necessary

// const About = () => {
//   return (
//     <section
//       id="about"
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
//         style={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: 10, // Reduced from 40 to 20
//           alignItems: 'center',

//         }}
//       >
//         <div style={{ flex: 1 }}>
//           <Typography
//             variant="h4"
//             style={{
//               color: '#64ffda',
//               fontWeight: 600,
//               marginBottom: 20,
//               marginLeft:10,
//             }}
//           >
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             style={{
//               color: '#8892b0',
//               lineHeight: 1.8,
//               marginBottom: 30,
//               marginLeft:10,

//             }}
//           >
//             Hello! My name is Shreya and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom blog taught me a lot about HTML & CSS!
//           </Typography>

//           {/* Buttons */}
//           <Box style={{ display: 'flex', gap: 16, marginTop: 20 , marginLeft: 10}}>
//             <Button
//               variant="outlined"
//               style={{
//                 borderColor: '#64ffda',
//                 color: '#64ffda',
//                 borderRadius: 4,
//                 padding: '10px 25px',
//                 textTransform: 'none',
//                 fontWeight: 500,
//               }}
//               href="#"
//             >
//               Resume
//             </Button>

//             <Button
//               href="#contact"
//               variant="contained"
//               style={{
//                 backgroundColor: '#64ffda',
//                 color: '#0a192f',
//                 borderRadius: 4,
//                 padding: '10px 25px',
//                 textTransform: 'none',
//                 fontWeight: 500,
//                 '&:hover': {
//                   backgroundColor: 'rgba(100, 255, 218, 0.8)',
//                 },
//               }}
//             >
//               Hire Me
//             </Button>
//           </Box>
//         </div>

//         {/* Right Section - Image */}
//         <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//           <img
//             src={Image}
//             alt="Shreya-Mhetre"
//             style={{
//               width: '100%',
//               maxWidth: 400,
//               borderRadius: 10,
//               border: '2px solid #64ffda',
//               boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
//             }}
//           />
//         </div>
//       </Box>
//     </section>
//   );
// };

// export default About;

"use client"

const About = () => {
  return (
    <section
      id="about"
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
        About Me
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
          gap: 40,
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#555555",
              lineHeight: 1.8,
              marginBottom: 30,
              fontSize: "16px",
            }}
          >
            Hello! My name is Shreya and I enjoy creating things that live on the internet. My interest in web
            development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking
            together a custom blog taught me a lot about HTML & CSS!
          </p>
          <p
            style={{
              color: "#555555",
              lineHeight: 1.8,
              marginBottom: 30,
              fontSize: "16px",
            }}
          >
            Fast-forward to today, and I've had the privilege of working at a software company, a start-up, and a
            student-led design studio. My main focus these days is building accessible, inclusive products and digital
            experiences.
          </p>

          <h3 style={{ color: "#444444", marginBottom: "15px", fontSize: "18px" }}>
            Here are a few technologies I've been working with recently:
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              marginBottom: "30px",
            }}
          >
            {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "Material UI", "Tailwind CSS"].map((tech, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#666666",
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    color: "#800080",
                    marginRight: "10px",
                    fontSize: "18px",
                  }}
                >
                  ›
                </span>
                {tech}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
            <a
              href="#resume"
              style={{
                display: "inline-block",
                padding: "10px 25px",
                border: "2px solid #800080",
                color: "#800080",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 107, 107, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Resume
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "10px 25px",
                backgroundColor: "#800080",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(255, 107, 107, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ff5252"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 6px 8px rgba(255, 107, 107, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#800080"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 6px rgba(255, 107, 107, 0.2)"
              }}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
              border: "8px solid white",
              transform: "rotate(2deg)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(0deg) scale(1.02)"
              e.target.style.boxShadow = "0 15px 35px -15px rgba(0, 0, 0, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(2deg) scale(1)"
              e.target.style.boxShadow = "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
            }}
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Shreya Mhetre"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(255,107,107,0.1) 100%)",
              zIndex: -1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "-15px",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255,107,107,0.15) 0%, rgba(255,107,107,0.05) 100%)",
              zIndex: -1,
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default About
