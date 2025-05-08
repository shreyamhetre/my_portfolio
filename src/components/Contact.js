import React from 'react';
import { Typography, Button, Box, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section 
      id="contact" 
      style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        maxWidth: 800, 
        margin: '0 auto',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <Typography 
        variant="h2" 
        style={{ 
          color: '#64ffda', 
          fontWeight: 600, 
          marginBottom: 40,
          fontSize: '3.5rem',
        }}
      >
        Get In Touch
      </Typography>
      
      <Typography 
        variant="body1" 
        style={{ 
          color: '#8892b0', 
          lineHeight: 1.8, 
          marginBottom: 60,
          maxWidth: 600,
          fontSize: '1.1rem',
        }}
      >
        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </Typography>
      
      <Box 
        sx={{
          display: 'flex',
          gap: '30px',
          marginBottom: '40px',
          justifyContent: 'center',
        }}
      >
        <IconButton 
          href="mailto:varadbhogayata@gmail.com" 
          target="_blank"
          aria-label="Email"
          sx={{
            color: '#64ffda',
            border: '2px solid #64ffda',
            borderRadius: '50%',
            padding: '15px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-5px)',
            }
          }}
        >
          <EmailIcon sx={{ fontSize: 30 }} />
        </IconButton>
        
        <IconButton 
          href="https://www.linkedin.com/in/varadbhogayata" 
          target="_blank"
          aria-label="LinkedIn"
          sx={{
            color: '#64ffda',
            border: '2px solid #64ffda',
            borderRadius: '50%',
            padding: '15px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-5px)',
            }
          }}
        >
          <LinkedInIcon sx={{ fontSize: 30 }} />
        </IconButton>
        
        <IconButton 
          href="https://github.com/shreyamhetre" 
          target="_blank"
          aria-label="GitHub"
          sx={{
            color: '#64ffda',
            border: '2px solid #64ffda',
            borderRadius: '50%',
            padding: '15px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-5px)',
            }
          }}
        >
          <GitHubIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      
    </section>
  );
};

export default Contact;