import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Resume from 'src/assets/resume/Resume_Cameron_Cobb_v3.pdf';
import { useStyles } from './resume.styles';

export const ResumeLayout = () => {
  const classes = useStyles();

  const experience = [
    {
      year: '2020',
      title: 'Full-Stack Software Developer',
      company: (
        <Typography
          variant="h4"
          component={Link}
          color="textSecondary"
          href="https://foodnome.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          underline="none"
        >
          Foodnome INC
        </Typography>
      ),
      positionLocation: 'Remote',
      description: (
        <Typography variant="subtitle1" color="textPrimary">
          Foodnome is the first marketplace for permitted home restaurants in
          the US. My role as a full-stack software developer at Foodnome
          includes:
          <ul>
            <Typography variant="subtitle1" component="li">
              converting prototype designs into functioning features
            </Typography>
            <Typography variant="subtitle1" component="li">
              revamping/rewriting legacy code into modern, maintainable, and
              robust code for scalability
            </Typography>
            <Typography variant="subtitle1" component="li">
              writing end to end (E2E) tests to test checkout, dish creation,
              menu creation, and cook onboarding flows
            </Typography>
            <Typography variant="subtitle1" component="li">
              catching UX/UI flaws caused by mobile screen sizes and different
              browsers (and fixing them)
            </Typography>
            <Typography variant="subtitle1" component="li">
              reviewing code before pushing to production
            </Typography>
            <Typography variant="subtitle1" component="li">
              learning and collaborating with other software
              developers/engineers to solve new problems
            </Typography>
          </ul>
        </Typography>
      )
    },
    {
      year: '2018',
      title: 'Website & Account Administrator',
      company: (
        <Typography
          variant="h4"
          component={Link}
          color="textSecondary"
          href="https://www.socialnetworkelite.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          underline="none"
        >
          Social Network Elite, LLC
        </Typography>
      ),
      positionLocation: 'Remote',
      description: (
        <Typography variant="subtitle1" color="textPrimary">
          My job was to set up trial accounts, respond to customer emails,
          manage and hire virtual assistants, and build tools to track progress
          of customer accounts. The tools I built utilized Selenium and various
          Python libraries to scrape customer accounts, competing accounts, and
          keep track of growth for customers. Every quarter, I would audit
          Social Network Elite's website to make sure the site would load
          quickly, there were no broken links, and make sure the SEO was on par
          with competition. The site received an average of 50,000 visits per
          month.
        </Typography>
      )
    },
    {
      year: '2017',
      title: 'Contract Software Developer',

      positionLocation: 'Reno / Sparks, NV & Remote',
      description: (
        <Typography variant="subtitle1" color="textPrimary">
          My contract work mostly involved working with industrial manufacturers
          in the Reno/Sparks area and SaaS businesses. Tasks included
          programming embedded systems like microcontrollers and Raspberry Pi to
          collect sensor information from machines, compute data, and have the
          data sent to a local database for analysis. Other contract work
          included applying SOLID principles for large codebases to enable
          better scalability and readability. I still do some contract work and
          am more involved with designing and building full-stack web apps,
          debugging and scaling existing apps, or building crypto projects.
        </Typography>
      )
    }
  ];

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.topContainer}>
        <Fade triggerOnce={true}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={Resume}
            rel="noopener noreferrer nofollow"
            target="_blank"
            className={classes.resumeButton}
          >
            Printable Resume
          </Button>
        </Fade>
        <Fade triggerOnce={true} delay={250}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            component="h2"
            className={classes.title}
          >
            Working Experience
          </Typography>
        </Fade>
      </Box>

      <Box component="div" className={classes.timeLine}>
        {/* Good idea to add data to an array and dynamically add this in */}
        {experience.map((experience, idx: number) => (
          <React.Fragment key={idx}>
            <Typography
              variant="h2"
              component="h3"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {experience.year}
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
              <Fade triggerOnce={true} delay={idx * 150}>
                <>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={classes.heading}
                    color="primary"
                  >
                    {experience.title}
                  </Typography>

                  {experience.company}

                  <Typography variant="body1" style={{ color: 'tomato' }}>
                    {experience.positionLocation}
                  </Typography>

                  {experience.description}
                </>
              </Fade>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};
