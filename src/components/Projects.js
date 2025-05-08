import React from 'react';
import { Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const projects = [
    {
      title: 'Ai-Research-Assistant',
      description: 'A personal portfolio website built with React and Material UI to showcase my projects and skills.',
      githubLink: 'https://github.com/shreyamhetre/Ai-research-Assistant',
    },
    {
      title: 'E-commerce ',
      description: 'A full-stack e-commerce application with user authentication, product listings, and payment integration.',
      githubLink: 'https://github.com/varadbhogayata/ecommerce-platform',
    },
    {
      title: 'Task Manager',
      description: 'A task management app with features like task creation, categorization, and deadline tracking.',
      githubLink: 'https://github.com/varadbhogayata/task-manager',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app that provides real-time weather updates using a public API.',
      githubLink: 'https://github.com/varadbhogayata/weather-app',
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '100px 20px',
        maxWidth: 1200,
        margin: '0 auto',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        style={{
          color: '#64ffda',
          fontWeight: 400,
          marginBottom: 40,
          textAlign: 'center',
        }}
      >
        Some Things I've Built
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          flexWrap: 'wrap',
          justifyContent: 'center',
          
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            className="card"
            sx={{
              width: 250,
              height: 120,
              transition: 'all 0.5s',
              boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.2), -15px -15px 30px rgba(60, 60, 60, 0.1)',
              textAlign: 'center',
              overflow: 'hidden',
              borderRadius: '5px',
              backgroundColor: '#112240',
              cursor: 'pointer',
              border: '0.5px solid white',
              '&:hover': {
                height: 260,
                background: 'linear-gradient(360deg, #112240 60%, #0a192f 70%)',
              },
              '&:hover .header': {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 96%)',
              },
            }}
          >
            <Box
              className="header"
              sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a192f',
                marginBottom: '16px',
                transition: 'all 0.5s',

                border: '1px solid white'
              }}
            >
              <Box
                className="img-box"
                sx={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}
              >
                {/* Icon placeholder - You can replace with project-specific icons */}
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  />
                  <path
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                    fill="#64ffda"
                  />
                </svg>
              </Box>
              <Typography
                className="title"
                sx={{
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 0 14px 0',
                  transition: 'all 0.5s',
                  color: '#64ffda',

                }}
              >
                {project.title}
              </Typography>
            </Box>
            <Box
              className="content"
              sx={{
                display: 'block',
                textAlign: 'left',
                color: '#ccd6f6',
                margin: '0 18px',
                position: 'relative',
                height: '120px',
              }}
            >
              <Typography
                sx={{
                  transition: 'all 0.5s',
                  fontSize: '0.8em',
                  marginBottom: '8px',
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '5px',

                }}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#64ffda',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  className="btn-link"
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <GitHubIcon style={{ fontSize: 24 }} />
                </a>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Projects;