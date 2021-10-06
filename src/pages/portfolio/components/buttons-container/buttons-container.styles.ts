import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15)
  },
  portfolioCardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(345px, 1fr))'
  },
  avatar: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    display: 'block'
  },
  projectDescription: {
    marginTop: theme.spacing(5),
    whiteSpace: 'pre-wrap'
  },
  type: {
    textTransform: 'capitalize'
  },
  linksContainer: {
    marginTop: theme.spacing(2)
  },
  input: {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    WebkitTouchCallout: 'none',
    border: `1px solid ${theme.palette.primary}`,
    width: '100%',
    padding: '0 1rem',
    ...theme.typography.body1,
    marginBottom: theme.spacing(2)
  },
  dialogPaper: {
    backgroundColor: theme.palette.background.default
  }
}));
