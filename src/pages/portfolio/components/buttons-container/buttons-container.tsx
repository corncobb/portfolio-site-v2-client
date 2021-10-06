import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Slide,
  Snackbar
} from '@material-ui/core';
import CodeIcon from '@mui/icons-material/Code';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { IProject } from 'src/assets/data';
import { useStyles } from './buttons-container.styles';

interface IProps {
  project: IProject;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SlideTransition = (props: TransitionProps) => {
  return <Slide {...props} direction="down" />;
};

export const ButtonsContainer: React.FC<IProps> = ({ project }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const shareLink = window.location.href;

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const _copy = () => {
    const copyText = document.getElementById('myInput') as any;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copyText.setAttribute('style', 'background-color: yellow;');
    setOpenSnackbar(true);
    handleCloseDialog();
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        className={classes.linksContainer}
      >
        <Grid item xs={2}>
          <IconButton onClick={() => setOpenDialog(true)}>
            <ShareIcon />
          </IconButton>
        </Grid>
        {project.sourceUrl && (
          <Grid item xs={10} md={5}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<CodeIcon />}
            >
              Source
            </Button>
          </Grid>
        )}
        {project.liveUrl && (
          <Grid item xs={12} md={5}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<PlayArrowIcon />}
            >
              Demo
            </Button>
          </Grid>
        )}
      </Grid>
      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogContent>
          <div>
            <input
              readOnly
              value={shareLink ?? ''}
              className={classes.input}
              id="myInput"
              onChange={() => null}
            ></input>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={_copy}
            >
              Copy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        TransitionComponent={SlideTransition}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert severity="success">Link copied! Paste it anywhere</Alert>
      </Snackbar>
    </>
  );
};
