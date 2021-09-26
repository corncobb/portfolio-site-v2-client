import { Helmet } from 'react-helmet';
import { PortfolioLayout } from './layout';

export const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | CamCobb.com</title>
      </Helmet>
      <PortfolioLayout />
    </>
  );
};
