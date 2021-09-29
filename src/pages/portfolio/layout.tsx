import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './portfolio.styles';

export const PortfolioLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography component="h1" variant="h1" color="textPrimary">
        Portfolio
      </Typography>
    </Container>
  );
};
