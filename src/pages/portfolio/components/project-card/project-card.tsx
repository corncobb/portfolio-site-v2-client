import { Typography } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import * as React from 'react';
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
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
