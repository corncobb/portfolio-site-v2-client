import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15)
  },
  portfolioCardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(345px, 1fr))'
  }
}));
