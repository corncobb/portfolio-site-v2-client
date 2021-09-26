import { Box, Container, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

export const NotFound = () => (
  <>
    <Helmet>
      <title>404 | CamCobb.com</title>
    </Helmet>
    <Box
      style={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h1">
          404: The page you are looking for is not here
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          You either tried some shady route or you came here by mistake. Try
          using the navigation
        </Typography>
        <Box style={{ textAlign: 'center' }}>
          <img
            alt="Not Found"
            src="/static/images/not_found.jpg"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);
