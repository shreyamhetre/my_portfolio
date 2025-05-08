import React from 'react';
import { Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div>
        <Typography
          variant="h4"
          sx={{
            color: '#64ffda',
            fontWeight: 400,
            marginBottom: 20,
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: '2px solid #64ffda',
            animation: `
              typewriterWithGap 8s steps(20) infinite normal,
              blinkingCursor 500ms steps(20) infinite normal
            `,
            '@keyframes typewriterWithGap': {
              '0%': { width: 0 },
              '37.5%': { width: '100%' }, // 37.5% of 8s = 3s for typewriter effect
              '100%': { width: '100%' }, // Remain fully visible for the remaining 5s
            },
            '@keyframes blinkingCursor': {
              from: { borderRightColor: '#64ffda' },
              to: { borderRightColor: 'transparent' },
            },
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: '#ccd6f6',
            fontWeight: 600,
            marginBottom: 20,
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: '2px solid #ccd6f6',
            animation: `
              typewriterWithGap 8s steps(20) infinite normal,
              blinkingCursor 500ms steps(20) infinite normal
            `,
            '@keyframes typewriterWithGap': {
              '0%': { width: 0 },
              '37.5%': { width: '100%' }, // 37.5% of 8s = 3s for typewriter effect
              '100%': { width: '100%' }, // Remain fully visible for the remaining 5s
            },
            '@keyframes blinkingCursor': {
              from: { borderRightColor: '#ccd6f6' },
              to: { borderRightColor: 'transparent' },
            },
          }}
        >
          Shreya Mhetre
        </Typography>
        <Typography
          variant="h3"
          style={{
            color: '#8892b0',
            fontWeight: 600,
            marginBottom: 30,
          }}
        >
          I build things for the web.
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: '#8892b0',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </Typography>
        <Button
          variant="outlined"
          href="#contact"
          style={{
            color: '#64ffda',
            borderColor: '#64ffda',
            textTransform: 'none',
            padding: '10px 20px',
            fontSize: 16,
          }}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Home;