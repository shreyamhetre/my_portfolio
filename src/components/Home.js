// import React from 'react';
// import { Typography, Button } from '@mui/material';

// const Home = () => {
//   return (
//     <section
//       id="home"
//       style={{
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         padding: '0 20px',
//         backgroundColor: '#0a192f',
//         color: '#ccd6f6',
//         fontFamily: 'Poppins, sans-serif',
//       }}
//     >
//       <div>
//         <Typography
//           variant="h4"
//           sx={{
//             color: '#64ffda',
//             fontWeight: 400,
//             marginBottom: 20,
//             width: '100%',
//             maxWidth: '300px',
//             margin: '0 auto',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             borderRight: '2px solid #64ffda',
//             animation: `
//               typewriterWithGap 8s steps(20) infinite normal,
//               blinkingCursor 500ms steps(20) infinite normal
//             `,
//             '@keyframes typewriterWithGap': {
//               '0%': { width: 0 },
//               '37.5%': { width: '100%' }, // 37.5% of 8s = 3s for typewriter effect
//               '100%': { width: '100%' }, // Remain fully visible for the remaining 5s
//             },
//             '@keyframes blinkingCursor': {
//               from: { borderRightColor: '#64ffda' },
//               to: { borderRightColor: 'transparent' },
//             },
//           }}
//         >
//           Hi, my name is
//         </Typography>
//         <Typography
//           variant="h2"
//           sx={{
//             color: '#ccd6f6',
//             fontWeight: 600,
//             marginBottom: 20,
//             width: '100%',
//             maxWidth: '400px',
//             margin: '0 auto',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             borderRight: '2px solid #ccd6f6',
//             animation: `
//               typewriterWithGap 8s steps(20) infinite normal,
//               blinkingCursor 500ms steps(20) infinite normal
//             `,
//             '@keyframes typewriterWithGap': {
//               '0%': { width: 0 },
//               '37.5%': { width: '100%' }, // 37.5% of 8s = 3s for typewriter effect
//               '100%': { width: '100%' }, // Remain fully visible for the remaining 5s
//             },
//             '@keyframes blinkingCursor': {
//               from: { borderRightColor: '#ccd6f6' },
//               to: { borderRightColor: 'transparent' },
//             },
//           }}
//         >
//           Shreya Mhetre
//         </Typography>
//         <Typography
//           variant="h3"
//           style={{
//             color: '#8892b0',
//             fontWeight: 600,
//             marginBottom: 30,
//           }}
//         >
//           I build things for the web.
//         </Typography>
//         <Typography
//           variant="body1"
//           style={{
//             color: '#8892b0',
//             maxWidth: 600,
//             margin: '0 auto 40px',
//             lineHeight: 1.6,
//           }}
//         >
//           I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
//         </Typography>
//         <Button
//           variant="outlined"
//           href="#contact"
//           style={{
//             color: '#64ffda',
//             borderColor: '#64ffda',
//             textTransform: 'none',
//             padding: '10px 20px',
//             fontSize: 16,
//           }}
//         >
//           Get In Touch
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Home;


"use client"

const Home = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}>
        <p
          style={{
            color: "#800080",
            fontWeight: 400,
            marginBottom: "20px",
            fontSize: "18px",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          Hi, my name is
        </p>
        <h1
          style={{
            color: "#333333",
            fontWeight: 700,
            marginBottom: "20px",
            fontSize: "4rem",
            lineHeight: 1.1,
            animation: "fadeIn 1s ease-in-out 0.2s both",
          }}
        >
          Shreya Mhetre
        </h1>
        <h2
          style={{
            color: "#555555",
            fontWeight: 600,
            marginBottom: "30px",
            fontSize: "3rem",
            lineHeight: 1.1,
            animation: "fadeIn 1s ease-in-out 0.4s both",
          }}
        >
          I build things for the web.
        </h2>
        <p
          style={{
            color: "#666666",
            maxWidth: 600,
            marginBottom: "40px",
            lineHeight: 1.6,
            fontSize: "18px",
            animation: "fadeIn 1s ease-in-out 0.6s both",
          }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            backgroundColor: "#800080",
            color: "white",
            textDecoration: "none",
            padding: "12px 28px",
            borderRadius: "4px",
            fontWeight: 500,
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(255, 107, 107, 0.2)",
            animation: "fadeIn 1s ease-in-out 0.8s both",
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
          Get In Touch
        </a>
      </div>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #E6E6FA 0%, #E6E6FA 100%)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #E6E6FA 0%, #E6E6FA 100%)",
          zIndex: 1,
        }}
      ></div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  )
}

export default Home
