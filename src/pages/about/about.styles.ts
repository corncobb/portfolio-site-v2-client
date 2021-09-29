import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: 'auto',
    position: 'sticky',
    top: theme.spacing(15)
  },
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15)
  },
  subtitle: {
    marginTop: theme.spacing(4)
  }
}));
