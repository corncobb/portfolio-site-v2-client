import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      ul: {
        display: 'block',
        listStyleType: 'disc',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: 0,
        marginInlineEnd: 0,
        paddingInlineStart: 20
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        width: '100%'
      },
      a: {
        textDecoration: 'none'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};
