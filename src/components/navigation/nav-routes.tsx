import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: theme.typography.h1.fontSize,
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  listItem: {
    width: 250
  }
}));

interface IRoutes {
  show: boolean;
  isExternal: boolean;
  path: string;
  name: string;
  icon: any;
}

interface INavRoutesProps {
  onClick?: any;
}

export const NavRoutes: React.FC<INavRoutesProps> = ({ onClick }) => {
  const classes = useStyles();

  const routes = [
    {
      show: true,
      isExternal: false,
      path: '/',
      name: 'Home',
      icon: <HomeIcon />
    },
    {
      show: true,
      isExternal: false,
      path: '/resume',
      name: 'Resume',
      icon: <ConfirmationNumberIcon />
    },
    {
      show: true,
      isExternal: false,
      path: '/portfolio',
      name: 'Portfolio',
      icon: <ConfirmationNumberIcon />
    },
    {
      show: true,
      isExternal: false,
      path: '/about',
      name: 'About',
      icon: <ConfirmationNumberIcon />
    },
    {
      show: true,
      isExternal: false,
      path: '/contact',
      name: 'Contact',
      icon: <ConfirmationNumberIcon />
    }
  ] as IRoutes[];

  return (
    <List>
      {routes.map((route: IRoutes, idx: number) => {
        return (
          route.show && (
            <Fade key={route.name} triggerOnce={true} delay={idx * 150}>
              <ListItem
                component={NavLink}
                to={route.path}
                className={classes.listItem}
                onClick={() => {
                  onClick();
                  // Scroll to top on route change
                  window.scroll(0, 0);
                }}
              >
                <ListItemText
                  classes={{ primary: classes.text }}
                  primary={route.name}
                />
              </ListItem>
            </Fade>
          )
        );
      })}
    </List>
  );
};
