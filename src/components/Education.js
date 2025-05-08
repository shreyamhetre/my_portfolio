import React from 'react';
import { Typography, Box } from '@mui/material';

const Education = () => {
  const education = [
    {
      institution: 'Gujarat Technological University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      period: '2017 - 2021',
    },
  ];

  return (
    <section id="education" style={{ padding: '100px 20px', maxWidth: 1000, margin: '0 auto' }}>
      <Typography variant="h4" style={{ color: '#64ffda', fontWeight: 400, marginBottom: 40 }}>
        Education
      </Typography>
      {education.map((edu, index) => (
        <Box key={index} style={{ marginBottom: 20 }}>
          <Typography variant="h6" style={{ color: '#ccd6f6', fontWeight: 600 }}>
            {edu.degree}
          </Typography>
          <Typography variant="body1" style={{ color: '#8892b0', marginBottom: 10 }}>
            {edu.institution}
          </Typography>
          <Typography variant="body2" style={{ color: '#64ffda' }}>
            {edu.period}
          </Typography>
        </Box>
      ))}
    </section>
  );
};

export default Education;