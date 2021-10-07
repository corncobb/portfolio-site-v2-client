import {
  AppBar,
  Button,
  Dialog,
  Fab,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { GitHub, LinkedIn } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { GlobalAppContext } from 'src/store/global-app-context';
import { ActionTypes } from 'src/store/reducer';
import { SocialLinks } from '../../assets/data';
import { NavRoutes } from './nav-routes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },

  content: {
    width: '100%',
    flexGrow: 1
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  fabMenuButton: {
    position: 'fixed',
    top: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 999
  },
  appBar: {
    alignItems: 'flex-end',
    position: 'relative',
    padding: theme.spacing(3)
  },
  logo: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

interface IProps {
  children: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MainNavbar: React.FC<IProps> = ({ children }) => {
  const { state, dispatch } = useContext(GlobalAppContext);

  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDarkModeChange = (payload: boolean) => {
    dispatch({
      type: ActionTypes.SET_IS_DARK_MODE,
      payload
    });
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <Fab
        variant="extended"
        color="primary"
        className={classes.fabMenuButton}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon className={classes.extendedIcon} />
        Menu
      </Fab>

      <main className={classes.content}>{children}</main>

      <Dialog
        fullScreen
        open={drawerOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="transparent" className={classes.appBar} elevation={0}>
          <Button color="primary" variant="contained" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </AppBar>
        <Grid
          container
          style={{ height: '100%', flexWrap: 'nowrap' }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            {/* Toggle dark mode */}
            <Fade triggerOnce={true}>
              <Typography
                color="textSecondary"
                variant="h1"
                component="p"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDarkModeChange(!state.isDarkMode)}
              >
                {state.isDarkMode ? <>🌝</> : <>🌚</>}
              </Typography>
            </Fade>
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
            <NavRoutes onClick={handleClose} />
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Fade triggerOnce={true} delay={750}>
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
                <Fade triggerOnce={true} delay={800}>
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
          </Grid>
          <Grid item>
            <Fade triggerOnce={true} delay={900}>
              <Typography
                color="textPrimary"
                style={{ textAlign: 'center' }}
                gutterBottom
              >
                Copyright © {new Date().getFullYear()} CamCobb.com.
              </Typography>
            </Fade>
          </Grid>
          <Grid item style={{ padding: '2rem', paddingTop: 0 }}>
            <Fade triggerOnce={true} delay={1050}>
              <Typography
                color="textPrimary"
                style={{ textAlign: 'center' }}
                gutterBottom
              >
                Built with ❤️ using React, TypeScript, and Material UI.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};
