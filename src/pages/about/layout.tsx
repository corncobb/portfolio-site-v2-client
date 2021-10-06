import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Link,
  Typography
} from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';
import {
  CloudServices,
  DevTools,
  Frameworks,
  Languages,
  Other,
  SocialLinks,
  Tools
} from '../../assets/data';
import ProfilePic from '../../assets/images/profile-pic-min.jpg';
import Resume from '../../assets/resume/Resume-Cameron-Cobb-v1-2.pdf';
import { useStyles } from './about.styles';

export const AboutLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row" alignContent="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Avatar
            src={ProfilePic}
            className={classes.avatar}
            variant="square"
            alt="Cameron Cobb Profile Pic"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="primary" variant="h1" component="h1">
            Cameron Cobb
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
            component="h2"
            gutterBottom
          >
            Software Developer
          </Typography>
          <Grid
            container
            spacing={1}
            alignItems="center"
            className={classes.linksContainer}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              fullWidth
              href={Resume}
              classes={{ root: classes.resumeButton }}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Printable Resume
            </Button>

            <Grid item>
              <IconButton
                component={Link}
                href={SocialLinks.GitHub}
                underline="none"
                rel="noopener noreferrer nofollow"
                target="_blank"
                aria-label="GitHub"
                color="primary"
              >
                <GitHub />
              </IconButton>
            </Grid>
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
                <LinkedIn />
              </IconButton>
            </Grid>
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            className={classes.subtitle}
          >
            About
          </Typography>
          <Typography variant="body1" color="textPrimary">
            I am an experienced Software Developer with +3 years of development
            experience. I am a Full-Stack Software Developer at{' '}
            <Link
              href="https://foodnome.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              underline="none"
              color="textSecondary"
              style={{ fontWeight: 1000 }}
            >
              Foodnome INC
            </Link>{' '}
            but I also take on contract work as a medium to learn new
            technologies. Most of my contract work included working with
            industrial manufacturers in the Reno/Sparks area and SaaS
            businesses. Tasks included programming embedded systems like
            microcontrollers and Raspberry Pi to collect sensor information from
            machines, compute data, and have the data sent to a local database
            for analysis. Other contract work included applying SOLID principles
            for large codebases to enable better scalability and readability.
            Now, I am more involved with web-based contract work designing and
            building full-stack web apps, debugging and scaling existing apps,
            or building crypto projects.
          </Typography>

          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Languages
          </Typography>
          <Grid container spacing={1}>
            {Languages.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Frameworks / Libraries
          </Typography>
          <Grid container spacing={1}>
            {Frameworks.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Tools / Services / Databases
          </Typography>
          <Grid container spacing={1}>
            {Tools.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Cloud Services
          </Typography>
          <Grid container spacing={1}>
            {CloudServices.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Dev Tools
          </Typography>
          <Grid container spacing={1}>
            {DevTools.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            gutterBottom
            className={classes.subtitle}
          >
            Other
          </Typography>
          <Grid container spacing={1}>
            {Other.map((tag, index) => (
              <Grid item key={index}>
                <Chip label={tag} size="small" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
