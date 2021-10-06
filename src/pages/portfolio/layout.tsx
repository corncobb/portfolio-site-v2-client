import { Box, Container } from '@material-ui/core';
import React from 'react';
import { IProject, Projects } from 'src/assets/data';
import { ProjectCard } from './components/project-card/project-card';
import { useStyles } from './portfolio.styles';

export const PortfolioLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.portfolioCardContainer}>
        {Projects.map((project: IProject, idx: number) => (
          <Box key={idx} style={{ margin: '1rem' }}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};
