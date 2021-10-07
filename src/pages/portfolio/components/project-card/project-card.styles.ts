import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  description: {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    WebkitBoxOrient: 'vertical',
    lineClamp: 6,
    WebkitLineClamp: 6
  },
  cardRoot: {
    margin: 'auto'
  }
}));
