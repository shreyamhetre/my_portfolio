import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from '../components/girlImage.png'; // Adjust the path as necessary

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '100px 20px',
        maxWidth: 1200,
        margin: '0 auto',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 10, // Reduced from 40 to 20
          alignItems: 'center',

        }}
      >
        <div style={{ flex: 1 }}>
          <Typography
            variant="h4"
            style={{
              color: '#64ffda',
              fontWeight: 600,
              marginBottom: 20,
              marginLeft:10,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: '#8892b0',
              lineHeight: 1.8,
              marginBottom: 30,
              marginLeft:10,

            }}
          >
            Hello! My name is Shreya and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom blog taught me a lot about HTML & CSS!
          </Typography>

          {/* Buttons */}
          <Box style={{ display: 'flex', gap: 16, marginTop: 20 , marginLeft: 10}}>
            <Button
              variant="outlined"
              style={{
                borderColor: '#64ffda',
                color: '#64ffda',
                borderRadius: 4,
                padding: '10px 25px',
                textTransform: 'none',
                fontWeight: 500,
              }}
              href="#"
            >
              Resume
            </Button>

            <Button
              href="#contact"
              variant="contained"
              style={{
                backgroundColor: '#64ffda',
                color: '#0a192f',
                borderRadius: 4,
                padding: '10px 25px',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.8)',
                },
              }}
            >
              Hire Me
            </Button>
          </Box>
        </div>

        {/* Right Section - Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={Image}
            alt="Shreya-Mhetre"
            style={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 10,
              border: '2px solid #64ffda',
              boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
            }}
          />
        </div>
      </Box>
    </section>
  );
};

export default About;