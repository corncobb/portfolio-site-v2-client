import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(15)}px 0`
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    paddingTop: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      border: `1px solid ${theme.palette.text.primary}`,
      right: '40px',
      top: 0
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      paddingTop: 0,
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto'
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: `2px solid ${theme.palette.text.primary}`,
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: `${theme.palette.primary.main} ${theme.palette.primary.main} transparent transparent`,
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: theme.palette.text.primary
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: `transparent transparent ${theme.palette.primary.main} ${theme.palette.primary.main}`
      }
    }
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',

    background: theme.palette.primary.main,
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto'
      },
      '&:nth-of-type(2n):before': {
        display: 'none'
      }
    }
  },
  timeLineTitle: {
    textAlign: 'center',
    maxWidth: '20rem',
    margin: '0 3rem 0 auto',

    background: theme.palette.primary.main,
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto'
      },
      '&:nth-of-type(2n):before': {
        display: 'none'
      }
    }
  },

  heading: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1)
  },
  text: {
    color: '#d58c71'
  },
  title: {
    marginBottom: theme.spacing(5)
  }
}));
