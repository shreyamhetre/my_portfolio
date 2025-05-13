// import React, { useEffect, useRef } from 'react';
// import { Typography, Box } from '@mui/material';

// const Experiences = () => {
//   const experiences = [
//     {
//       title: 'Software Engineer at Equations Work',
//       period: 'Aug 2023 - MAy 2025',
//       description: 'Worked as a SOftware Engineer, focusing on developing scalable web applications.',
//     },
//     {
//       title: 'Web Development Intern at Coneixement',
//       period: 'Dec 2022 - Feb 2024',
//       description: 'Web Development Intern at Coneixement',
//     },
//     {
//       title: 'Frontend Developer at S2R2 Technologies',
//       period: 'Jun 2023 - April 2023',
//       description: 'Frontend Developer at S2R2 Technologies',
//     },
//     {
//       title: 'Web Developmenet Team Member at GDSC',
//       period: 'Aug 2022 - Jun 2023',
//       description: 'Web Development Team Member at GDSC',
//     },
//   ];

//   const boxRefs = useRef([]);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';

//       boxRefs.current.forEach((box, index) => {
//         if (!box) return;

//         const rect = box.getBoundingClientRect();
//         const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

//         if (isInViewport) {
//           // Box is in viewport, apply slide-in animation
//           box.style.opacity = 1;
//           box.style.transform = 'translateX(0)';
//         } else {
//           // Box is out of viewport, reset animation based on scroll direction
//           box.style.opacity = 0;
//           box.style.transform = index % 2 === 0 ? 'translateX(-150px)' : 'translateX(150px)';
//         }
//       });

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       id="experience"
//       style={{
//         padding: '100px 20px',
//         maxWidth: 1000,
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
//         Where I've Worked
//       </Typography>
//       <Box
//         style={{
//           position: 'relative',
//           padding: '0 20px',
//           maxWidth: 800, // Increased maxWidth for more space
//           margin: '0 auto',
//         }}
//       >
//         {/* Timeline Line */}
//         <Box
//           style={{
//             position: 'absolute',
//             left: '50%',
//             top: 0,
//             bottom: 0,
//             width: 6,
//             backgroundColor: '#233554',
//             transform: 'translateX(-50%)',
//           }}
//         />
//         {experiences.map((exp, index) => (
//           <Box
//             key={index}
//             ref={(el) => (boxRefs.current[index] = el)}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               marginBottom: 40,
//               flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
//               opacity: 0,
//               transform: index % 2 === 0 ? 'translateX(-150px)' : 'translateX(150px)',
//               transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//             }}
//           >
//             {/* Box Content */}
//             <Box
//               style={{
//                 width: '40%', // Reduced width to increase distance from center
//                 padding: '20px',
//                 backgroundColor: '#112240',
//                 borderRadius: 10,
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
//                 position: 'relative',
//                 textAlign: index % 2 === 0 ? 'right' : 'left',
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 style={{ color: '#ccd6f6', fontWeight: 600, marginBottom: 10 }}
//               >
//                 {exp.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 style={{ color: '#64ffda', marginBottom: 10 }}
//               >
//                 {exp.period}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 style={{ color: '#8892b0', lineHeight: 1.6 }}
//               >
//                 {exp.description}
//               </Typography>
//               {/* Arrow */}
//               <Box
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   [index % 2 === 0 ? 'right' : 'left']: -10,
//                   width: 0,
//                   height: 0,
//                   borderTop: '10px solid transparent',
//                   borderBottom: '10px solid transparent',
//                   [index % 2 === 0 ? 'borderLeft' : 'borderRight']:
//                     '10px solid #112240',
//                   transform: 'translateY(-50%)',
//                 }}
//               />
//             </Box>
//             {/* Circle Marker */}
//             <Box
//               style={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: '#64ffda',
//                 borderRadius: '50%',
//                 position: 'absolute',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 zIndex: 1,
//               }}
//             />
//             {/* Spacer */}
//             <Box style={{ width: '60%' }} /> {/* Increased spacer width */}
//           </Box>
//         ))}
//       </Box>
//     </section>
//   );
// };

// export default Experiences;


"use client"

import { useEffect, useRef } from "react"

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer at Equations Work",
      period: "Aug 2023 - May 2025",
      description: "Worked as a Software Engineer, focusing on developing scalable web applications.",
    },
    {
      title: "Web Development Intern at Coneixement",
      period: "Dec 2022 - Feb 2024",
      description: "Web Development Intern at Coneixement",
    },
    {
      title: "Frontend Developer at S2R2 Technologies",
      period: "Jun 2023 - April 2023",
      description: "Frontend Developer at S2R2 Technologies",
    },
    {
      title: "Web Development Team Member at GDSC",
      period: "Aug 2022 - Jun 2023",
      description: "Web Development Team Member at GDSC",
    },
  ]

  const boxRefs = useRef([])
  const lastScrollY = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up"

      boxRefs.current.forEach((box, index) => {
        if (!box) return

        const rect = box.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0

        if (isInViewport) {
          // Box is in viewport, apply slide-in animation
          box.style.opacity = 1
          box.style.transform = "translateX(0)"
        } else {
          // Box is out of viewport, reset animation based on scroll direction
          box.style.opacity = 0
          box.style.transform = index % 2 === 0 ? "translateX(-150px)" : "translateX(150px)"
        }
      })

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="experience"
      style={{
        padding: "100px 20px",
        maxWidth: 1000,
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
        Where I've Worked
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
          position: "relative",
          padding: "0 20px",
          maxWidth: 800,
          margin: "60px auto 0",
        }}
      >
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 4,
            backgroundColor: "#e0e0e0",
            transform: "translateX(-50%)",
          }}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 40,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              opacity: 0,
              transform: index % 2 === 0 ? "translateX(-150px)" : "translateX(150px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            {/* Box Content */}
            <div
              style={{
                width: "40%",
                padding: "25px",
                backgroundColor: "white",
                borderRadius: 10,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                position: "relative",
                textAlign: index % 2 === 0 ? "right" : "left",
                border: "1px solid #f0f0f0",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)"
                e.target.style.transform = "translateY(-5px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
                e.target.style.transform = "translateY(0)"
              }}
            >
              <h3
                style={{
                  color: "#333333",
                  fontWeight: 600,
                  marginBottom: 10,
                  fontSize: "18px",
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  color: "#800080",
                  marginBottom: 10,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {exp.period}
              </p>
              <p
                style={{
                  color: "#666666",
                  lineHeight: 1.6,
                  fontSize: "15px",
                }}
              >
                {exp.description}
              </p>

              {/* Arrow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  [index % 2 === 0 ? "right" : "left"]: -10,
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  [index % 2 === 0 ? "borderLeft" : "borderRight"]: "10px solid white",
                  transform: "translateY(-50%)",
                  filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.05))",
                }}
              />
            </div>

            {/* Circle Marker */}
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#800080",
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                boxShadow: "0 0 0 4px white, 0 0 0 6px rgba(255,107,107,0.3)",
              }}
            />

            {/* Spacer */}
            <div style={{ width: "60%" }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
