import { Avatar, Chip, Container, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { Navigate, useParams } from 'react-router';
import { IProject, Projects } from 'src/assets/data';
import { ButtonsContainer } from '../buttons-container/buttons-container';
import { useStyles } from './project-detail.styles';

export const ProjectDetail = () => {
  const classes = useStyles();
  const { id } = useParams();

  const project = Projects.filter(
    (project) => project.slug === id
  )[0] as IProject;

  // If a user goes to a route or a id that is non-existing, or cannot find the project based on slug, go to 404
  if (!project) return <Navigate to="/404" />;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row" alignContent="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Avatar
            src={project.imageUrl}
            className={classes.avatar}
            variant="square"
            alt={project.title}
          />

          <ButtonsContainer project={project} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="primary" variant="h1" component="h1">
            {project.title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.type}
          >
            {project.type.toLowerCase()}
          </Typography>
          <Grid container spacing={1}>
            {project.stack.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.projectDescription}
          >
            {project.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
