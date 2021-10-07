import { Helmet } from 'react-helmet';
import { NotFoundLayout } from './layout';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | CamCobb.com</title>
      </Helmet>
      <NotFoundLayout />
    </>
  );
};
