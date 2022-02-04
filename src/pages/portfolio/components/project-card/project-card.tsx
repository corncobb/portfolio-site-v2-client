import { Chip, Grid, Typography } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { IProject } from 'src/assets/data';
import { useStyles } from './project-card.styles';

interface IProps {
  project: IProject;
}

export const ProjectCard: React.FC<IProps> = ({ project }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{ maxWidth: 345 }}
      elevation={4}
      classes={{ root: classes.cardRoot }}
    >
      <CardActionArea component={Link} to={project.slug}>
        <CardMedia
          component="img"
          height="180"
          image={project.imageUrl}
          alt={project.slug}
          draggable={false}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            className={classes.description}
            gutterBottom
          >
            {project.description}
          </Typography>
          <Grid container spacing={1}>
            {project.stack.slice(0, 3).map((tag, index: number) => (
              <Grid item key={index}>
                <Fade triggerOnce={true} delay={index * 200}>
                  <Chip label={tag} size="small" />
                </Fade>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
