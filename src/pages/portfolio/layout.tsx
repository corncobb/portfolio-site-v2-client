import { Box, Container, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { IProject, Projects } from 'src/assets/data';
import { ProjectCard } from './components/project-card/project-card';
import { useStyles } from './portfolio.styles';

export const PortfolioLayout = () => {
  const classes = useStyles();

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.portfolioCardContainer}>
        {Projects.map((project: IProject, idx: number) => (
          <Fade
            key={idx}
            triggerOnce={true}
            delay={isDesktop ? idx * 150 : 500}
          >
            <Box style={{ margin: '1rem' }}>
              <ProjectCard project={project} />
            </Box>
          </Fade>
        ))}
      </Box>
    </Container>
  );
};
