import { Container, Grid, IconButton, Link } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import React from 'react';
import { SocialLinks } from '../../assets/data';
import { useStyles } from './contact.styles';

export const ContactLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        style={{ height: '100%' }}
      >
        <Grid item>
          <IconButton
            component={Link}
            href={SocialLinks.LinkedIn}
            underline="none"
            rel="noopener noreferrer nofollow"
            target="_blank"
            aria-label="LinkedIn"
            color="primary"
          >
            <LinkedIn classes={{ root: classes.linkedInButton }} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
