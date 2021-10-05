import { Container, Typography } from '@material-ui/core';
import * as React from 'react';
import { useParams } from 'react-router';
import { useStyles } from './project-detail.styles';

export const ProjectDetail = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography color="textPrimary" variant="h1" component="h1">
        {id}
      </Typography>
    </Container>
  );
};
