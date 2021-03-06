import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    height: '100%'
  },
  linkedInButton: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));
