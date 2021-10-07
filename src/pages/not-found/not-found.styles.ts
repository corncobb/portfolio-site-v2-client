import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    height: '100%'
  },
  innerContainer: {
    height: '100%'
  },
  avatar: {
    fontSize: `${theme.spacing(30)}px !important`
  }
}));
