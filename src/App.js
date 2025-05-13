// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import Home from './components/Home';
// import About from './components/About';
// import Experiences from './components/Experiences';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

// const App = () => {
//   const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact', 'Resume'];

//   return (
//     <div style={{ backgroundColor: '#0a192f', color: '#ccd6f6', fontFamily: 'Poppins, sans-serif', minHeight: '100vh' }}>
//       <AppBar position="fixed" style={{ backgroundColor: '#0a192f', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
//         <Toolbar style={{ justifyContent: 'space-between' }}>
//           <Typography variant="h6" style={{ fontWeight: 600, color: '#64ffda' }}>
//             Shreya Mhetre
//           </Typography>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <div style={{ display: { xs: 'none', sm: 'block' } }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   sx={{
//                     color: '#ccd6f6',
//                     marginLeft: '20px',
//                     textTransform: 'none',
//                     fontSize: 14,
//                     position: 'relative',
//                     borderBottom: '2px solid transparent', // Initial transparent border
//                     transition: 'border-bottom 0.3s ease-in-out', // Smooth transition for border
//                     '&:hover': {
//                       cursor: 'pointer',
//                       borderBottom: '1px solid #ccd6f6', // White underline on hover
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div style={{ marginTop: 64 }}>
//         <Home />
//         <About />
//         <Experiences />
//         <Projects />
//         <Skills />
//         <Contact />
//         <Resume />
//       </div>
//     </div>
//   );
// };

// export default App;

"use client"
import Home from "./components/Home"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

const App = () => {
  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact", "Resume"]

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "15px 40px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontWeight: 600,
              color: "#800080",
              margin: 0,
              fontSize: "1.5rem",
            }}
          >
            Shreya Mhetre
          </h1>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "30px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "#555555",
                      textDecoration: "none",
                      fontSize: "14px",
                      position: "relative",
                      padding: "5px 0",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#800080"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#555555"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div style={{ marginTop: 64 }}>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </div>
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#777777",
          backgroundColor: "#f9f9f9",
          borderTop: "1px solid #eeeeee",
        }}
      >
        <p>© 2025 Shreya Mhetre. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
