import { Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalAppContext } from 'src/store/global-app-context';
import { useStyles } from './resume.styles';

export const ResumeLayout = () => {
  const { state } = useContext(GlobalAppContext);
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h1" color="textPrimary">
        Resume
      </Typography>
    </Container>
  );
};
