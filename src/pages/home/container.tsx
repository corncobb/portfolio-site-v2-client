import { Helmet } from 'react-helmet';
import { HomeLayout } from './layout';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | CamCobb.com</title>
      </Helmet>
      <HomeLayout />
    </>
  );
};
