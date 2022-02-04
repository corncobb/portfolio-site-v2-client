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
import { Fade } from 'react-awesome-reveal';
import Resume from 'src/assets/resume/Resume_Cameron_Cobb_v3-1.pdf';
import {
  CloudServices,
  DevTools,
  Frameworks,
  Languages,
  Other,
  ProfilePic,
  SocialLinks,
  Tools
} from '../../assets/data';
import { useStyles } from './about.styles';

export const AboutLayout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row" alignContent="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Fade
            triggerOnce={true}
            delay={250}
            className={classes.avatarContainer}
          >
            <Avatar
              src={ProfilePic}
              className={classes.avatar}
              variant="square"
              alt="Cameron Cobb Profile Pic"
            />
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Fade triggerOnce={true} delay={250}>
            <Typography color="primary" variant="h1" component="h1">
              Cameron Cobb
            </Typography>
          </Fade>
          <Fade triggerOnce={true} delay={400}>
            <Typography
              color="textPrimary"
              variant="h2"
              component="h2"
              gutterBottom
            >
              Software Engineer
            </Typography>
          </Fade>
          <Grid
            container
            spacing={1}
            alignItems="center"
            className={classes.linksContainer}
          >
            <Fade triggerOnce={true} delay={550} style={{ width: '100%' }}>
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
            </Fade>

            <Grid item>
              <Fade triggerOnce={true} delay={650}>
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
              </Fade>
            </Grid>
            <Grid item>
              <Fade triggerOnce={true} delay={700}>
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
              </Fade>
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
          <Fade triggerOnce={true} delay={800}>
            <Typography variant="body1" color="textPrimary">
              I am an experienced Software Engineer with +3 years of engineering
              experience. I am a Full-Stack Software Engineer at{' '}
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
              microcontrollers and Raspberry Pi to collect sensor information
              from machines, compute data, and have the data sent to a local
              database for analysis. Other contract work included applying SOLID
              principles for large codebases to enable better scalability and
              readability. Now, I am more involved with web-based contract work
              designing and building full-stack web apps, debugging and scaling
              existing apps, or building crypto projects.
            </Typography>
          </Fade>

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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
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
                <Fade triggerOnce={true} delay={index * 100}>
                  <Chip label={tag} size="small" />
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
