import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact', 'Resume'];

  return (
    <div style={{ backgroundColor: '#0a192f', color: '#ccd6f6', fontFamily: 'Poppins, sans-serif', minHeight: '100vh' }}>
      <AppBar position="fixed" style={{ backgroundColor: '#0a192f', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" style={{ fontWeight: 600, color: '#64ffda' }}>
            Shreya Mhetre
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: '#ccd6f6',
                    marginLeft: '20px',
                    textTransform: 'none',
                    fontSize: 14,
                    position: 'relative',
                    borderBottom: '2px solid transparent', // Initial transparent border
                    transition: 'border-bottom 0.3s ease-in-out', // Smooth transition for border
                    '&:hover': {
                      cursor: 'pointer',
                      borderBottom: '1px solid #ccd6f6', // White underline on hover
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 64 }}>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </div>
    </div>
  );
};

export default App;