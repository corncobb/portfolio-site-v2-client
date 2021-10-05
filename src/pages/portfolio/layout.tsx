import { Box, Container } from '@material-ui/core';
import React from 'react';
import { ProjectCard } from './components/project-card/project-card';
import { useStyles } from './portfolio.styles';
import { IProject, Projects } from './projects/projects';

export const PortfolioLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.portfolioCardContainer}>
        {Projects.map((project: IProject, idx: number) => (
          <Box key={idx} style={{ margin: '2rem' }}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};
