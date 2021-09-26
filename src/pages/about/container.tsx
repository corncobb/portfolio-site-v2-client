import { Helmet } from 'react-helmet';
import { AboutLayout } from './layout';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About | CamCobb.com</title>
      </Helmet>
      <AboutLayout />
    </>
  );
};
