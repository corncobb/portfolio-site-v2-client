import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { ProfilePic } from 'src/assets/data';
import { GlobalAppContext } from 'src/store/global-app-context';
import Typed from 'typed.js';
import { useStyles } from './home.styles';

export const HomeLayout = () => {
  const { state } = useContext(GlobalAppContext);
  const classes = useStyles();
  const el1 = useRef<any>(null);
  const el2 = useRef<any>(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ['Cameron Cobb'],
      startDelay: 1000,
      typeSpeed: 40
    });
    const typed2 = new Typed(el2.current, {
      strings: [
        'Full-Stack Software Engineer',
        'Mobile App Developer',
        'Web3 and Solidity developer'
      ],

      startDelay: 1500,
      typeSpeed: 40,
      backSpeed: 60,
      backDelay: 2000,
      loop: true
    });

    // Destroy Typing
    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <Box
      className={classes.backgroundContainer}
      // window.innerHeight is used to help with IOS safari and their stupid top
      // and bottom bars along with their crappy scrolling
      style={{ height: window.innerHeight }}
    >
      <Box className={classes.typedContainer}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Fade triggerOnce={true} delay={250}>
              <Avatar
                src={ProfilePic}
                className={classes.avatar}
                alt="Cameron Cobb Profile Pic"
              />
            </Fade>
          </Grid>
          <Grid item>
            <Fade triggerOnce={true} delay={500}>
              <Typography color="primary" variant="h1" component="h1">
                <span ref={el1}></span>
              </Typography>
            </Fade>
          </Grid>
          <br />
          <Grid item>
            <Fade triggerOnce={true} delay={750}>
              <Typography
                className={classes.subtitle}
                color="textPrimary"
                variant="h3"
                component="h3"
              >
                <span ref={el2}></span>
              </Typography>
            </Fade>
          </Grid>
          <Grid item>
            <Fade triggerOnce={true} delay={1000}>
              <Button
                variant="contained"
                color="primary"
                component={NavLink}
                to={'/about'}
                size="large"
                className={classes.learnMoreButton}
              >
                About Me
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Box>
      <Particles
        canvasClassName={classes.particlesCanvas}
        init={() => null}
        loaded={() => null}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: state.isDarkMode ? '#ffffff' : '#000000'
            },
            links: {
              color: state.isDarkMode ? '#ffffff' : '#000000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: false
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 20
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}
      />
    </Box>
  );
};
