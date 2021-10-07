import { Container, Grid, Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useStyles } from './not-found.styles';

export const NotFoundLayout = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.innerContainer}
        wrap="nowrap"
      >
        <Grid item>
          <SentimentVeryDissatisfiedIcon
            color="primary"
            classes={{ root: classes.avatar }}
            height={500}
            width={500}
          />
        </Grid>
        <Grid item>
          <Typography
            align="center"
            color="textPrimary"
            component="h1"
            variant="h1"
            gutterBottom
          >
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            color="textPrimary"
            component="p"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake. Try
            using the menu.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
