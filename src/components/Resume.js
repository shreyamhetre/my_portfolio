import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        padding: '100px 20px',
        maxWidth: 1200,
        margin: '0 auto',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#112240',
          borderRadius: '10px',
          padding: '40px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: '#64ffda',
            fontWeight: 400,
            marginBottom: 20,
          }}
        >
          Resume
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: '#8892b0',
            lineHeight: 1.7,
            marginBottom: 30,
            fontSize: '1rem',
          }}
        >
          A detailed overview of my skills, experience, and projects. Download my resume to learn more about my journey in web development and how I can contribute to your team.
        </Typography>
        <Button
          href="/resume.pdf" // Assumes resume.pdf is in the public directory
          download
          target="_blank"
          variant="contained"
          sx={{
            backgroundColor: '#64ffda',
            color: '#0a192f',
            borderRadius: '4px',
            padding: '12px 30px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(100, 255, 218, 0.8)',
              transform: 'scale(1.05)',
            },
          }}
        >
          Download Resume
        </Button>
      </Box>
    </section>
  );
};

export default Resume;